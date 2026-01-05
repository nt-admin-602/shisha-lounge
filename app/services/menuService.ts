/**
 * メニューデータ取得サービス
 * 
 * 目的:
 * - Supabaseデータベースからメニュー関連データを取得
 * - DB構造（スネークケース）をドメインモデル（キャメルケース）に変換
 * - データ取得ロジックをコンポーネントから分離し、再利用可能にする
 */
import { supabase } from '../lib/supabase';
import { Category, MenuItem } from '../models';

/**
 * カテゴリ一覧を取得
 * 
 * 目的: メニューを分類するためのカテゴリ（シーシャ、ドリンク等）を取得
 */
export async function getCategories(): Promise<Category[]> {
  const { data, error } = await supabase
    .from('categories')
    .select('*')
    .order('slug', { ascending: true });

  if (error) {
    console.error('Error fetching categories:', error);
    return [];
  }

  // DBの生データをドメインモデルに変換
  return data?.map(Category.fromDB) || [];
}

/**
 * 全メニューアイテムを取得
 * 
 * 目的: 有効な全商品（シーシャフレーバー、ドリンク等）を取得し、メニュー表示に使用
 */
export async function getMenuItems(): Promise<MenuItem[]> {
  const { data, error } = await supabase
    .from('menu_items')
    .select('*')
    .eq('is_active', true)
    .order('sort_order', { ascending: true });

  if (error) {
    console.error('Error fetching menu items:', error);
    return [];
  }

  // DBの生データをドメインモデルに変換
  return data?.map(MenuItem.fromDB) || [];
}

/**
 * 特定カテゴリのメニューアイテムを取得
 * 
 * 目的: カテゴリ別にフィルタリングされた商品一覧を取得（カテゴリページ等で使用）
 */
export async function getMenuItemsByCategory(categoryId: number): Promise<MenuItem[]> {
  const { data, error } = await supabase
    .from('menu_items')
    .select('*')
    .eq('category_id', categoryId)
    .eq('is_active', true)
    .order('sort_order', { ascending: true });

  if (error) {
    console.error('Error fetching menu items by category:', error);
    return [];
  }

  // DBの生データをドメインモデルに変換
  return data?.map(MenuItem.fromDB) || [];
}
