'use strict';

var EventEmitter = require('events').EventEmitter;
var ee = new EventEmitter();
var _evs = {};

function addEv(name, ev) {
  _evs[name] = ev;
  ee.emit("newInteraction", ev);
}

module.exports = {
  addEv: addEv,
  ee: ee
};
