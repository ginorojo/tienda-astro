import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.PUBLIC_SUPABASE_URL;
const supabaseServiceKey = import.meta.env.SUPABASE_SERVICE_ROLE_KEY;

if (!supabaseUrl || !supabaseServiceKey) {
  console.warn('Supabase service role key missing. Ensure SUPABASE_SERVICE_ROLE_KEY is set in .env');
}

export const supabaseAdmin = createClient(
  supabaseUrl || 'https://missing.supabase.co',
  supabaseServiceKey || 'MISSING_SERVICE_KEY',
  {
    auth: {
      autoRefreshToken: false,
      persistSession: false
    }
  }
);
