'use strict';

var mixin = require('merge-descriptors');
var assertions = require('./plugin/assertions');

function plugin(must) {
  mixin(must.prototype, assertions);
}

exports = module.exports = plugin;
