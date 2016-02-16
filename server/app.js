"use strict";

let request = require('request');
let cheerio = require('cheerio');
let immutable = require('immutable');
// get rank, title, url details for HN articles
request('https://news.ycombinator.com', function (error, response, html) {
    if (!error && response.statuscode == 200) {
        let $ = cheerio.load(html);
        let parsedresults = immutable.list([]);
        let newparsedresults;
        $('span.comhead').each(function(i, element) {
            let a = $(this).prev();
            let rank = a.parent().parent().text();
            let title = a.text();
            let url = a.attr('href');
            let subtext = a.parent().parent().next().children('.subtext').children();
            let credits = $('.subtext').eq(0).text();
            let metadata = {
                rank: parseint(rank),
                title: title,
                url: url,
                credits: credits
            };
            newparsedresults = parsedresults.push(metadata);
        });
        return newparsedresults;
    }
});
