
# skip-stream

  Skip n elements in a stream

  [![Build Status](https://travis-ci.org/jb55/skip-stream.svg)](https://travis-ci.org/jb55/skip-stream)

## Installation

  Install with npm

    $ npm install skip-stream

## API

### skip(n)

returns a through stream that skips the first n elements that are
piped into it

## Example

```js
var skip = require('skip-stream');
var csv  = require('csv-parse');
var through = require('through');

process.stdin
.pipe(csv())
.pipe(skip(1))
.pipe(through(function(record){
  // csv header was skipped, only records
});
```

## License

  The MIT License (MIT)

  Copyright (c) 2014 William Casarin

  Permission is hereby granted, free of charge, to any person obtaining a copy
  of this software and associated documentation files (the "Software"), to deal
  in the Software without restriction, including without limitation the rights
  to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
  copies of the Software, and to permit persons to whom the Software is
  furnished to do so, subject to the following conditions:

  The above copyright notice and this permission notice shall be included in
  all copies or substantial portions of the Software.

  THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
  IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
  FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
  AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
  LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
  OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
  THE SOFTWARE.
