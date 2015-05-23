'use strict';

var kindof = require('kindof');

/**
 * Assert that an object is a promise.
 *
 * @example
 * (new Promise(function() {})).must.have.length(18)
 *
 * @method promise
 */
exports.promise = function() {
  var isAnObject = kindof(this.actual) === 'object';
  var isThenable = this.isEnumerable(this.actual, 'then') && kindof(this.actual.then) === 'function';
  this.insist(isAnObject && isThenable, 'be a promise');
};
