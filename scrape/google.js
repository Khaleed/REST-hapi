"use strict";

let google = require("google");
google.resultsPerPage = 25;
let nextCounter = 0;

google('bengal tigers', (err, next, links) => {
    if (err) {
        console.error(err);
    } else {
        links.map(link => {
            console.log(link.title + ' - ' + link.link);
            console.log(link.description + "\n");
        });
        if (nextCounter < 4) {
            nextCounter += 1
            if (next) {
                next();
            }
        }
    }
});
