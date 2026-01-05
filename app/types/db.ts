import { Database } from './supabase';

// Supabaseから自動生成された型を使用
export type DBCategory = Database['public']['Tables']['categories']['Row'];
export type DBMenuItem = Database['public']['Tables']['menu_items']['Row'];

// カテゴリ情報を含むメニュー項目
export interface DBMenuItemWithCategory extends DBMenuItem {
  categories?: DBCategory;
}
