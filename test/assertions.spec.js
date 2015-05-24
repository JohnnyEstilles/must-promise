'use strict';

var must = require('must');

var mustPromise = require('../');
mustPromise(must);

var libraries = [
  {
    name: 'Bluebird',
    setup: function() {
      var Promise = require('bluebird');

      this.promised = function promised(value) {
        return Promise.resolve(value);
      };

      this.failed = function failed(reason) {
        return Promise.reject(reason);
      };
    }
  },
  {
    name: 'RSVP',
    setup: function() {
      var rsvp = require('rsvp');

      this.promised = function promised(value) {
        return new rsvp.Promise(function(resolve) {
          resolve(value);
        });
      };

      this.failed = function failed(reason) {
        return new rsvp.Promise(function(resolve, reject) {
          reject(reason);
        });
      };
    }
  },
  {
    name: 'Q',
    setup: function() {
      var Q = require('q');
      this.promised = function promised(value) {
        var deferred = Q.defer();
        deferred.resolve(value);
        return deferred.promise;
      };

      this.failed = function failed(reason) {
        var deferred = Q.defer();
        deferred.reject(reason);
        return deferred.promise;
      };
    }
  }
];

describe('must-promise', function() {

  libraries.forEach(function(library) {

    describe('checking compatibility with ' + library.name, function() {

      before(library.setup);

      it('must detect when target is a promise', function() {
        this.promised('anything').must.be.a.promise();
      });

      it('must detect when target is not a promise', function() {
        ({}).must.not.be.a.promise();
        ([]).must.not.be.a.promise();
        (true).must.not.be.a.promise();
        (69).must.not.be.a.promise();
        ('not a promise').must.not.be.a.promise();
      });

      it('must detect when promise is fulfilled', function() {
        return this.promised().must.be.fulfilled();
      });

      it('must detect when promise is not fulfulled', function() {
        return this.failed().must.not.be.fulfilled();
      });

      it('must detect when promise is rejected', function() {
        return this.failed().must.be.rejected();
      });

      it('must detect when promise is not rejected', function() {
        return this.promised().must.not.be.rejected();
      });

      it('must detect when promise is fulfilled with a specific value', function() {
        return this.promised('OK').must.be.fulfilledWith('OK');
      });

      it('must detect when promise is not fulfilled with a specific value', function() {
        return this.promised('OK').must.not.be.fulfilledWith('NOT OKAY');
      });

      it('must detect when promise is rejected with a specific reason', function() {
        return this.failed('reason').must.be.rejectedWith('reason');
      });

      it('must detect when promise is not rejected with a specific reason', function() {
        return this.failed('reason').must.not.be.rejectedWith('OK');
      });

    });

  });

});
