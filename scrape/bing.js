"use strict";

const request = require("request");
const cheerio = require("cheerio");

/**
 * Searches Bing given some query
 * @param { String } query - The search query
 * @param { Function } callback - The standard Node callback
 */

module.exports = {
    search: function (query, callback) {
        return request("https://www.bing.com/search?q=" + query, (error, response, html) => {
            if (error) {
                console.error(error);
            } else if (response.statusCode !== 200) {
                console.log(response.statusCode);
            } else {
                const $ = cheerio.load(html);
                const $searchResults = $("#b_results").find(".b_algo");
                const $result = [];
                $searchResults.each((i, el) => {
                    $result.push({
                        title: $(el).find("a").text(),
                        link: $(el).find("a").attr("href"),
                        description: $(el).find(".b_caption p").text()
                    }); 
                });
                callback(null, $result);
            }
        });
    }
};
