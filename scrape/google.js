"use strict"

let google = require('google');
let Immutable = require('immutable');

google.resultsPerPage = 25;
let nextCounter = 0;
let parsedResults = [];
google('best places to eat in london', function (err, next, links) {
    if (err) {
        console.log('error, try again');
    }
    links.map(link => {
        console.log(link.title + ;
        console.log(link.description + '\n');
    });

});
