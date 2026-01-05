import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;

console.log('Supabase初期化:', {
  url: supabaseUrl ? `${supabaseUrl.substring(0, 30)}...` : '未設定',
  keyLength: supabaseAnonKey ? supabaseAnonKey.length : 0
});

if (!supabaseUrl || !supabaseAnonKey) {
  console.error('Supabase環境変数が設定されていません:', {
    url: supabaseUrl ? '✅' : '❌',
    key: supabaseAnonKey ? '✅' : '❌'
  });
}

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
