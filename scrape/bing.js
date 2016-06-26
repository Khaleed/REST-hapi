"use strict";

const request = require("request");
const cheerio = require("cheerio");

/**
 * Searches DuckDuckGo given some query
 * @param {String} query - search query
 */

module.exports = {
    searchBing: function (searchQuery) {
        return request("https://www.bing.com/search?q" + searchQuery, (error, response, html) => {
            if (error) {
                console.log(error);
            } else if (response.statusCode !== 200) {
                console.log(response.statusCode);
            } else {
                // load cheerio
                const $ = cheerio.load(html);
                const searchResults = $("#b_results");
                console.log(searchResults, searchResults.length);
            }
        });
    }
};