"use strict";

let request = require("request");
let cheerio = require("cheerio");

request('https://news.ycombinator.com/', (error, response, html) => {
    if (!error && response.statusCode === 200) {
        // parse returned HTML
        let $ = cheerio('html');
        console.log($);
        // go to each span with class sitebit and grab element above it
        $('span.sitebit').each(function(i, element) {
            let a = $(this).prev();
            console.log(a.text());
        });
    }
});
