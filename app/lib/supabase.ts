/**
 * Supabaseクライアントの初期化
 * 
 * 目的:
 * - フロントエンドからSupabaseデータベースにアクセスするためのクライアントを作成
 * - 環境変数からAPIキーを読み込み、セキュリティを確保
 * - アプリケーション全体で単一のSupabaseインスタンスを共有
 */
import { createClient } from '@supabase/supabase-js';

// 環境変数から接続情報を取得（.env.localで管理）
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;

// 環境変数が設定されていない場合はエラーを投げて早期に問題を検出
if (!supabaseUrl || !supabaseAnonKey) {
  throw new Error('Supabase環境変数が設定されていません');
}

// Supabaseクライアントを作成してエクスポート（アプリ全体で使用）
export const supabase = createClient(supabaseUrl, supabaseAnonKey);
