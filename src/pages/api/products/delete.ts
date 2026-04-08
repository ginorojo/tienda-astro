import type { APIRoute } from 'astro';
import { supabase } from '@/lib/supabase';

export const POST: APIRoute = async ({ request, redirect }) => {
  try {
    const formData = await request.formData();
    const id = formData.get('id')?.toString();
    
    console.log('Intentando eliminar producto con ID:', id);

    if (!id) {
      return new Response('Falta el ID del producto', { status: 400 });
    }

    const { error } = await supabase
      .from('products')
      .delete()
      .eq('id', id);

    if (error) {
      console.error('Error de Supabase al eliminar producto:', error);
      return new Response(JSON.stringify({ error: error.message }), { 
        status: 500,
        headers: { 'Content-Type': 'application/json' }
      });
    }

    console.log('Producto eliminado con éxito:', id);
    return new Response(JSON.stringify({ success: true, id }), { 
      status: 200, 
      headers: { 'Content-Type': 'application/json' }
    });
  } catch (err) {
    console.error('Error inesperado al eliminar producto:', err);
    return new Response(JSON.stringify({ error: 'Error interno del servidor' }), { 
      status: 500,
      headers: { 'Content-Type': 'application/json' }
    });
  }
};


