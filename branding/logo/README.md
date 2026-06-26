# UniDrop ブランドロゴアセット

## ファイル一覧

| ファイル                       | 内容                                                      | 用途                           |
| ------------------------------ | --------------------------------------------------------- | ------------------------------ |
| `official-logo.png`            | 公式横長PNG（1047x203、封筒+UniDrop）                     | 通常表示の一次ソース           |
| `official-logo-white.png`      | 同キャンバスの白ロゴPNG（封筒の折り線は透過を保持）       | 暗背景表示の一次ソース         |
| `official-mark.png`            | 封筒マークPNG（674x472、余白トリム済み）                  | アイコン派生の一次ソース       |
| `unidrop-logo.png`             | `official-logo.png` から最適化した互換ファイル            | 旧URL互換、OG生成補助          |
| `unidrop-logo-white.png`       | `official-logo-white.png` から最適化した互換ファイル      | 旧URL互換                      |
| `unidrop-mark.png`             | `official-mark.png` から最適化した互換ファイル            | 旧URL互換                      |
| `favicon-32.png`               | `official-mark.png` から生成した 32x32 favicon            | ブラウザタブ                   |
| `favicon-180.png`              | `official-mark.png` から生成した 180x180 Apple Touch Icon | iOS ホーム画面                 |
| `favicon-192.png`              | `official-mark.png` から生成した 192x192 PWA アイコン     | `manifest.json`、通知          |
| `favicon-512.png`              | `official-mark.png` から生成した 512x512 PWA アイコン     | `manifest.json`                |
| `official-avatar.jpg`          | `official-mark.png` から生成した公式アカウント画像        | チャット内の公式表示           |
| `unid.png`                     | `official-logo.png` から最適化した互換ファイル            | 旧URL互換のみ                  |
| `unidroplogo.png`              | `official-logo.png` を中央配置した互換ファイル            | 旧URL互換のみ                  |
| `originals/source-logo.png` 他 | 支給された新ブランド元画像（封筒/横ロゴ/白ロゴ）          | アーカイブ（再生成の元データ） |
| `originals/`                   | 上記元画像から再生成した管理用ファイル                    | アーカイブ                     |

## 表示ルール

`@/components/BrandLogo` を使用してロゴを表示する。

```tsx
import { BrandLogo } from "@/components/BrandLogo";

<BrandLogo size="sm" />
<BrandLogo size="sm" textLabel="UniDrop Tsukuba" />
<BrandLogo variant="stacked" size="xs" />
<BrandLogo size="sm" white />
```

通常表示では `official-logo.png` の公式色をそのまま使う。暗い背景やLPヒーロー上では `white` を指定し、同じキャンバスサイズの `official-logo-white.png` を表示する。LPの固定ナビはヒーロー上で白ロゴ、スクロール後に公式色ロゴへ切り替わる。

新規実装では `official-logo.png`、`official-logo-white.png`、`official-mark.png` を参照する。`unid.png` と `unidroplogo.png` は旧URL互換のために残しているだけで、内容は公式PNG由来に置き換え済み。ロゴ更新後は `BrandLogo.tsx` のクエリバージョンも更新してブラウザキャッシュを切り替える（現在 `?v=20260523`）。

全アセットは支給された新ブランド画像（`originals/source-*.png`）を直接リサイズ・トリミングして生成しており、SVG からの再描画は行わない。
