"use strict";

const searchGoogle = require('../scrape/google').search;
const searchYahoo = require("../scrape/yahoo").search;
const searchBing = require("../scrape/bing.js").search;

/**
 * Searches each search enegine given some query
 * @param { String } query - The search query
 * @param { Function } callback - The standard Node callback
 */

searchGoogle('sunny places to visit', (err, result) => {
    if (err) {
        console.error(err);
    }
    console.log(result);
});

searchYahoo("puppies", (err, result) => {
    if (err) {
        console.error(err);
    }
    console.log(result);
});

searchBing("tigers", (err, result) => {
    if (err) {
        console.error(err);
    }
    console.log(result);
});
