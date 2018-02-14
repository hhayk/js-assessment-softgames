if (typeof define !== 'function') { var define = require('amdefine')(module); }

define(function() {
  return {
    argsAsArray : function(fn, arr) {
      return fn(...arr);
    },

    speak : function(fn, obj) {
      return fn.bind(obj)();
    },

    functionFunction : function(str) {
      return (str2) => (str + ', ' + str2);
    },

    makeClosures : function(arr, fn) {
      return arr.map(e => fn.bind(this, e));
    },

    partial : function(fn, str1, str2) {
      return (str3) => fn(str1, str2, str3);
    },

    useArguments : function(...args) {
      return args.reduce((e1, e2) => e1 + e2);
    },

    callIt : function(fn) {
      let args = Array.from(arguments);
      return fn(...args.slice(1, args.length));
    },

    partialUsingArguments : function(fn) {
      let args = Array.from(arguments);
      return (...inargs) => fn(...args.slice(1, args.length), ...inargs);
    },

    curryIt : function(fn) {
      return a => b => c => fn(a, b, c);
    }
  };
});
