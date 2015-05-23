'use strict';

var must = require('must');
var Bluebird = require('bluebird');

var mustPromise = require('../');
mustPromise(must);

describe('must-promise', function() {

  it('must detect Bluebird promises', function() {
    var promise = new Bluebird(function() {});
    promise.must.be.a.promise();
  });

  it('must detect non-promises', function() {
    ({}).must.not.be.a.promise();
    ([]).must.not.be.a.promise();
    (true).must.not.be.a.promise();
    (69).must.not.be.a.promise();
    ('not a promise').must.not.be.a.promise();
  });

});
