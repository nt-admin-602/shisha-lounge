import { supabase } from '../lib/supabase';
import { Category, MenuItem, MenuItemWithCategory } from '../types/models';

export async function getCategories(): Promise<Category[]> {
  const { data, error } = await supabase
    .from('categories')
    .select('*')
    .order('slug', { ascending: true });

  if (error) {
    console.error('Error fetching categories:', error);
    return [];
  }

  return data || [];
}

export async function getMenuItems(): Promise<MenuItemWithCategory[]> {
  console.log('Fetching menu items...');
  
  // まずはシンプルに取得してみる
  const { data, error } = await supabase
    .from('menu_items')
    .select('*')
    .eq('is_active', true)
    .order('sort_order', { ascending: true });

  if (error) {
    console.error('Error fetching menu items:', error);
    console.error('Error details:', {
      message: error.message,
      details: error.details,
      hint: error.hint,
      code: error.code
    });
    console.error('Error stringified:', JSON.stringify(error, null, 2));
    console.error('Error keys:', Object.keys(error));
    return [];
  }

  console.log('Menu items fetched successfully:', data);
  return data as any || [];
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

  return data || [];
}
