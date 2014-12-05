'use strict';

var PEG = require("pegjs");
var fs = require("fs");
var path = require("path");

var grammarPath = path.join(__dirname, "grammar.pegjs");
var grammar = fs.readFileSync(grammarPath, { encoding: 'utf8' });

function init() {
  return PEG.buildParser(grammar);
}

exports.init = init;
