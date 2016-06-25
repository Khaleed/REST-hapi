"use strict";

let request = require("request");
let cheerio = require("cheerio");

/**
 * Searches google given some query
 * @param {String} query - search query
 */

module.exports = {
    searchYahoo: function(searchQuery) {
        return request("https://search.yahoo.com/search?p=" + searchQuery, (error, response, html) => {
            if (error) {
                console.log(error);
            } else if (response.statusCode !== 200) {
                console.log(response.statusCode);
            } else {
                let $ = cheerio.load(html);
                let $searchResults = $(".reg.searchCenterMiddle").find(".algo");
                // console.log($searchResults, $searchResults.length);
                // return an array of search results
                let result = $searchResults.map((i, el) => {
                    console.log('am I mapping anything?');
                    return {
                        title: $(el).find(".title").text(),
                        link: $(el).find(".title .ac-algo").attr("href"),
                        description: $(el).find(".compText.aAbs p").text()
                    };
                });

                console.log(result);
            }
        });
    }
};
