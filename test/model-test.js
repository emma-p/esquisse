'use strict';
var assert = require('assert');
var model = require('../src/model');

describe('model', function () {

  describe('computeAST', function() {
    var result;
    beforeEach(function(){

      //add event listener
      model.ee.on("modelChange", function(res) {
        result = res;
      });
    });

    describe('the given text is parsable', function() {

      it('parses a text', function() {

        var expectedAST = [{"doctype":"desktop","title":"title"},"\n",[{"keyword":"button","attributes":[{"attr":"size","value":12}],"children":[]}]];
        model.computeAST("desktop title\n  button [size:12]");
        assert.deepEqual(model.getAST().description, expectedAST);
      });

      it('emits an event with a success notice', function() {

        model.computeAST("desktop title\n  button [size:12]");
        assert(result.isSuccessful);
        assert.equal(result.message, "Parsing successful");
      });
    });

    describe('the given text is not parsable', function() {

      it('emits an event with a failure notice', function() {

        model.computeAST("unparsable");
        assert(!result.isSuccessful);
        assert.equal(result.message, 'Expected "desktop" but "u" found.');
      });
    });
  });
});
