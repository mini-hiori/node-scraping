# ts-scraping
Node.js×TypeScriptでスクレイピングする

## つかいかた
- 以下でとりあえず動く
```
docker build -t ts-scraping .
docker run -it ts-scraping
```

## 中身の説明
- [superagent](https://www.npmjs.com/package/superagent)でhttpリクエストを送る
- [cheerio](https://github.com/cheeriojs/cheerio)でhtmlパースをする

## TODO
- URLリストを外部ファイルに置いておくと中身全部読み取ってくれるみたいな感じにすると良さそう
    - TSでファイル読み込みとかやったことないのでその練習としても良い