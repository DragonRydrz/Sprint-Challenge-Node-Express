# Review Questions

## What is Node.js?

Node.js is an what enables the use of JavaScript outside of a browser

## What is Express?

Express is a framework that assists in the creation of backend creation and API calls via JavaScript.

## Mention two parts of Express that you learned about this week.

Express makes creating backend software incredibly easy. It allows access to a request object and a response object which lets us accecpt a request from a client,
and to send a response back to said client.

## What is Middleware?

Middleware is exactly what it sounds like. It it fucntions/frameworks that are more commonly run between receiving a request and sending a response, although
it can also be something that is run after the response is sent.

## What is a Resource?

It is something that we can supply to the client via a HTTP request

## What can the API return to help clients know if a request was successful?

Various status codes.
200-299 Successfull
300-399 Redirections
400-499 User errors
500-599 Server Errors

## How can we partition our application into sub-applications?

Express Routers

## What is CORS and why do we need it?

Cross-Origin Recourse Sharing. It allows outside sources to request information from our server.
