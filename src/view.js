'use strict';
var model = require('./model');
var evHandler = require('./ev-handler');

var h = require('virtual-dom/h');
var diff = require('virtual-dom/diff');
var patch = require('virtual-dom/patch');
var createElement = require('virtual-dom/create-element');
var DOMDelegator = require('dom-delegator');

var _vtree;
var _node;

function renderVTree(res) {
  return h('div', [
    h('textarea', { 'ev-input': function (ev) { evHandler.addEv("newInteraction", ev); } }),
    h('span', res)
  ]);
}

function init() {
  var delegator = new DOMDelegator();
  var container = window.document.querySelector('.js-container');
  _vtree = renderVTree("Nothing parsed yet");
  _node = createElement(_vtree);
  container.appendChild(_node);
}

model.ee.on("modelChange", function(res) {
  var newtree;
  if (res === 'Parsing successful') {
    newtree = renderVTree(res);
  } else {
    newtree = renderVTree(res.message);
  }
  var patches = diff(_vtree, newtree);
  _node = patch(_node, patches);
  _vtree = newtree;
});

module.exports = {
  renderVTree: renderVTree,
  init: init
};
