  // Export `Helper` either as a CommonJS module, an AMD module or
  // as an global object.
  if (typeof module === 'object' && typeof module.exports === 'object') {
    module.exports = Helper;
  } else {
    if (typeof define === 'function' && define.amd) {
      define('helper', [], function() { return Helper; });
    } else {
      window.Helper = Helper;
    }
  }
