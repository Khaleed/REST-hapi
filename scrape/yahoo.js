"use strict";

let request = require("request");
let cheerio = require("cheerio");
let urls = [];
// send a request and query to yahoo

module.exports = {
    searchYahoo: function(searchQuery) {
        return request("https://yahoo.com/search?p=" + searchQuery, (error, response, html) => {
            if (error) {
                console.log(error);
            } else if (response.statusCode !== 200) {
                console.log(response.statusCode);
            } else {
                let $ = cheerio.load(html);
                console.log($);
                let $searchResults = $(".reg.searchCenterMiddle").find(".dd.algo");
                // return an array of search results
                return $searchResults.map((i, el) => {
                    return {
                        title: $(el).find(".title"),
                        link: $(el).find(".title .td-u").attr("href"),
                        description: $(el).find(".comText aAbs .p").text()
                    };
                });
            }
        });
    }
};
