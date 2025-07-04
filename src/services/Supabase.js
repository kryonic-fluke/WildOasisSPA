

import { createClient } from '@supabase/supabase-js'

export const supabaseUrl = 'https://xkkjhrbogvzjrzieusah.supabase.co'
export const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inhra2pocmJvZ3Z6anJ6aWV1c2FoIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTEzNjE5OTYsImV4cCI6MjA2NjkzNzk5Nn0.G7rThtrxkSDlKqzRkUlYFLH7oAaA4kR1ChszTd-j3ls"
const supabase = createClient(supabaseUrl, supabaseKey)
export default supabase;




//keys are in project settings > api > anon key
//with the key, only those operations which are allowed by row level policies can be done.