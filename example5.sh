#!/bin/sh

# in your code use require('filt') instead of require('.')

node -e 'require(".")(line => line.toUpperCase())'

