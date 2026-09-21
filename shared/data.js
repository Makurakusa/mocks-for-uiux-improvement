// ダミーデータ(メンバー・タスク・通知)。すべて架空の名称・文面。
// Before(original) / After(improved) の両方から読み込まれる共有データ。

export const members = [
  { id: 'm1', name: '佐藤 陽菜' },
  { id: 'm2', name: '鈴木 大輝' },
  { id: 'm3', name: '高橋 美咲' },
  { id: 'm4', name: '田中 健太' },
  { id: 'm5', name: '伊藤 さくら' },
];

export const lanes = [
  { id: 'todo', name: '未着手' },
  { id: 'doing', name: '対応中' },
  { id: 'review', name: 'レビュー中' },
  { id: 'done', name: '完了' },
];

export const priorities = ['高', '中', '低'];

export const labelOptions = ['フロントエンド', 'バックエンド', 'デザイン', '調査', '緊急', 'ドキュメント'];

// 「今日」はモック内では 2026-09-21 を想定してダミーデータを作成している。
export const tasks = [
  { id: 't1', title: 'ログイン画面のレイアウト修正', assigneeId: 'm1', dueDate: '2026-09-18', priority: '高', labels: ['フロントエンド'], lane: 'todo', note: 'スマホ幅で入力欄が崩れているため、レスポンシブ対応を行う。折り返し位置の確認も必要。', createdAt: '2026-09-01' },
  { id: 't2', title: '検索APIのレスポンス調査', assigneeId: 'm2', dueDate: '2026-09-25', priority: '中', labels: ['バックエンド', '調査'], lane: 'todo', note: 'レスポンスが遅いケースの原因を調べる。', createdAt: '2026-09-03' },
  { id: 't3', title: 'アイコンセットの選定', assigneeId: 'm3', dueDate: '2026-10-02', priority: '低', labels: ['デザイン'], lane: 'todo', note: '', createdAt: '2026-09-05' },
  { id: 't4', title: '他社事例の調査', assigneeId: 'm4', dueDate: null, priority: '中', labels: ['調査'], lane: 'todo', note: '期限未定。時間があるときに進める。', createdAt: '2026-09-06' },
  { id: 't5', title: '本番障害の暫定対応', assigneeId: 'm5', dueDate: '2026-09-19', priority: '高', labels: ['緊急', 'バックエンド'], lane: 'todo', note: '恒久対応は別タスクで起票予定。', createdAt: '2026-09-10' },
  { id: 't6', title: '利用マニュアルの目次作成', assigneeId: null, dueDate: '2026-09-30', priority: '低', labels: ['ドキュメント'], lane: 'todo', note: '担当者未アサイン。', createdAt: '2026-09-11' },

  { id: 't7', title: '利用規約ページの誤字修正', assigneeId: 'm2', dueDate: '2026-09-20', priority: '高', labels: ['フロントエンド', 'ドキュメント'], lane: 'doing', note: '', createdAt: '2026-09-02' },
  { id: 't8', title: '通知バッジのデザイン調整', assigneeId: 'm1', dueDate: '2026-09-23', priority: '中', labels: ['フロントエンド', 'デザイン'], lane: 'doing', note: '未読件数が2桁になった場合の表示を確認する。', createdAt: '2026-09-04' },
  { id: 't9', title: 'APIエラー時のリトライ処理', assigneeId: 'm3', dueDate: '2026-09-16', priority: '高', labels: ['バックエンド', '緊急'], lane: 'doing', note: 'タイムアウト時に3回まで自動リトライさせる。', createdAt: '2026-09-05' },
  { id: 't10', title: 'ダークテーマ用の配色検討', assigneeId: 'm4', dueDate: '2026-10-05', priority: '低', labels: ['デザイン'], lane: 'doing', note: '', createdAt: '2026-09-07' },
  { id: 't11', title: '競合サービスの機能比較', assigneeId: 'm5', dueDate: '2026-09-28', priority: '中', labels: ['調査'], lane: 'doing', note: '主要3サービスを比較表にまとめる。', createdAt: '2026-09-09' },
  { id: 't12', title: 'リリースノートの下書き', assigneeId: 'm1', dueDate: '2026-09-22', priority: '高', labels: ['ドキュメント'], lane: 'doing', note: '', createdAt: '2026-09-12' },

  { id: 't13', title: 'トップページの導線見直し', assigneeId: 'm2', dueDate: '2026-09-19', priority: '中', labels: ['フロントエンド'], lane: 'review', note: 'CTAボタンの位置についてレビュー依頼中。', createdAt: '2026-09-03' },
  { id: 't14', title: 'ログ出力フォーマットの統一', assigneeId: 'm3', dueDate: '2026-09-24', priority: '低', labels: ['バックエンド'], lane: 'review', note: '', createdAt: '2026-09-06' },
  { id: 't15', title: '決済フローのレビュー', assigneeId: 'm4', dueDate: '2026-09-21', priority: '高', labels: ['デザイン', '緊急'], lane: 'review', note: '入力エラー時の見え方について指摘あり。', createdAt: '2026-09-08' },
  { id: 't16', title: 'アクセス解析タグの調査', assigneeId: 'm5', dueDate: '2026-09-29', priority: '中', labels: ['調査'], lane: 'review', note: '', createdAt: '2026-09-10' },
  { id: 't17', title: 'FAQページの文言校正', assigneeId: 'm1', dueDate: '2026-10-01', priority: '低', labels: ['ドキュメント'], lane: 'review', note: '', createdAt: '2026-09-13' },
  { id: 't18', title: '検索結果の並び順レビュー', assigneeId: 'm2', dueDate: '2026-09-17', priority: '高', labels: ['バックエンド', 'フロントエンド'], lane: 'review', note: '関連度順とする案でレビュー依頼中。', createdAt: '2026-09-14' },

  { id: 't19', title: 'お問い合わせフォームの改修', assigneeId: 'm3', dueDate: '2026-09-10', priority: '中', labels: ['フロントエンド'], lane: 'done', note: '', createdAt: '2026-08-20' },
  { id: 't20', title: 'DBインデックスの見直し', assigneeId: 'm4', dueDate: '2026-09-12', priority: '低', labels: ['バックエンド'], lane: 'done', note: '', createdAt: '2026-08-22' },
  { id: 't21', title: 'バナー画像の差し替え', assigneeId: 'm5', dueDate: '2026-09-14', priority: '高', labels: ['デザイン'], lane: 'done', note: '', createdAt: '2026-08-25' },
  { id: 't22', title: '他部署へのヒアリング', assigneeId: 'm1', dueDate: '2026-09-08', priority: '中', labels: ['調査'], lane: 'done', note: '', createdAt: '2026-08-27' },
  { id: 't23', title: '障害対応フローの緊急周知', assigneeId: 'm2', dueDate: '2026-09-11', priority: '低', labels: ['緊急'], lane: 'done', note: '', createdAt: '2026-08-28' },
  { id: 't24', title: '議事録テンプレートの作成', assigneeId: 'm3', dueDate: '2026-09-13', priority: '高', labels: ['ドキュメント'], lane: 'done', note: '', createdAt: '2026-08-30' },
];

