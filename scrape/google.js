"use strict";

const google = require('google');
const Lists = require('./lists');
google.resultsPerPage = 25;

/**
 * Searches google given some query
 * @param { String } query - The search query
 * @param { Function } callback - The standard node callback
 */
module.exports = {
    search: function (query, callback) {
        let nextCounter = 0;
        const results = [];
        google(query, (err, next, links) => {
            if (err) {
                callback(err);
            } else {
                const newLinks = links.map(link => {
                    return {
                        title: link.title,
                        link: link.link,
                        description: link.description
                    };
                });
                results = Lists.appendAll(results, newLinks);
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
