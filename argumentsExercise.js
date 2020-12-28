function sum () {
  let sum = 0

  for (let i = 0; i < arguments.length; i++) {
    sum += arguments[i]
  };

  return sum;
};

function sum2 (...nums) {
  let sum = 0

  for (let i = 0; i < nums.length; i++) {
    sum += nums[i]
  };

  return sum;
};

Function.prototype.myBind = function (ctx) {
  const fn = this;
  const bindArgs = Array.from(arguments).slice(1);
  return function boundFn () {
    const callArgs = Array.from(arguments);
    return fn.apply(ctx, bindArgs.concat(callArgs));
  };
};

// tester = function () {
//   console.log(this);
//   return "Hello";
// }

// a = tester.myBind({name: "John"});

Function.prototype.myBind2 = function (ctx, ...bindArgs) {
  return function boundFn(...callArgs) {
    return this.apply(ctx, bindArgs.concat(callArgs));
  };
};


function curriedSum(numArgs) {
  const numbers = [];
    function _curriedSum(num) {
      numbers.push(num);
      if (numbers.length === numArgs) {
        debugger
        let total = 0;

        numbers.forEach((n) => { total += n; });
        return total 
      } else {
        debugger
        // return
        return _curriedSum;
      }
    }
    debugger
    return _curriedSum;
}

Function.prototype.curry = function(numArgs) {
  const args = [];
  const fn = this;
  function _curriedFn(arg) {
    args.push(arg);
    if (args.length === numArgs) {
      return fn.apply(null, args);
    } else {
      return _curriedFn;
    }
  }
  return _curriedFn;
}

Function.prototype.curry1 = function (numArgs) {
  const args = [];
  const fn = this;
  function _curriedFn(arg) {
    args.push(arg);
    if (args.length === numArgs) {
      return fn(...args);
    } else {
      return _curriedFn;
    }
  }
  return _curriedFn;
}