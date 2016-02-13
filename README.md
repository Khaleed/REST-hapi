##Why?

This is an experiment to create a RESTful API that can get accumulative data from
Google, Bing, and DuckDuckGo. It should enable users to search for anything in the three search engines and return results to user.

## What is RESTful?
RESTful API pretty much works like a normal website. You have a client that makes HTTP request and a server that returns some data. REST is not specific to the web, it is just design principles.

An application can be considered to be RESTful in general if there is one-to-one communication between a client and server, the client and server do not track each other's state, and there is a common language between the server and client to enable each part to be modified without breaking the system.

## Methodology

This project primarily aims to use Node, Express, and Cheerio.

The initial approach is to find an API or npm module that we can interface with to get data from a search engine. If this is not possible, data will be parsed using Cheerio. What this means is that we scrape a website's page and parse the returned body of the HTML with Cheerio.

Hammock Driven Development approach is applied during the entire process of this project. For more information, please refer to Rich Hickey's talk (https://www.youtube.com/watch?v=f84n5oFoZBc).
