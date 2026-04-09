import type { APIRoute } from 'astro';
import { supabaseAdmin } from '@/lib/supabaseServer';

export const POST: APIRoute = async ({ request, url, locals }) => {
  try {
    const data = await request.json();
    const { amount, email, subject, customerName, items, shippingData } = data;

    const runtimeEnv: any = (locals as any)?.runtime?.env || {};
    const apiKey = runtimeEnv.FLOW_API_KEY || import.meta.env.FLOW_API_KEY;
    const secretKey = runtimeEnv.FLOW_SECRET_KEY || import.meta.env.FLOW_SECRET_KEY;
    const flowUrl = runtimeEnv.FLOW_API_URL || import.meta.env.FLOW_API_URL || 'https://sandbox.flow.cl/api';

    if (!apiKey || !secretKey) {
      return new Response(JSON.stringify({ error: 'Las credenciales de Flow no están configuradas en el .env' }), { status: 500 });
    }

    if (!amount || !email) {
      return new Response(JSON.stringify({ error: 'Faltan parámetros requeridos (amount, email)' }), { status: 400 });
    }

    // Insert pending order in Database
    const { data: orderData, error: orderError } = await supabaseAdmin
      .from('orders')
      .insert({
        status: 'pending',
        total: amount,
        customer_email: email,
        customer_name: customerName,
        region: shippingData?.region,
        comuna: shippingData?.comuna,
        address: shippingData?.address,
      })
      .select()
      .single();

    if (orderError || !orderData) {
      console.error('Error creating order in DB:', orderError);
      return new Response(JSON.stringify({ error: orderError?.message || 'No se pudo generar la orden temporal en Supabase' }), { status: 500 });
    }

    // Insert items
    if (items && items.length > 0) {
      const orderItems = items.map((item: any) => ({
        order_id: orderData.id,
        product_id: item.id || null,
        product_name: item.name,
        quantity: item.quantity,
        price: item.price
      }));
      await supabaseAdmin.from('order_items').insert(orderItems);
    }

    const orderId = orderData.id;

    const params: Record<string, string> = {
      apiKey: apiKey,
      commerceOrder: orderId,
      subject: subject || 'Compra en Tienda Astro',
      currency: 'CLP',
      amount: String(amount),
      email: email,
      urlConfirmation: `${url.origin}/api/checkout/flow-webhook`,
      urlReturn: `${url.origin}/checkout/result`,
    };

    // Sort keys alphabetically for the signature
    const keys = Object.keys(params).sort();
    let toSign = '';
    keys.forEach(k => {
      toSign += k + params[k];
    });

    // Generate HMAC SHA256 Signature using Web Crypto API
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
    
    // Attach signature
    params.s = signature;

    const formBody = new URLSearchParams(params);

    const response = await fetch(`${flowUrl}/payment/create`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      body: formBody.toString()
    });

    const result = await response.json();

    if (!response.ok || !result.url) {
      console.error('Flow API Error:', result);
      return new Response(JSON.stringify({ error: 'Error generando el pago en Flow', details: result }), { status: 400 });
    }

    const redirectUrl = `${result.url}?token=${result.token}`;

    return new Response(JSON.stringify({ redirectUrl }), {
      status: 200,
      headers: {
        'Content-Type': 'application/json'
      }
    });
  } catch (error: any) {
    console.error('Error en el endpoint de Flow:', error);
    return new Response(JSON.stringify({ error: error.message }), { status: 500 });
  }
};
