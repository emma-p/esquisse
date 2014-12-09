'use strict';
var parserGenerator = require('./parser-generator');
var eventMonitor = require('./event-monitor');

var EventEmitter = require('events').EventEmitter;
var ee = new EventEmitter();

var _parser = parserGenerator.init();
var _ast = {};

function ChangeNotice(isSuccessful, message) {
  this.isSuccessful = isSuccessful;
  this.message = message;
}

function computeAST(text) {
  try {
    _ast.description = _parser.parse(text);
    ee.emit("modelChange", new ChangeNotice(true, 'Parsing successful'));
  }
  catch(exception) {
    ee.emit("modelChange", new ChangeNotice(false, exception.message));
  }
}

function getAST() {
  return _ast;
}

eventMonitor.registerCallback('computeAST', computeAST);

module.exports = {
  computeAST: computeAST,
  getAST: getAST, //accessor for the views
  ee: ee
};
