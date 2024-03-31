import { createClient } from "@supabase/supabase-js";
export const supabaseUrl = "https://bayzsdcxbnrjjmginktt.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJheXpzZGN4Ym5yamptZ2lua3R0Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDk3MzQ4OTAsImV4cCI6MjAyNTMxMDg5MH0.DXS7T6DbuW2pwmNqPQB2U-bjNoh9pmzHcfWgykr_8Bk";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
