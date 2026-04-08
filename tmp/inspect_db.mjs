import { createClient } from '@supabase/supabase-js';

const supabaseUrl = "https://uivsrjacqecgzdwepfrl.supabase.co";
const supabaseAnonKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InVpdnNyamFjcWVjZ3pkd2VwZnJsIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzU1ODk4NDYsImV4cCI6MjA5MTE2NTg0Nn0.iRjLw7vZ_E3_Ok_VHHtErAD99qD00EFBtrONpGsTRl4";

const supabase = createClient(supabaseUrl, supabaseAnonKey);

async function inspect() {
  // We'll try to insert a fake record with all plausible columns and see which ones fail
  // Actually, better: just fetch one record and log it again, but look at the actual JSON.
  const { data, error } = await supabase.from('products').select('*').limit(1);
  if (data && data.length > 0) {
    console.log('RECORD KEYS:', Object.keys(data[0]));
  } else {
    console.log('No data to inspect.');
  }
}

inspect();
