# 異形頭水煙館 (Shisha Lounge)

シーシャラウンジのWebサイト - Next.js + TypeScript + Tailwind CSS

## 🎨 プロジェクト構造

```
app/
├── page.tsx                 # メインページ（レイアウト・状態管理）
├── globals.css              # グローバルスタイル
├── layout.tsx               # ルートレイアウト
├── types/
│   └── index.ts            # 型定義（ViewType, MenuItem）
├── constants/
│   └── menuItems.ts        # メニューボタンデータ
└── components/
    ├── MenuButton.tsx      # ナビゲーションボタン
    ├── WelcomeText.tsx     # トップ画面のウェルカムテキスト
    ├── MenuContent.tsx     # シーシャ・ドリンクメニュー表示
    ├── CalendarContent.tsx # 開店日カレンダー表示
    ├── BlogContent.tsx     # ブログ・お知らせ表示
    └── ReserveContent.tsx  # 予約フォーム
```

## 🔄 データフロー

```
page.tsx (状態管理)
  ├── useState(view) - 表示中のコンテンツを管理
  ├── handleMenuClick() - メニューボタンクリック処理
  └── renderContent() - ビューに応じてコンテンツを表示
      ├── null → WelcomeText
      ├── "menu" → MenuContent
      ├── "calendar" → CalendarContent
      ├── "blog" → BlogContent
      └── "reserve" → ReserveContent
```

## 📦 コンポーネント説明

### レイアウト関連
- **`page.tsx`**: メインページ。状態管理とレイアウトを担当
- **`MenuButton`**: 左側の斜めメニューボタン（平行四辺形デザイン）
- **`WelcomeText`**: トップ画面に表示されるウェルカムメッセージ

### コンテンツ関連
- **`MenuContent`**: シーシャフレーバーとドリンクのメニュー
- **`CalendarContent`**: 営業日カレンダー（緑色の日が営業日）
- **`BlogContent`**: 最新のお知らせ・ブログ記事
- **`ReserveContent`**: 席の予約フォーム（名前、電話、日時、人数）

### データ・型定義
- **`types/index.ts`**: ViewTypeとMenuItemの型定義
- **`constants/menuItems.ts`**: メニューボタンの設定データ

## 🎯 主な機能

- **SPA構成**: Next.jsの静的エクスポートでSPAとして動作
- **状態管理**: useStateでビューの切り替え
- **ホバーエフェクト**: 青白い光のエフェクト（drop-shadow）
- **レスポンシブ**: モバイル・デスクトップ対応

## 🚀 Getting Started

### 開発サーバー起動

```bash
npm run dev
# または
yarn dev
```

ブラウザで [http://localhost:3000](http://localhost:3000) を開く

### ビルド（静的エクスポート）

```bash
npm run build
```

`out/`ディレクトリに静的ファイルが生成されます。

## 🛠️ 技術スタック

- **Next.js 16.1.1** - React フレームワーク
- **TypeScript** - 型安全性
- **Tailwind CSS** - ユーティリティファーストCSS
- **静的エクスポート** - `output: 'export'`でSPA化

## 📝 カスタマイズ方法

### メニュー項目を追加
1. `app/constants/menuItems.ts`に新しい項目を追加
2. `app/types/index.ts`のViewTypeに新しいビュー名を追加
3. 新しいコンテンツコンポーネントを`app/components/`に作成
4. `app/page.tsx`の`renderContent()`と`handleMenuClick()`に追加

### スタイルの変更
- ホバーエフェクトの色: `hover:drop-shadow-[0_0_15px_rgba(34,211,238,0.8)]`
- メニューボタンの背景色: `group-hover:bg-emerald-900/30`
- グローバルスタイル: `app/globals.css`

## 🎨 デザインコンセプト

- **平行四辺形メニュー**: `clipPath: "polygon(0 0, 92% 0, 100% 100%, 8% 100%)"`
- **青白い光のエフェクト**: マウスホバーで発光
- **透過背景**: `backdrop-blur-sm`でガラス風
- **ダークテーマ**: 黒背景にスレート色

## 📄 ライセンス

MIT

---

This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).
