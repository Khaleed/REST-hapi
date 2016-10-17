"use strict";

const request = require("request");
const cheerio = require("cheerio");

/**
 * Searches Yahoo given some query
 * @param { String } query - The search query
 */

module.exports = {
    searchYahoo: function(searchQuery) {
        return request("https://search.yahoo.com/search?p=" + searchQuery, (error, response, html) => {
            if (error) {
                console.log(error);
            } else if (response.statusCode !== 200) {
                console.log(response.statusCode);
            } else {
                const $ = cheerio.load(html);
                const $searchResults = $(".reg.searchCenterMiddle").find(".algo");
                // an array of search results
                const result = $searchResults.map((i, el) => {
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
