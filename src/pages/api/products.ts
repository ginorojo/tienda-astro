import type { APIRoute } from 'astro';
import { supabase } from '@/lib/supabase';

export const POST: APIRoute = async ({ request, redirect }) => {
  const formData = await request.formData();
  
  const name = formData.get('name')?.toString();
  const description = formData.get('description')?.toString();
  const price = parseFloat(formData.get('price')?.toString() || '0');
  const stock = parseInt(formData.get('stock')?.toString() || '0');
  const category_id = formData.get('category_id')?.toString();
  const image_url = formData.get('image_url')?.toString();
  const sku = formData.get('sku')?.toString();
  const weight = parseFloat(formData.get('weight')?.toString() || '1');
  const width = parseInt(formData.get('width')?.toString() || '10');
  const height = parseInt(formData.get('height')?.toString() || '10');
  const length = parseInt(formData.get('length')?.toString() || '10');
  
  if (!name || !price || !sku || !weight || !width || !height || !length) {
    return new Response('Missing required fields (name, price, sku, weight, width, height, length)', { status: 400 });
  }

  const { error } = await supabase.from('products').insert({
    name,
    description,
    price,
    stock,
    image_url,
    sku,
    weight,
    width,
    height,
    length
  });

  if (error) {
    console.error('Error inserting product:', error);
    return new Response(JSON.stringify({ error: error.message }), { 
      status: 500,
      headers: { 'Content-Type': 'application/json' }
    });
  }

  return new Response(JSON.stringify({ success: true }), { 
    status: 200, 
    headers: { 'Content-Type': 'application/json' }
  });
};

