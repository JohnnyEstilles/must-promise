# must-promise
[![Build Status][travis-badge]][travis-url]

Promise-related assertions plugin for [Must.js](https://github.com/moll/js-must).

> <del>This is a work-in-progress proof of concept and not ready for production.</del>
### [Must.js][must-url] now has first class support for promises. As a result, work on this plug-in will be discontinued.

It currently uses a modified version of [Must.js][must-url] from [JonnyEstilles/js-must#feature/extensibility](https://github.com/JohnnyEstilles/js-must/tree/feature/extensibility), which exposes:

- `Must.prototype.insist()`
- `Must.prototype.chain()`
- `Must.prototype.isEnumerable()`

Hopefully these will eventually be permanently exposed in [Must.js](https://github.com/moll/js-must).

## Usage
```js
var must = require('must');
var mustPromise = require('must-promise');
mustPromise(must);
```

## Matchers
Sample matchers (just to test my proof of concept.)

### .promise()
```js
promise.must.be.a.promise();
```

### .fulfilled()
```js
Promise.resolve('OK').must.be.fulfilled();
```

### .fulfilledWith()
```js
Promise.resolve('OK').must.be.fulfilledWith('OK');
```

### .rejected()
```js
Promise.reject('reason').must.be.rejected();
```

### .rejectedWith()
```js
Promise.reject('reason').must.be.rejectedWith('reject');
```

## Tests
To run unit tests simply:

```
git clone https://github.com/JohnnyEstilles/must-promise.git
cd must-promise
npm install
npm test
```


[travis-badge]: https://travis-ci.org/JohnnyEstilles/must-promise.svg?branch=master
[travis-url]: https://travis-ci.org/JohnnyEstilles/must-promise

[must-url]: https://github.com/moll/js-must
