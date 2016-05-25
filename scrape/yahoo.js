"use strict";

let request = require("request");
let cheerio = require("cheerio");
let urls = [];
// send a request and query to yahoo
request("https://yahoo.com", (error, response, html) => {
    if (error) {
        console.log(error);
    } else if (response.statusCode !== 200) {
        console.log(response.statusCode);
    } else {
        let $ = cheerio.load(html);
        let $searchResults = $(".reg .searchCenterMiddle");
        console.log($searchResults.text());
        let $links = $searchResults.children(".td-u");
        //console.log($links);
        let $link = $links.map((i, e) => {
            console.log(e.href);c
        });
        let $title = $links.map((i, e) => {
            console.log(e.text().replace(/\s+/g, " "));
        });
        let metadata = {
            link: $link,
            title : $title
        };
    }
});


