import Parser from "rss-parser";
export async function load({url}){
    const rssLink = url.searchParams.get('url');
    const parser = new Parser();
    let feed = await parser.parseURL(rssLink);
    console.log(feed);
    return {...feed};
}
