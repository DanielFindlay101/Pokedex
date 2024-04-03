import { createClient } from "@supabase/supabase-js";

const supabaseUrl = import.meta.env.VITE_SUPABASE_APP_URL;
const supabaseApiKey = import.meta.env.VITE_SUPABASE_APP_API_KEY;

export const supabase = createClient(supabaseUrl, supabaseApiKey);
