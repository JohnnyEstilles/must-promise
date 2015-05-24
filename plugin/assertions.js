'use strict';

var kindof = require('kindof');

exports.promise = function() {
  var isAnObject = kindof(this.actual) === 'object';
  var isThenable = this.isEnumerable(this.actual, 'then') && kindof(this.actual.then) === 'function';
  this.insist(isAnObject && isThenable, 'be a promise');
};

exports.fulfilled = function() {
  var self = this;
  return this.actual.then(function() {
    if (self.negative) {
      self.insist(true, 'be fulfilled');
    }
  }, function() {
    if (!self.negative) {
      self.insist(false, 'be fulfilled');
    }
  });
};
