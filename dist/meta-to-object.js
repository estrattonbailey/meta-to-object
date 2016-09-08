(function(f){if(typeof exports==="object"&&typeof module!=="undefined"){module.exports=f()}else if(typeof define==="function"&&define.amd){define([],f)}else{var g;if(typeof window!=="undefined"){g=window}else if(typeof global!=="undefined"){g=global}else if(typeof self!=="undefined"){g=self}else{g=this}g.metaToObject = f()}})(function(){var define,module,exports;return (function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
var matches = function matches(val) {
  return val instanceof RegExp ? function (v) {
    return v.match(val) ? true : false;
  } : function (v) {
    return val === v;
  };
};

exports.default = function () {
  var options = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];

  var meta = {};
  var metaTags = [].slice.call(document.head.getElementsByTagName('meta'));

  var matchName = matches(options.name || /./);
  var matchValue = matches(options.value || /./);

  metaTags.forEach(function (tag) {
    var attrs = [].slice.call(tag.attributes).filter(function (a) {
      return a.nodeName !== 'content';
    });

    attrs.forEach(function (attr) {
      var val = tag.getAttribute('content') || false;

      if (val && matchName(attr.nodeName) && matchValue(attr.value)) {
        meta[attr.value] = val;
      }
    });
  });

  return meta;
};

},{}]},{},[1])(1)
});