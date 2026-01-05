/**
 * メニュー表示コンポーネント
 * 
 * 目的:
 * - シーシャフレーバー・ドリンク等のメニューをカテゴリ別に表示
 * - Supabaseからメニューデータを取得し、ユーザーに見やすく提示
 * - ローディング状態やエラー状態を適切に表示
 */
"use client";
import { useEffect, useState } from 'react';
import { getCategories, getMenuItems } from '../services/menuService';
import { Category, MenuItem } from '../models';

interface MenuContentProps {
  onClose: () => void;
}

export default function MenuContent({ onClose }: MenuContentProps) {
  const [categories, setCategories] = useState<Category[]>([]);
  const [menuItems, setMenuItems] = useState<MenuItem[]>([]);
  const [loading, setLoading] = useState(true);

  // コンポーネント初回表示時にメニューデータを取得
  // 目的: ユーザーがメニューボタンをクリックした時点で最新のメニューを表示
  useEffect(() => {
    async function fetchData() {
      setLoading(true);
      const [categoriesData, menuItemsData] = await Promise.all([
        getCategories(),
        getMenuItems(),
      ]);
      setCategories(categoriesData);
      setMenuItems(menuItemsData);
      setLoading(false);
    }
    fetchData();
  }, []);

  /**
   * カテゴリIDに基づいてメニューアイテムをフィルタリング
   * 
   * 目的: 各カテゴリに属する商品だけを抽出して表示（カテゴリ別の表示を実現）
   */
  const getItemsByCategory = (categoryId: number) => {
    return menuItems.filter(item => item.categoryId === categoryId);
  };

  return (
    <div className="ml-64 max-w-xl space-y-3 text-right drop-shadow-[0_3px_6px_rgba(0,0,0,0.85)] bg-slate-900/80 p-6 rounded-lg">
      <h2 className="text-2xl font-bold mb-4">SHISHA / DRINK MENU</h2>
      
      {loading ? (
        <div className="text-center py-8">
          <p className="text-slate-400">読み込み中...</p>
        </div>
      ) : categories.length === 0 ? (
        <div className="text-center py-8">
          <p className="text-slate-400">メニューが登録されていません</p>
        </div>
      ) : (
        <div className="space-y-4">
          {categories.map((category) => {
            const items = getItemsByCategory(category.id);
            return (
              <div key={category.id}>
                <h3 className="text-lg font-semibold">{category.getDisplayName()}</h3>
                <ul className="text-sm space-y-1">
                  {items.length === 0 ? (
                    <li className="text-slate-400">商品がありません</li>
                  ) : (
                    items.map((item) => (
                      <li key={item.id}>
                        {item.name} - {item.getFormattedPrice()}
                        {item.hasNote() && (
                          <span className="text-slate-400 text-xs ml-2">
                            ({item.getNote()})
                          </span>
                        )}
                      </li>
                    ))
                  )}
                </ul>
              </div>
            );
          })}
        </div>
      )}
      
      <button
        onClick={onClose}
        className="mt-4 px-4 py-2 bg-slate-700 rounded hover:bg-emerald-900/30 hover:drop-shadow-[0_0_15px_rgba(34,211,238,0.8)] transition-all"
      >
        閉じる
      </button>
    </div>
  );
}
