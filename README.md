# must-promise
[![Build Status][travis-badge]][travis-url]

Promise-related assertions plugin for `Must.js`

> This is a work-in-progress proof of concept and not ready for production.

It currently uses a modified version of `Must.js` from  [JonnyEstilles/js-must#feature/extensibility](https://github.com/JohnnyEstilles/js-must/tree/feature/extensibility), which exposes:

- `Must.prototype.insist()`
- `Must.prototype.chain()`
- `Must.prototype.isEnumerable()`

Hopefully these will eventually be permanently exposed in `Must.js`.

## Usage
```js
var must = require('must');
var mustPromise = require('must-promise');
mustPromise(must);
```

## Assertions
Sample assertion (just to test my proof of concept.)

### .promise()
```js
promise.must.be.a.promise();
```

## Tests
To run unit tests simply:

```
npm install
npm test
```


[travis-badge]: https://travis-ci.org/JohnnyEstilles/must-promise.svg#master
[travis-url]: https://travis-ci.org/JohnnyEstilles/must-promise
