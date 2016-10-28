"use strict";

const google = require('../scrape/google.js');
const yahoo = require('../scrape/yahoo.js');
const bing = require('../scrape/bing.js');
const express = require('express');
const async = require('async');
const app = express();

app.get('/aggregate_search', (req, res) => {
    const query = req.params.query;
    async.parallel([
        callback => google.search(query, callback),
        callback => yahoo.search(query, callback),
        callback => bing.search(query, callback)
    ], (err, results) => {
        res.end(JSON.stringify(results));
    });
});

app.listen(3000, () => {
    console.log("Listening on port 3000");
});
