"use strict";

var split = require('split');

function filt(fn) {
    process.stdin.pipe(split()).on('data', function (line) {
        var r = fn(line);
        if (r != undefined) console.log(r);
    });
}

module.exports = filt;

