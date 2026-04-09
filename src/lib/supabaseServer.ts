import { createClient } from '@supabase/supabase-js';

export const getSupabaseAdmin = (locals?: any) => {
  const runtimeEnv: any = locals?.runtime?.env || {};
  const supabaseUrl = runtimeEnv.PUBLIC_SUPABASE_URL || import.meta.env.PUBLIC_SUPABASE_URL;
  const supabaseServiceKey = runtimeEnv.SUPABASE_SERVICE_ROLE_KEY || import.meta.env.SUPABASE_SERVICE_ROLE_KEY;

  if (!supabaseUrl || !supabaseServiceKey) {
    console.warn('Supabase service role key missing. Ensure SUPABASE_SERVICE_ROLE_KEY is set in .env');
  }

  return createClient(
    supabaseUrl || 'https://missing.supabase.co',
    supabaseServiceKey || 'MISSING_SERVICE_KEY',
    {
      auth: {
        autoRefreshToken: false,
        persistSession: false
      }
    }
  );
};
