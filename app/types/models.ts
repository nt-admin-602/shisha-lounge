import { Database } from './supabase';

// Supabaseから自動生成された型を使用
export type Category = Database['public']['Tables']['categories']['Row'];
export type MenuItem = Database['public']['Tables']['menu_items']['Row'];

// カテゴリ情報を含むメニュー項目
export interface MenuItemWithCategory extends MenuItem {
  categories?: Category;
}
