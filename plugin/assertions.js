'use strict';

var kindof = require('kindof');

exports.promise = function() {
  var isAnObject = kindof(this.actual) === 'object';
  var isThenable = this.isEnumerable(this.actual, 'then') && kindof(this.actual.then) === 'function';
  this.insist(isAnObject && isThenable, 'be a promise');
};
