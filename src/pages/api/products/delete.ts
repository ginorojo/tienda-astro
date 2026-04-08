import type { APIRoute } from 'astro';
import { supabase } from '@/lib/supabase';

export const POST: APIRoute = async ({ request, redirect }) => {
  const formData = await request.formData();
  const id = formData.get('id')?.toString();
  
  if (!id) {
    return new Response('Missing product ID', { status: 400 });
  }

  const { error } = await supabase
    .from('products')
    .delete()
    .eq('id', id);

  if (error) {
    console.error('Error deleting product:', error);
    return new Response(error.message, { status: 500 });
  }

  return redirect('/admin/products');
};
