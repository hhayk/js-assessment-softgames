if (typeof define !== 'function') { var define = require('amdefine')(module); }

define(function() {
  return {
    valueAtBit: function(num, bit) {
      return (num >> bit - 1) & 1;
    },

    base10: function(str) {
      return Number.parseInt(str, 2);
    },

    convertToBinary: function(num) {
      let base2 = (num).toString(2);
      let perc = 8;
      if(base2.length < perc) {
        base2 = (new Array(perc).fill(0).join('') + base2).slice(-perc);
      }
      return base2;
    },

    multiply: function(a, b) {
      let perc = 100000000;
      return Math.round((a * b) * perc) / perc;
    }
  };
});

