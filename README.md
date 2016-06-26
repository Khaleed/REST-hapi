## Why?

This is an experiment to create a RESTful API that can get accumulative search results from Google, Yahoo, and Bing. It should enable users to search for anything in the search engines and get back the top page 1 results.

## What is a RESTful API?

A RESTful API pretty much works like a normal website. You have a client that makes HTTP requests and a server that returns some data. REST is not specific to the web, it is just design principles that are followed in architecture.

In summary, an application can be considered to be RESTful if there is one-to-one communication between a client and server, the client and server do not track each other's state and there is uniform interface - a common language between the server and client to enable any part of any program to be modificed without breaking the system.

## Methodology

This project uses Node/Express. The initial approach is to find an API or npm module that can get data from a search engine. If this is not possible, a search engine's page will be scraped and the returned HTML body parsed with Cheerio.The Request HTTP client is used to send requests to search engines.

Looking at past solutions to this sort of problem, I found npm packages that help with the scraping of web pages. The results from scraping or parsing data from web pages with Cheerio will not be in the same format as the results shown on the original page. The relevant data will be re-structured to give meaningful results to the user.

Finally, a server-side API is created that exposes an endpoint and provides a service to users that want to get aggregated results of Google, Yahoo, and Bing.

Hammock Driven Development approach is applied throughout the entire process. For more information, please refer to Rich Hickey's talk (https://www.youtube.com/watch?v=f84n5oFoZBc).

<a href='http://www.recurse.com' title='Made with love at the Recurse Center'><img src='https://cloud.githubusercontent.com/assets/2883345/11322975/9e575dce-910b-11e5-9f47-1fb1b530a4bd.png' height='75px'/></a>
