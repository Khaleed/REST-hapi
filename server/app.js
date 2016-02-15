"use strict";

let request = require("request");
let cheerio = require("cheerio");

request('https://news.ycombinator.com', function (error, response, html) {
    if (!error && response.statusCode == 200) {
        let $ = cheerio.load(html);
        $('span.comhead').each(function(i, element){
            let a = $(this).prev();
            console.log(a.text());
        });
    }
});
