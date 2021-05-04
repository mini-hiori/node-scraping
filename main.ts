import superagent from 'superagent'

export default async function Crawling () {
    const url: string = "https://qiita.com/harashoo/items/912083bc9c38ce15bb1c";
    const result = await superagent.get(url);
    console.log(result.text)
}

const crawling = Crawling();