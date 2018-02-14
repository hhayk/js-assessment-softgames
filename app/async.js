if (typeof define !== 'function') { var define = require('amdefine')(module); }

define([ 'jquery' ], function($) {
  return {
    async : function(value) {
      return new Promise((resolve, reject) => resolve(value));
    },

    manipulateRemoteData : function(url) {
      return new Promise((resolve, reject) => {
        const xhr = new XMLHttpRequest();
        xhr.open("GET", url);
        xhr.onload = () => {
          let res = JSON.parse(xhr.responseText);
          let names = res.people.map(p => p.name).sort();
          resolve(names);
        };
        xhr.onerror = () => reject(xhr.statusText);
        xhr.send();
      })
    }
  };
});
