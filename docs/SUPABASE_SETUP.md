# Supabaseデータベース設定ガイド

## 問題
データは存在するが、APIから取得できない → RLSポリシー未設定

## 🚀 クイック解決方法

### 1. Supabase管理画面にアクセス
https://supabase.com/dashboard/project/puuxmxvgfykbfqopqvof

### 2. まずデータを確認
- 左メニュー「Table Editor」をクリック
- `categories`テーブルと`menu_items`テーブルにデータが入っているか確認

### 3. SQL Editorでポリシーを設定
- 左メニュー「SQL Editor」をクリック
- 「New Query」をクリック
- 以下のSQLをコピー&ペーストして実行（Ctrl+Enter）

```sql
-- 読み取り専用のRLSポリシーを設定

-- categoriesテーブルの読み取り許可
CREATE POLICY "公開読み取り許可_categories"
ON categories FOR SELECT
TO anon, authenticated
USING (true);

-- menu_itemsテーブルの読み取り許可（is_active=trueのみ）
CREATE POLICY "公開読み取り許可_menu_items"
ON menu_items FOR SELECT
TO anon, authenticated
USING (is_active = true);
```

### 4. ポリシーが既に存在する場合
エラーが出たら、既存のポリシーを確認：

```sql
-- 既存のポリシーを確認
SELECT schemaname, tablename, policyname, permissive, roles, cmd, qual
FROM pg_policies
WHERE tablename IN ('categories', 'menu_items');
```

ポリシーが存在しない、または設定が違う場合：

```sql
-- 既存のポリシーを削除（必要な場合のみ）
DROP POLICY IF EXISTS "公開読み取り許可_categories" ON categories;
DROP POLICY IF EXISTS "公開読み取り許可_menu_items" ON menu_items;

-- 再度作成
CREATE POLICY "公開読み取り許可_categories"
ON categories FOR SELECT
TO anon, authenticated
USING (true);

CREATE POLICY "公開読み取り許可_menu_items"
ON menu_items FOR SELECT
TO anon, authenticated
USING (is_active = true);
```

### 4. テストデータを手動で追加

管理画面の「Table Editor」から以下のデータを追加してください：

#### categoriesテーブル
| id | name | slug |
|----|------|------|
| 1 | フルーツ系 | fruits |
| 2 | ミント系 | mint |
| 3 | デザート系 | dessert |

#### menu_itemsテーブル
| id | name | base_price | category_id | is_active | sort_order | display_note |
|----|------|------------|-------------|-----------|------------|--------------|
| 1 | ダブルアップル | 1500 | 1 | true | 1 | 人気No.1 |
| 2 | グレープ | 1500 | 1 | true | 2 | null |
| 3 | ミント | 1500 | 2 | true | 1 | null |
| 4 | チョコレート | 1800 | 3 | true | 1 | null |

### 5. テストを再実行

```powershell
npx tsx test-supabase.ts
```

## 別の方法：Service Roleキーを使用

セキュリティリスクがあるため開発環境のみ使用：

1. Supabase管理画面の「Settings」→「API」
2. 「service_role」キーをコピー
3. `.env.local`に追加：
```
SUPABASE_SERVICE_ROLE_KEY=your_service_role_key
```

**注意**: service_roleキーは絶対に本番環境で使用しないでください！
