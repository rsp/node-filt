#!/usr/bin/env node

// in your code use require('filt') instead of require('.')

var filt = require('.');

filt(function (line) {
    return line.toUpperCase();
});

