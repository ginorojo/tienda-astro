import type { APIRoute } from 'astro';
import { supabase } from '@/lib/supabase';
import * as XLSX from 'xlsx';

export const POST: APIRoute = async ({ request }) => {
  try {
    const formData = await request.formData();
    const file = formData.get('file') as File;
    if (!file) return new Response(JSON.stringify({ error: 'No se proporcionó ningún archivo' }), { status: 400 });

    const buffer = await file.arrayBuffer();
    const workbook = XLSX.read(buffer);
    const sheet = workbook.Sheets[workbook.SheetNames[0]];
    const rows = XLSX.utils.sheet_to_json(sheet);

    if (rows.length === 0) {
      return new Response(JSON.stringify({ error: 'El archivo está vacío' }), { status: 400 });
    }

    // Mapping for flexible column names
    const columnMap: Record<string, string[]> = {
      sku: ['sku', 'SKU'],
      name: ['name', 'nombre', 'Nombre'],
      description: ['description', 'descripción', 'Descripción'],
      price: ['price', 'precio', 'Precio'],
      stock: ['stock', 'Stock', 'cantidad'],
      image_url: ['image_url', 'imagen', 'Imagen'],
      weight: ['weight', 'weight_kg', 'peso', 'Peso'],
      width: ['width', 'width_cm', 'ancho', 'Ancho'],
      height: ['height', 'height_cm', 'alto', 'Alto'],
      length: ['length', 'length_cm', 'largo', 'Largo'],
      category_id: ['category_id', 'categoria', 'Categoría']
    };

    const getRowValue = (row: any, target: string) => {
      const keys = columnMap[target] || [target];
      for (const key of keys) {
        if (row[key] !== undefined && row[key] !== null) return row[key];
      }
      return null;
    };

    // Mandatory check (at least one variation of each must exist in the first row)
    const firstRow = rows[0] as any;
    const missingColumns = Object.keys(columnMap).filter(target => {
      return !columnMap[target].some(variation => Object.keys(firstRow || {}).includes(variation));
    });
    
    // We'll allow category_id to be missing from headings for now but warn/fail if strict
    if (missingColumns.length > 0 && !missingColumns.every(c => c === 'category_id')) {
      return new Response(JSON.stringify({ 
        error: 'error al subir archivo', 
        message: `Faltan columnas o variaciones obligatorias: ${missingColumns.join(', ')}` 
      }), { status: 400 });
    }

    let created = 0, updated = 0;
    const failedRows: any[] = [];

    for (let i = 0; i < rows.length; i++) {
      const row = rows[i] as any;
      try {
        const productData: any = {};
        const missingFields = [];

        for (const target of Object.keys(columnMap)) {
          const val = getRowValue(row, target);
          if (val === null || val === '') {
            if (target !== 'category_id') missingFields.push(target);
          } else {
            productData[target] = val;
          }
        }

        if (missingFields.length > 0) {
          throw new Error(`Campos faltantes: ${missingFields.join(', ')}`);
        }

        // Type conversion
        productData.price = parseInt(productData.price);
        productData.stock = parseInt(productData.stock);
        productData.weight = parseFloat(productData.weight);
        productData.width = parseInt(productData.width);
        productData.height = parseInt(productData.height);
        productData.length = parseInt(productData.length);
        // category_id is kept only if provided, we'll try to insert it
        // but removed is_new and on_sale as they don't exist in DB

        // Try to UPSERT in ONE call using onConflict 'sku'
        const { error: upsertError } = await supabase
          .from('products')
          .upsert(productData, { onConflict: 'sku' });

        if (upsertError) throw upsertError;

        // Note: Supabase upsert doesn't easily tell you if it was insert or update without a return, 
        // but for reporting simplicity we'll just track success. 
        // If we really need created vs updated count, we'd need a select first or .select() in upsert.
        // For now, we'll just call them 'Procesados'.
        updated++; // We'll count as 'updated' if it was upserted successfully
      } catch (e: any) {
        failedRows.push({
          row: i + 2, // Excel row numbering
          sku: row.sku || 'N/A',
          error: e.message || 'Error desconocido'
        });
      }
    }

    return new Response(JSON.stringify({ 
      created, // We'll use 0 or combine with updated
      updated, 
      failed: failedRows.length,
      failedDetails: failedRows 
    }), { status: 200 });
  } catch (err: any) {
    console.error('Bulk upload error:', err);
    return new Response(JSON.stringify({ error: 'error al subir archivo', details: err.message }), { status: 500 });
  }
};
