"use strict";

let request = require('request');
let cheerio = require('cheerio');
let Immutable = require('immutable');

request('https://news.ycombinator.com', function (error, response, html) {
    if (!error && response.statusCode == 200) {
        let $ = cheerio.load(html);
        let parsedResults = Immutable.List([]);
        let newParsedResults;
        $('span.comhead').each(function(i, element) {
            let a = $(this).prev();
            let rank = a.parent().parent().text();
            let title = a.text();
            let url = a.attr('href');
            let subtext = a.parent().parent().next().children('.subtext').children();
            let credits = $('.subtext').eq(0).text();
            let metadata = {
                rank: parseInt(rank),
                title: title,
                url: url,
                credits: credits
            };
            newParsedResults = parsedResults.push(metadata);
        });
        console.log(newParsedResults);
    }
});
