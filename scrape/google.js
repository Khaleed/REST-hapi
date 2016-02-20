"use strict";

let google = require('google');
google.resultsPerPage = 25;

export function searchGoogle (query, callback) {
    let nextCounter = 0;
    let results = [];
    google(query, (err, next, links) => {
        if (err) {
            callback(err);
        } else {
            // user wants this
            Array.prototype.push.apply(
                results,
                links.map(link =>
                          {
                              title: link.title,
                              link: link.link,
                              description: link.description
                          };
                         );
            );
            if (nextCounter < 4) {
                nextCounter += 1
                if (next) {
                    next();
                } else {
                    callback(null, results);
                }
            } else {
                callback(null, results);
            }
        }
    });
}
