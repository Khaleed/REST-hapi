
"use strict";

let google = require('google')
let request = require('request');
let cheerio = require('cheerio');
let express = require('express');
let app = express();

app.get('/aggregate_search', (req, res) => {
    // 3 async requests

    var search_query = req.params.query;

    // flag => false
    var x = [false, false];

    search_google(search_query, (err, result)  => {
        x[0] = true;
        //do something with google response
        if (x.every(x => x == true)) {
            res.send()
        }
    });
    search_duck(search_query, (err, result) => {
        x[1] = true;
        //do something with duck duck go response
        if (x.every(x => x == true)) {
            res.send()
        }
    });

    //Promise.all

    //when can you res.send()?


    /*getResponse((err, result) => {
        if (err) {
            console.log(err);
            res.status(400).send('Something is broken');
        } else {
            res.end(JSON.stringify(result));
        }
    });*/
});

// get rank, title, url details for HN articles
let getResponse = callback => {
    var req_callback = function (error, response, html) {
        if (error) {
            console.log('error');
            callback(error);
        } else if (response.statusCode != 200) {
            console.log(response.statusCode);
            callback(new Error('error try again'));
        } else {
            let $ = cheerio.load(html);
            let newparsedresults = $('span.comhead').map(function (i, element) {
                let a = $(this).prev();
                let rank = a.parent().parent().text();
                let title = a.text();
                let url = a.attr('href');
                let subtext = a.parent().parent().next().children('.subtext').children();
                let credits = $('.subtext').eq(0).text();
                let metadata = {
                    rank: +rank,
                    title: title,
                    url: url,
                    credits: credits
                };
                callback(null, metadata);
            });
        }
    };
    var x = 0;
    request('https://news.ycombinator.com', callback);
    x += 1;
}

app.listen(3000, () => {
    console.log('Listen to port 3000');
});

// google

google.resultsPerPage = 25;
let nextCounter = 0;

google('node.js best practices', function (err, next, links) {
    if (err) console.error(err)

    for (var i = 0; i < links.length; ++i) {
        console.log(links[i].title + ' - ' + links[i].link) // link.href is an alias for link.link
        console.log(links[i].description + "\n")
    }

    if (nextCounter < 4) {
        nextCounter += 1
        if (next) next()
    }
})
