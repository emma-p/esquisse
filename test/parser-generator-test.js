'use strict';
var assert = require('assert');
var parserGenerator = require('../src/parser-generator');

describe('parserGenerator', function () {
  describe('init', function() {
    it('initialises a new parser with the default grammar', function() {
      assert(parserGenerator.init().hasOwnProperty('parse'));
    });
  });
});
