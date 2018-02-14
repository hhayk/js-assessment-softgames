if (typeof define !== 'function') { var define = require('amdefine')(module); }

define(function() {
  return {
    indexOf : function(arr, item) {
      return arr.indexOf(item);
    },

    sum : function(arr) {
      return arr.reduce((e1, e2) => e1 + e2);
    },

    remove : function(arr, item) {
      return arr.filter(e => e !== item);
    },

    removeWithoutCopy : function(arr, item) {
      while(arr.indexOf(item) > -1) {
        arr.splice(arr.indexOf(item), 1);
      }
      return arr;
    },

    append : function(arr, item) {
      return [...arr, item];
    },

    truncate : function(arr) {
      return arr.slice(0, arr.length - 1);
    },

    prepend : function(arr, item) {
      return [item, ...arr];
    },

    curtail : function(arr) {
      return arr.slice(1, arr.length);
    },

    concat : function(arr1, arr2) {
      return arr1.concat(arr2);
    },

    insert : function(arr, item, index) {
      return [
        ...arr.slice(0, index),
        item,
        ...arr.slice(index, arr.length)
      ];
    },

    count : function(arr, item) {
      return arr.filter(e => e === item).length;
    },

    duplicates : function(arr) {
      const groupBy = names => names.reduce((a, b) => Object.assign(a, {[b]: (a[b] || 0) + 1}), {});
      const duplicates = dict => Object.keys(dict).filter(a => dict[a] > 1);
      return duplicates(groupBy(arr));
    },

    square : function(arr) {
      return arr.map(e => e * e);
    },

    findAllOccurrences : function(arr, target) {
      return arr.map((e, i) => [e, i]).filter(t2 => t2[0] === target).map(t2 => t2[1]);
    }
  };
});
