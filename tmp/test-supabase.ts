import { createClient } from '@supabase/supabase-js';

const supabaseUrl = "https://uivsrjacqecgzdwepfrl.supabase.co";
const supabaseAnonKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InVpdnNyamFjcWVjZ3pkd2VwZnJsIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzU1ODk4NDYsImV4cCI6MjA5MTE2NTg0Nn0.iRjLw7vZ_E3_Ok_VHHtErAD99qD00EFBtrONpGsTRl4";

const supabase = createClient(supabaseUrl, supabaseAnonKey);

async function testInsert() {
  const { data, error } = await supabase
    .from('orders')
    .insert({
      status: 'pending',
      total: 1000,
      customer_email: 'test@example.com',
      customer_name: 'test'
    })
    .select()
    .single();

  console.log("Error:", error);
  console.log("Data:", data);
}

testInsert();
