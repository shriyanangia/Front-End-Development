import { createClient } from "@supabase/supabase-js";
export const supabaseUrl = "https://omxhpykycenkrbinomew.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im9teGhweWt5Y2Vua3JiaW5vbWV3Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjU0OTIzNDMsImV4cCI6MjA0MTA2ODM0M30.CyDfhv0L2685HgCAbnx_bNznUsVDAiLSXJElQUaO5sM";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
