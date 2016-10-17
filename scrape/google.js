"use strict";

let google = require('google');
let Lists = require('./lists');
google.resultsPerPage = 25;

/**
 * Searches google given some query
 * @param { String } query - The search query
 * @param { Function } callback - The standard node callback
 */
module.exports = {
    searchGoogle: function (query, callback) {
        let nextCounter = 0;
        google(query, (err, next, links) => {
            if (err) {
                callback(err);
            } else {
                let newLinks = links.map(link => {
                    return {
                        title: link.title,
                        link: link.link,
                        description: link.description
                    };
                });
                Lists.appendAll(results, newLinks);
                if (nextCounter < 4) {
                    nextCounter += 1;
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
};
