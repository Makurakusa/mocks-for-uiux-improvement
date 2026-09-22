# mocks-for-uiux-improvement
UIUX改善用画面モック

架空の「カンバン式タスク管理ダッシュボード」を題材に、UI改善の前後を比較するモック。
詳細は [for-developers/1.goal_of_this_project.md](for-developers/1.goal_of_this_project.md) と [for-developers/2.specification.md](for-developers/2.specification.md) を参照。

## 構成

- `original/` … Before(素朴な実装)
- `improved-1/`, `improved-2/` … After(設計判断を適用したもの、複数案)
- `shared/` … Before/After 共通のダミーデータ・ロジック

## 見る方法

ビルド不要。各ディレクトリの `index.html` を Live Server 等のローカルサーバーで開く(ES Modules を使うため `file://` 直開き不可)。
