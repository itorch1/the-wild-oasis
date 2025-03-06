import { createClient } from "@supabase/supabase-js";

export const supabaseUrl = "https://rxdhfeyochjltpaecilj.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJ4ZGhmZXlvY2hqbHRwYWVjaWxqIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Mzc1NTYyMDEsImV4cCI6MjA1MzEzMjIwMX0.eZsyDh1sDerwJVUlf8Weu4IVPtaeResUYHq7DrFnYL0";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
