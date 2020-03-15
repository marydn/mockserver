## Mockserver

This will start a server to answer mocked REST petitions.

## Environment setup

1. [Install npm](https://www.npmjs.com/get-npm)
2. Clone this project: `git clone https://github.com/marydn/mockserver.git`
3. Move to the project folder: `cd mockserver`
4. Install npm dependencies: `npm install`
5. Init the server: `npm start`
6. Go to [`http:://localhost:1080`](http:://localhost:1080) in your browser.

## Endpoints

By default, there are some endpoints implemented:

* [`http:://localhost:1080`](http:://localhost:1080)
* [`http:://localhost:1080/foo`](http:://localhost:1080/foo)
* [`http:://localhost:1080/bar`](http:://localhost:1080/bar)
* [`http:://localhost:1080/foo-bar`](http:://localhost:1080/foo-bar)

You can modify [server.js](./server.js) and add new endpoints or modify the existent ones.

You can also modify the default port in [server.js](./server.js):

```javascript
const port   = 1080;
```