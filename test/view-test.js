'use strict';
var assert = require('assert');
var view = require('../src/view');

describe('view', function () {
  describe('renderVTree', function() {
    it('returns a virtual tree with a given result', function() {
      assert.equal(view.renderVTree("Parsing successful").tagName, 'div');
    });
  });
});
