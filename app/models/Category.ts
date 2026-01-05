import type { DBCategory } from '../types/db';

/**
 * カテゴリーのドメインモデル
 * 
 * 目的:
 * - メニューのカテゴリ（シーシャ、ドリンク等）をビジネスロジックとして表現
 * - DB構造から独立したドメイン層を提供
 * - カテゴリに関連するビジネスロジックを集約
 */
export class Category {
  constructor(
    public readonly id: number,
    public readonly name: string,
    public readonly slug: string
  ) {}

  /**
   * 表示用の名前を取得
   * 
   * 目的: UI表示用に整形された名前を取得（将来的に装飾や変換を追加可能）
   */
  getDisplayName(): string {
    return this.name;
  }

  /**
   * DBの生データからドメインモデルを生成（ファクトリーメソッド）
   * 
   * 目的: DB構造（スネークケース）をドメインモデル（キャメルケース）に変換
   */
  static fromDB(data: DBCategory): Category {
    return new Category(
      data.id,
      data.name,
      data.slug
    );
  }
}
