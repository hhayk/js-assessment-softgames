if (typeof define !== 'function') { var define = require('amdefine')(module); }

define(function () {
  return {
    listFiles: function (data, dirName, acc = []) {
      data.files.forEach(obj => {
        if (typeof obj === 'object') {
          this.listFiles(obj, dirName, acc);
        } else {
          if (dirName) {
            if (obj.split('.')[1] === dirName) acc.push(obj);
          } else acc.push(obj);
        }
      });

      return acc;
    },

    permute: function (arr) {
      let swap = (inArr, x, y) => {
        let temp = inArr[x];
        inArr[x] = inArr[y];
        inArr[y] = temp;
      }

      let ret = [];

      let recPermute = (inArr, i, n) => {
        if(i == n) ret.push(inArr.slice(0));
        else {
          for(var j = i; j <= n; j++) {
            swap(inArr, i, j);
            recPermute(inArr, i + 1, n);
            swap(inArr, i, j);
          }
        }
      }
      recPermute(arr, 0, arr.length - 1);

      return ret;
    }
  };
});
