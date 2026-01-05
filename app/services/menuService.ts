import { supabase } from '../lib/supabase';
import { Category, MenuItem } from '../models';

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
