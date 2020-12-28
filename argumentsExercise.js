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
}

Function.prototype.myBind = function (ctx) {
  const fn = this;
  const bindArgs = Array.from(arguments).slice(1)
  return fn.apply(ctx, bindArgs.concat())
}

// tester = function () {
//   console.log(this);
//   return "Hello";
// }

// a = tester.myBind({name: "John"});