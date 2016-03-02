"use strict";

var split = require('split');

function filt(fn) {
    process.stdin.pipe(split()).on('data', fn);
}

module.exports = filt;

