#!/bin/sh

# in your code use require('filt') instead of require('.')

echo "abc\nabc" | node -e 'require(".")(line => line.toUpperCase())'

