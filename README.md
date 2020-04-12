# Improving JS

This repo has been created to improve and practice my JavaScript skills.

## Examples

### Beacon API

Let's use the Beacon API to send a HTTP request to a server when the website is closed.

The server we are going to use is the same we have for other usecases. To run in, execute the following command:

```shell
npm run fetch:server
```

Then simply open the example named [beacon](beacon/beacon.html) and close the browser tab. When the page is closed, a HTTP Request (POST) will be received on the server.


### Fetch API

Simple example to make HTTP request using Fetch API from the browser.

First, start the HTTP server based on `http` module as below:

```shell
npm run fetch:server
```

Then open the [client](fetch/client.html) file to make HTTP requests using Fetch API


### WebSocket API

This is a simple WebSocket server based on Node.js in order to learn how the WebSocket API works.

Start the WebSocket server:

```shell
npm run websocket:server
```

On the client side you can either run the command below or open the [web example](websocket/web.html) file

```shell
npm run websocket:client
```
