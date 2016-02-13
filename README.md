##Why?

This is an experiment to create a RESTful API that can get accumulative data from
Google, Bing, and DuckDuckGo. It should enable users to search for anything in the threesearch engines and we should be able to return results to user.

## What is RESTful?
RESTful API pretty much works like a normal website. You have a client that makes HTTP reqest and a server that returns some data. REST is not specific to the web, it is just design principles.

An application can be considered to be RESTful in general if there is one-to-one communication between a client and server, the client and server do not track each other's state, there is a common language between the server and client to enable each part to be modified without breaking the system.

## Methodology

This project aims to use Node, Express, Cheerio, and various npm modules to create a RESTful API.

The initial approach is to find an API or npm module that we can interface with to get data. If this is not possible, data will be parsed using Cheerio.

Hammock Driven Development approach is applied during the entire process of this project. For more information, please refer to Rich Hickey's talk (https://www.youtube.com/watch?v=f84n5oFoZBc).
