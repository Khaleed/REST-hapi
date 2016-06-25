"use strict";

// let searchGoogle = require('./scrape/google').searchGoogle;
// searchGoogle('sunny places to visit', function(err, result) {
//     if (err) {
//         console.log("error");
//     } else {
//         console.log(result);
//     }
// });

let searchYahoo = require('../scrape/yahoo').searchYahoo;
searchYahoo('puppies');
