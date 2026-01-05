/**
 * アプリケーション共通型定義
 * 
 * 目的: UI関連の型定義を一箇所で管理（ドメインモデルやDB型とは独立）
 */

/**
 * 表示中のビュー種別
 * 
 * 目的: どのコンテンツを表示しているかを管理（メニュー、カレンダー等の切り替え制御）
 */
export type ViewType = "menu" | "calendar" | "blog" | "reserve" | null;

/**
 * メニューボタンの設定項目
 * 
 * 目的: 左側のナビゲーションボタンの見た目と動作を定義
 */
export interface MenuButtonItem {
  href: string;
  title: string;
  label: string;
  color: string;
  offset: string;
  glowClass: string;
}
