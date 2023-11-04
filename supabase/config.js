import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://pvljogumgjnzfsbjpyke.supabase.co'
// const supabaseKey = process.env.SUPABASE_KEY
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InB2bGpvZ3VtZ2puemZzYmpweWtlIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NjMyNTA3ODksImV4cCI6MTk3ODgyNjc4OX0.iAuzNKN4uOqaiLztwWiNDXK8qG5blwEX_yYF82dL7eY'

export const supabase = createClient(supabaseUrl, supabaseKey)