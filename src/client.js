import {createClient} from '@supabase/supabase-js';
const URL = "https://ejfamtepjfgbxkfugqrm.supabase.co";
const API_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImVqZmFtdGVwamZnYnhrZnVncXJtIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjAyOTEwMTcsImV4cCI6MjAzNTg2NzAxN30.Zu2ulvcsQGv3Q7HCFad4bEvVAUHoQML5r9ZvawUgzbc";
export const supabase = createClient(URL, API_KEY);

