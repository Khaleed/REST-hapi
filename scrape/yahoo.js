"use strict";

const request = require("request");
const cheerio = require("cheerio");

/**
 * Searches Yahoo given some query
 * @param { String } query - The search query
 * @param { Function } callback - The standard Node callback
 */

module.exports = {
    search: function(query, callback) {
        return request("https://search.yahoo.com/search?p=" + query, (error, response, html) => {
            if (error) {
                console.error(error);
            } else if (response.statusCode !== 200) {
                console.log(response.statusCode);
            } else {
                const $ = cheerio.load(html);
                const $searchResults = $(".reg.searchCenterMiddle").find(".algo");
                const $results = [];
                $searchResults.each((i, el) => {
                    $results.push({
                        title: $(el).find(".title").text(),
                        link: $(el).find(".title .ac-algo").attr("href"),
                        description: $(el).find(".compText.aAbs p").text()
                    });
                });
                callback(null, $results);
            }
        });
    }
};
