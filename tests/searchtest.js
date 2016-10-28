"use strict";

const searchGoogle = require('../scrape/google').searchGoogle;
const searchYahoo = require("../scrape/yahoo").searchYahoo;
const searchBing = require("../scrape/bing.js").searchBing;

searchGoogle('sunny places to visit', (err, result) => {
    if (err) {
        console.log("error");
    }
    console.log(result);
});

searchYahoo("puppies", (err, result) => {
    if (err) {
        console.error("error");
    }
    console.log(result);
});

searchBing("tigers", (err, result) => {
    if(err) {
        console.error("error");
    }
    console.log(result);
});
