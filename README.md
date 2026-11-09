# アフィリエイト用ブログ（Astro）

AutoIncome が `src/content/blog/` に記事を、`public/_redirects` に `/go/コード` の転送設定を自動で書き出します。
Cloudflare Pages に置けば、無料で公開・自動更新できます。

## 最初の1回だけ
1. `python cli.py blog-init` を実行すると、このフォルダが `data/blog` にコピーされます
2. `src/site.config.mjs` のブログ名・XとnoteのURL、`astro.config.mjs` の `site` を自分のものに変更します
3. GitHub に新しいリポジトリを作り、`data/blog` を push します
4. Cloudflare の「Workers & Pages」→「Pages」→「Git に接続」で、そのリポジトリを選びます
   - ビルドコマンド：`npm run build`　出力先：`dist`
5. `.env` を `BLOG_GIT_PUSH=true`、`BLOG_BASE_URL=https://あなたのブログのURL` にします

以降は、管理画面でブログ記事を承認するたびに git push され、Cloudflare Pages が自動で公開します。

## 確認用
```bash
npm install
npm run dev     # http://localhost:4321
```

※ Amazonアソシエイトなどの規約で求められる「広告である旨の表示」は、プライバシーポリシーページと記事冒頭の【PR】表記で対応しています。参加するプログラムに合わせて文言を確認してください。
