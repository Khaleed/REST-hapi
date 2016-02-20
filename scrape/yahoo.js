"use strict";
// require modules
let request = require("request");
let cheerio = require("cheerio");

// send a request and query to yahoo
request("https://yahoo.com", (error, response, html) => {
    if (error) {
        console.log(error);
    } else if (response.statusCode !== 200) {
        console.log(response.statusCode);
    } else {
        // get HTML back and parse with Cheerio
        let $ = cheerio.load(html);
        console.log($);
    }
});




// add callback that return data if there is no error
