import { createClient } from '@supabase/supabase-js'

const URL = 'https://dwjskpbaqazeswenainl.supabase.co'

// isn't this suppose to be an env var?

const API_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImR3anNrcGJhcWF6ZXN3ZW5haW5sIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTM5MjIxOTksImV4cCI6MjA2OTQ5ODE5OX0.EdB4_LO2SJnbznzocYm0Ajbd8IILjd_5ON_DYkItUFM'

export const supabase = createClient(URL, API_KEY)
