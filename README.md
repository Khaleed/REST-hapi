## Why?

This is an experiment to create a RESTful API that can get accumulative data from
Google, Yahoo, and DuckDuckGo. It should enable users to search for anything in the search engines and get back the top 25 results.

## What is a RESTful API?

A RESTful API pretty much works like a normal website. You have a client that makes HTTP requests and a server that returns some data. REST is not specific to the web, it is just design principles that are followed.

In summary, an pplication can be considered to be RESTful if there is one-to-one communication between a client and server, the client and server do not track each other's state, and there is a common language between the server and client to enable any part of any program to be modificed without breaking the system.

## Methodology

This project uses Node/Express. The initial approach is to find an API or npm module that can get data from a search engine. If this is not possible, we will scrape a search engine's page and parse the returned HTML body with Cheerio. We will use the request client module to send requests to search engines.

Looking at past solutions to this sort of problem, I found npm packages that help with the scraping of web pages. The results that we get from scraping or parsing data from web pages with Cheerio is not in the same format as the results shown on the original page. We must therefore re-structure and drill down relevant data to give meaningful results to the user.

A server-side API that exposes an endpoint and provides a service to users that want to get aggregated results of Google, Yahoo, and DuckDuckGo.

Hammock Driven Development approach is applied during the entire process of this project. For more information, please refer to Rich Hickey's talk (https://www.youtube.com/watch?v=f84n5oFoZBc).

<a href='http://www.recurse.com' title='Made with love at the Recurse Center'><img src='https://cloud.githubusercontent.com/assets/2883345/11322975/9e575dce-910b-11e5-9f47-1fb1b530a4bd.png' height='75px'/></a>
