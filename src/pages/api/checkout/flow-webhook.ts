import type { APIRoute } from 'astro';
import { supabaseAdmin } from '@/lib/supabaseServer';

export const POST: APIRoute = async ({ request, locals }) => {
  try {
    const formData = await request.formData();
    const token = formData.get('token')?.toString();

    if (!token) {
      return new Response('No token provided', { status: 400 });
    }

    const runtimeEnv: any = (locals as any)?.runtime?.env || {};
    const apiKey = runtimeEnv.FLOW_API_KEY || import.meta.env.FLOW_API_KEY;
    const secretKey = runtimeEnv.FLOW_SECRET_KEY || import.meta.env.FLOW_SECRET_KEY;
    const flowUrl = runtimeEnv.FLOW_API_URL || import.meta.env.FLOW_API_URL || 'https://sandbox.flow.cl/api';

    if (!apiKey || !secretKey) {
      return new Response('Configuración incompleta', { status: 500 });
    }

    // Armar parámetros para la solicitud a Flow
    const params: Record<string, string> = {
      apiKey: apiKey,
      token: token
    };

    const keys = Object.keys(params).sort();
    let toSign = '';
    keys.forEach(k => {
      toSign += k + params[k];
    });

    const encoder = new TextEncoder();
    const keyMaterial = await crypto.subtle.importKey(
      'raw',
      encoder.encode(secretKey),
      { name: 'HMAC', hash: 'SHA-256' },
      false,
      ['sign']
    );

    const signatureBuffer = await crypto.subtle.sign(
      'HMAC',
      keyMaterial,
      encoder.encode(toSign)
    );

    const hashArray = Array.from(new Uint8Array(signatureBuffer));
    const signature = hashArray.map(b => b.toString(16).padStart(2, '0')).join('');
    
    params.s = signature;
    const urlParams = new URLSearchParams(params);

    // Consultar el estado de la transacción a Flow
    const response = await fetch(`${flowUrl}/payment/getStatus?${urlParams.toString()}`);
    const data = await response.json();

    if (data.status === 2) {
      // Estado 2 es "Pagado". Proceder a actualizar la DB.
      const { data: updatedOrders, error } = await supabaseAdmin
        .from('orders')
        .update({ 
          status: 'paid',
          flow_order_id: data.flowOrder ? data.flowOrder.toString() : null,
          payment_method: data.paymentData?.media || 'Flow',
        })
        .eq('id', data.commerceOrder)
        .eq('status', 'pending')
        .select(); 

      if (error) {
        console.error('Error al actualizar la orden en Supabase:', error);
      }

      // Si la actualización devolvió filas, significa que nosotros cambiamos el estado
      // de pending a paid exitosamente. Procedemos a descontar el stock de forma segura.
      if (updatedOrders && updatedOrders.length > 0) {
        const { data: items } = await supabaseAdmin
          .from('order_items')
          .select('product_id, quantity')
          .eq('order_id', data.commerceOrder);

        if (items) {
          for (const item of items) {
            if (item.product_id) {
              const { data: product } = await supabaseAdmin
                .from('products')
                .select('stock')
                .eq('id', item.product_id)
                .single();

              if (product && typeof product.stock === 'number') {
                await supabaseAdmin
                  .from('products')
                  .update({ stock: Math.max(0, product.stock - item.quantity) })
                  .eq('id', item.product_id);
              }
            }
          }
        }
      }
    } else if (data.status === 3 || data.status === 4) {
      // Estado 3 es Rechazado, 4 es Anulado
      await supabaseAdmin
        .from('orders')
        .update({ status: 'failed' })
        .eq('id', data.commerceOrder);
    }

    // Flow espera un 200 OK para saber que recibimos el webhook
    return new Response('OK', { status: 200 });
  } catch (error) {
    console.error('Error en webhook de Flow:', error);
    return new Response('Internal Server Error', { status: 500 });
  }
};
