"use strict";

const google = require('../scrape/google.js');
const yahoo = require('../scrape/yahoo.js');
const bing = require('../scrape/bing.js');
const express = require('express');
const async = require('async');
const app = express();

/**
 * API that serves up aggregated first page results of google, yahoo, and bing
 * @param { String } aggregate_search - The end point or path of the server
 * @param { Function } hanlder - The handler for HTTP get request
 */
app.get('/aggregate_search', (req, res) => {
    console.log(req);
    const query = req.query.q;
    async.parallel([
        callback => google.search(query, callback),
        callback => yahoo.search(query, callback),
        callback => bing.search(query, callback)
    ], (err, results) => {
        if (err) {
            console.error(err);
        }
        res.end(JSON.stringify(results));
    });
});

app.listen(3000, () => {
    console.log("Listening on port 3000");
});
