
var through = require('through');
var debug = require('debug')('skip-stream')

module.exports = function(n) {
  var stream = through(write);

  function write(datum) {
    if (n === 0) {
      debug("queueing %s", datum);
      this.queue(datum);
    } else {
      debug("decrementing %s", --n);
    }
  }

  return stream;
}
