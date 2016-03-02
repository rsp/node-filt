node filt
=========
filt is for simple filters

This module allows you to quickly write command-line filters -
programs that read standard input line by line and print something
on standard output.

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
