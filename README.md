node filt
=========
filt is for simple filters:

`node -e 'require("filt")(line => line.toUpperCase())'`

This module allows you to quickly write command-line filters -
programs that read standard input line by line and print something
on standard output.

Known problems
--------------
It prints an extra newline at the end - the split module used internally
is apparently with an extra empty line at the end when there is none
- I need to fix it.

Installation
------------
Install to use in your project, updating the dependencies in package.json:
```sh
npm install filt --save
```
It currently has one dependency: split
...

Usage
-----
Require the module:
```js
var filt = require('filt');
```

Now `filt` is a function that gets a function that is called for each line of stdin.

Most basic usage:

```
filt(function (line) {
    console.log(line.toUpperCase());
});
```

Instead of calling `console.log()` you can also return a line to print:

```js
filt(function (line) {
    return line.toUpperCase();
});
```

The same using ES6 syntax:

```js
filt(line => line.toUpperCase());
```

Using require in the same line - this is the entire program:

```js
require('filt')(line => line.toUpperCase());
```

Or straight from the command line:

```sh
node -e 'require("filt")(line => line.toUpperCase());'
```

Issues
------
For any bug reports or feature requests please
[post an issue on GitHub](https://github.com/rsp/node-filt/issues).

Author
------
Rafał Pocztarski - [https://github.com/rsp](https://github.com/rsp)

License
-------
MIT License (Expat). See [LICENSE.md](LICENSE.md) for details.
