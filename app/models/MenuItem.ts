import type { DBMenuItem } from '../types/db';

/**
 * メニューアイテムのドメインモデル
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
   */
  getPrice(): number {
    return this.basePrice;
  }

  /**
   * フォーマットされた価格を取得（例: ¥1,500）
   */
  getFormattedPrice(): string {
    return `¥${this.basePrice.toLocaleString()}`;
  }

  /**
   * 注釈があるかどうか
   */
  hasNote(): boolean {
    return !!this.note;
  }

  /**
   * 注釈を取得
   */
  getNote(): string | undefined {
    return this.note;
  }

  /**
   * 表示順を取得
   */
  getSortOrder(): number {
    return this.sortOrder || 0;
  }

  /**
   * DBの生データからドメインモデルを生成
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
