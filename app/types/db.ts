/**
 * データベース型定義
 * 
 * 目的:
 * - Supabaseの自動生成型をアプリケーションで使いやすい形で再エクスポート
 * - DB構造の型を一箇所で管理し、変更時の影響範囲を限定
 * - ドメインモデルとDB構造の橋渡しをする
 */
import { Database } from './supabase';

// Supabaseから自動生成された型を使用
// 目的: DB構造の型安全性を確保し、DB変更時に型エラーで早期検出
export type DBCategory = Database['public']['Tables']['categories']['Row'];
export type DBMenuItem = Database['public']['Tables']['menu_items']['Row'];

// カテゴリ情報を含むメニュー項目
// 目的: JOIN結果など、複数テーブルの情報を含むデータ構造を表現
export interface DBMenuItemWithCategory extends DBMenuItem {
  categories?: DBCategory;
}
