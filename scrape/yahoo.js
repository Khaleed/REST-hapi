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
//        console.log($links);
        let $link = $links.map((i, e) => {
            console.log(e.href);c
        });
        let $title = $links.map((i, e) => {
            console.log(e.text().replace(/\s+/g, " "));
        });
        let metadata = {
            link: $link,
            titlte : $title
        }
    }
});


// add callback that return data if there is no error

// let Nightmare = require("nightmare");
// let nightmare = Nightmare({ show: true });
// let parsedResults = [];
// nightmare
//     .goto("https://yahoo.com")
//     .type("input[title='Search']", 'cats') // mimics a user typing in a text box
//     .click("#UHSearchWeb")
//     .wait("#main")
//     .evaluate(function () {
//         return document.querySelector('#main .searchCenterMiddle li a').href;
//     })
//     .then(function (result) {
//         console.log(result);
//     });
