import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://jlfoadhchszqhkeypdpu.supabase.co";
const supabaseKey = 
"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InVzdGd5ZG9hbG51cHl0b29jcmJ2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2NzkyNTU5MTQsImV4cCI6MTk5NDgzMTkxNH0.cFL9plMBsP5mbgJbrLhkRkl6oJQklVH7H8oqV0N1Xug";
;
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