export const notifications = [
  { id: 'n1', type: 'report', datetime: '2026-09-21T08:00:00', sender: 'システム', content: '本日8:00時点のサマリ: 未着手6件・対応中6件・レビュー中6件・完了6件、期限超過4件です。', read: false, relatedTaskId: null },
  { id: 'n2', type: 'message', datetime: '2026-09-20T17:32:00', sender: '佐藤 陽菜', content: '「ログイン画面のレイアウト修正」について、スマホ表示のスクリーンショットを共有しました。確認をお願いします。', read: false, relatedTaskId: 't1' },
  { id: 'n3', type: 'overdue', datetime: '2026-09-20T09:00:00', sender: 'システム', content: '「APIエラー時のリトライ処理」の期限(2026-09-16)を超過しています。', read: false, relatedTaskId: 't9' },
  { id: 'n4', type: 'message', datetime: '2026-09-19T14:10:00', sender: '鈴木 大輝', content: '検索APIの調査、想定より時間がかかりそうです。優先度について相談したいです。', read: true, relatedTaskId: 't2' },
  { id: 'n5', type: 'overdue', datetime: '2026-09-19T09:00:00', sender: 'システム', content: '「検索結果の並び順レビュー」の期限(2026-09-17)を超過しています。', read: true, relatedTaskId: 't18' },
  { id: 'n6', type: 'report', datetime: '2026-09-20T08:00:00', sender: 'システム', content: '前日のサマリ: 完了2件、新規追加1件でした。', read: true, relatedTaskId: null },
  { id: 'n7', type: 'message', datetime: '2026-09-18T11:45:00', sender: '高橋 美咲', content: 'アイコンセットの候補を3案まとめました。デザインレビューをお願いします。', read: false, relatedTaskId: 't3' },
  { id: 'n8', type: 'overdue', datetime: '2026-09-19T09:05:00', sender: 'システム', content: '「トップページの導線見直し」の期限(2026-09-19)が本日までです。', read: true, relatedTaskId: 't13' },
  { id: 'n9', type: 'message', datetime: '2026-09-17T16:00:00', sender: '田中 健太', content: 'レビュー待ちのタスクが増えてきたので、優先順位を教えてください。', read: true, relatedTaskId: null },
  { id: 'n10', type: 'report', datetime: '2026-09-19T08:00:00', sender: 'システム', content: '前日のサマリ: 完了1件、期限超過2件でした。', read: true, relatedTaskId: null },
  { id: 'n11', type: 'message', datetime: '2026-09-16T10:20:00', sender: '伊藤 さくら', content: '利用マニュアルのタスク、担当を交代してもらえますか?', read: false, relatedTaskId: 't6' },
  { id: 'n12', type: 'overdue', datetime: '2026-09-21T00:05:00', sender: 'システム', content: '「利用規約ページの誤字修正」の期限(2026-09-20)を超過しています。', read: false, relatedTaskId: 't7' },
];
