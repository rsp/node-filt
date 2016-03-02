#!/usr/bin/env node

var filt = require('.');

filt(function (line) {
    console.log(line.toUpperCase());
});

