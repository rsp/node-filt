#!/usr/bin/env node

var filt = require('.');

filt(function (line) {
    return line.toUpperCase();
});

