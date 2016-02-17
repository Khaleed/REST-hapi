"use strict";

let request = require('request');
let cheerio = require('cheerio');
let express = require('express');

//some kind of express setup

var app = null;

app.get('/scrape_hn', function (req, resp) {
    makeResponse(function (err, result) {
        if (err) {
            resp.sendFail(err);
        } else {
            resp.send(JSON.stringify(result));
        }

    });
 });

function makeResponse (callback) {
    // get rank, title, url details for HN articles
    request('https://news.ycombinator.com', function (error, response, html) {
        if (error) {
            callback(error, null);
        } else if (response.statuscode !== 200) {
            callback('not ok');
        } else {
            let $ = cheerio.load(html);
            let newparsedresults = $('span.comhead').map(function(i, element) {
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
                callback(null, metadata);
            });
        }
    });
}
