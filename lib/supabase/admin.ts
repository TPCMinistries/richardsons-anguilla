import "server-only";
import { createClient } from "@supabase/supabase-js";

/**
 * Service-role Supabase client. Server-only — bypasses RLS.
 * Used to insert public website leads without exposing any DB access to the browser.
 */
export function createAdminClient() {
  return createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.SUPABASE_SERVICE_ROLE_KEY!,
    { auth: { persistSession: false, autoRefreshToken: false } }
  );
}
