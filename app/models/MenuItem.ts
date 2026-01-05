import type { DBMenuItem } from '../types/db';

/**
 * メニューアイテムのドメインモデル
 * 
 * 目的:
 * - 商品（シーシャフレーバー、ドリンク等）をビジネスロジックとして表現
 * - 価格フォーマットや注釈の有無判定などのビジネスルールをカプセル化
 * - DB構造から独立し、ドメインに適した形でデータを扱う
 */
export class MenuItem {
  constructor(
    public readonly id: number,
    public readonly name: string,
    private readonly basePrice: number,
    public readonly categoryId: number,
    private readonly note?: string,
    private readonly sortOrder?: number
  ) {}

  /**
   * 価格を取得
   * 
   * 目的: 基本価格を取得（将来的に割引や税込計算などのロジックを追加可能）
   */
  getPrice(): number {
    return this.basePrice;
  }

  /**
   * フォーマットされた価格を取得（例: ¥1,500）
   * 
   * 目的: UI表示用に整形された価格文字列を提供（3桁区切り、通貨記号付き）
   */
  getFormattedPrice(): string {
    return `¥${this.basePrice.toLocaleString()}`;
  }

  /**
   * 注釈があるかどうか
   * 
   * 目的: 注釈の表示有無を判定（「おすすめ」「期間限定」等の表示制御）
   */
  hasNote(): boolean {
    return !!this.note;
  }

  /**
   * 注釈を取得
   * 
   * 目的: 商品に付随する補足情報（「おすすめ」「新商品」等）を取得
   */
  getNote(): string | undefined {
    return this.note;
  }

  /**
   * 表示順を取得
   * 
   * 目的: メニュー表示時のソート順序を取得（人気順、おすすめ順等の制御）
   */
  getSortOrder(): number {
    return this.sortOrder || 0;
  }

  /**
   * DBの生データからドメインモデルを生成（ファクトリーメソッド）
   * 
   * 目的: DB構造（base_price, category_id等）をドメインモデル（basePrice, categoryId等）に変換
   */
  static fromDB(data: DBMenuItem): MenuItem {
    return new MenuItem(
      data.id,
      data.name,
      data.base_price,
      data.category_id,
      data.display_note || undefined,
      data.sort_order || undefined
    );
  }
}
