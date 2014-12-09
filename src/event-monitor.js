'use strict';
var evHandler = require('./ev-handler');

var _registeredCallbacks = {};

function registerCallback(name, fn) {
  _registeredCallbacks[name] = fn;
}

function executeCallbacks(ev) {
  _registeredCallbacks['computeAST'].call(null, ev.target.value);
}

evHandler.ee.on("newInteraction", function(ev) {
  executeCallbacks(ev);
});

module.exports = {
  registerCallback: registerCallback
};
