import superagent from 'superagent';
import cheerio from 'cheerio';

export default async function Crawling () {
    const url  = "https://qiita.com/otchy/items/244c19c561ecb7211fa5";
    // リクエスト飛ばす
    const result = await superagent.get(url);
    const html = result.text;
    // cheerioを利用してhtmlパース
    const $ = cheerio.load(html);
    // cssセレクタ指定で要素を抽出→テキストだけ残す
    const pageTitle = $("head > title").text();
    console.log(pageTitle);
}

const crawling = Crawling();