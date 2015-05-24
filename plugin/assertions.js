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

exports.fulfilledWith = function(expected) {
  var self = this;
  return this.actual.then(function(value) {
    var must = new self.constructor(value);
    must.negative = self.negative;
    must.eql(expected);
    return value;
  }, function() {
    if (!self.negative) {
      self.insist(false, 'be fulfilled with');
    }
  });
};

exports.rejected = function() {
  var self = this;
  return this.actual.then(function() {
    if (!self.negative) {
      self.insist(false, 'be rejected');
    }
  }, function() {
    if (self.negative) {
      self.insist(true, 'be rejected');
    }
  });
};
