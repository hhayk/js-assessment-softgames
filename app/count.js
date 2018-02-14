if (typeof define !== 'function') { var define = require('amdefine')(module); }

define(function () {
  return {
    count: function (start, end) {
      var tick = 0;
      let countFn = () => {
        let counter = start + tick++;
        if (counter == end) clearInterval(intervalId);
        console.log(counter);
      }
      countFn();
      let intervalId = setInterval(countFn, 100);

      return {
        cancel: () => clearInterval(intervalId)
      }
    },
  };
});