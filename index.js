
var through = require('through');

module.exports = function(n) {
  return through(function write(datum) {
    if (n === 0) this.queue(datum);
    else --n;
  });
};
