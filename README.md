##Why?

This is an experiment to create a RESTful API that can get accumulative data from
Google, Yahoo, and DuckDuckGo. It should enable users to search for anything in the three search engines and return total results to user.

## What is RESTful?

RESTful API pretty much works like a normal website. You have a client that makes HTTP requests and a server that returns some data. REST is not specific to the web, it is just design principles.

An application can be considered to be RESTful in general if there is one-to-one communication between a client and server, the client and server do not track each other's state, and there is a common language between the server and client to enable each part to be modified without breaking the system.

## Methodology

This project primarily uses Node/Express. The initial approach is to find an API or npm module that we can interface with to get data from a search engine. If this is not possible, data will be parsed using Cheerio. What this means is that we scrape a website's page and parse the returned body of the HTML with Cheerio.

Looking at past solutions to this sort of problem, there are some npm packages that help with the scraping of web pages. The results that we get from scraping or parsing data ffrom web pages with Cheerio is not going to be the same as the results shown on the original website. We must therefore re-structure and drill down relevant data to give meaningful results to the user. We will use the Request module to send requests to websites. DuckDuckGo has a very cool API where you could easily query using node-ddg module. For Google, we use node-google module which itself uses Cheerio. For Yahoo, we will scrape it and parse the HTML data using Cheerio ourselves.

Hammock Driven Development approach is applied during the entire process of this project. For more information, please refer to Rich Hickey's talk (https://www.youtube.com/watch?v=f84n5oFoZBc).
