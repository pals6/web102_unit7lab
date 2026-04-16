import { createClient } from '@supabase/supabase-js'
const URL = 'https://rtjqcrgdcbewipbttaiw.supabase.co'
const API_KEY = 'sb_publishable_3rpBmUcQY6odKoFuh3-JBg_DSD1MDXU'

export const supabase = createClient(URL, API_KEY)
