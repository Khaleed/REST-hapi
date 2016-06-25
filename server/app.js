"use strict";

let cheerio = require('cheerio');
let express = require('express');
let app = express();

// RESTful API that gets aggregated results
app.get('/aggregate_search', (req, res) => {
    // 3 async requests

    var search_query = req.params.query;

    // flag => false
    var x = [false, false];

    search_google(search_query, (err, result)  => {
        x[0] = true;
        //do something with google response
        if (x.every(x => x == true)) {
            res.send();
        }
    });
    search_duck(search_query, (err, result) => {
        x[1] = true;
        //do something with duck duck go response
        if (x.every(x => x == true)) {
            res.send()
        }
    });

    //Promise.all

    //when can you res.send()?

    /*getResponse((err, result) => {
      if (err) {
      console.log(err);
      res.status(400).send('Something is broken');
      } else {
      res.end(JSON.stringify(result));
      }
      });*/
});

let getResponse = callback => {
    var req_callback = function (error, response, html) {
        if (error) {
            console.log('error');
            callback(error);
        } else if (response.statusCode != 200) {
            console.log(response.statusCode);
            callback(new Error('error try again'));
        } else {
            // parse data
        };
        callback(null, metadata);
    };
};
