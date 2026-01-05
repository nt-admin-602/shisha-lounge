# コーディング規約

このプロジェクトで守るべきコーディングルールをまとめています。

## 基本原則

### シンプルさを優先

- ✅ **必要最小限の実装**: 実際に必要な機能だけを実装する
- ✅ **具体的な型定義**: データベースやAPIの型に合わせて、正確な型を使う
- ❌ **過度な拡張性**: 「将来使うかも」という理由での拡張は避ける
- ❌ **Union型の乱用**: `string | number` のような「念のため」の型定義は避ける

### YAGNI原則（You Aren't Gonna Need It）

必要になってから実装する。先読みして複雑にしない。

## 型定義のルール

### ✅ 良い例

```typescript
// データベースの型が number なら、関数も number を受け取る
const getItemsByCategory = (categoryId: number) => {
  return menuItems.filter(item => item.category_id === categoryId);
};
```

### ❌ 悪い例

```typescript
// 「念のため」で string も受け付けるようにする（不要な拡張）
const getItemsByCategory = (categoryId: string | number) => {
  return menuItems.filter(item => item.category_id === categoryId);
};
```

## 実装のルール

1. **データソースの型を確認**: データベースやAPIの型定義を先に確認する
2. **型を正確に合わせる**: 実装時は、データソースの型に正確に合わせる
3. **変換は最小限に**: 不要な型変換や条件分岐を避ける

## コード品質

- **読みやすさ**: 変数名や関数名は分かりやすく
- **一貫性**: プロジェクト内で命名規則やスタイルを統一
- **最小限のコメント**: コード自体が説明的であれば、コメントは不要

---

*最終更新: 2026年1月5日*
