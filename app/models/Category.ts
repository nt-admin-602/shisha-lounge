import type { DBCategory } from '../types/db';

/**
 * カテゴリーのドメインモデル
 */
export class Category {
  constructor(
    public readonly id: number,
    public readonly name: string,
    public readonly slug: string
  ) {}

  /**
   * 表示用の名前を取得
   */
  getDisplayName(): string {
    return this.name;
  }

  /**
   * DBの生データからドメインモデルを生成
   */
  static fromDB(data: DBCategory): Category {
    return new Category(
      data.id,
      data.name,
      data.slug
    );
  }
}
