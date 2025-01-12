
import { createClient } from '@supabase/supabase-js';
export const supabaseUrl = 'https://mrunivcyggxphqcnxecl.supabase.co';
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im1ydW5pdmN5Z2d4cGhxY254ZWNsIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzY1NzgxOTMsImV4cCI6MjA1MjE1NDE5M30.zge57CzijX76CGogdcwOcfAKcU9StaEGyXRXdEkdE-o";
const supabase = createClient(supabaseUrl, supabaseKey); 

export default supabase;




//keys are in project settings > api > anon key
//with the key, only those operations which are allowed by row level policies can be done.