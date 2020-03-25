function curry(func) {

  return function curried(...args) {
    if (args.length >= func.length) {
      return func.apply(this, args);
    } else {
      return function(...args2) {
        return curried.apply(this, args.concat(args2));
      }
    }
  };

}

function sum(a, b, c) {
  return a + b + c;
}
let curriedSum = curry(sum);

console.log(curriedSum(1, 2, 3));


var infiniteCurry = (fn, seed) => {
  var reduceValue = (args, seedValue) =>
    args.reduce((acc, a) => {
      return fn.call(fn, acc, a);
    }, seedValue);
  var next = (...args) => {
    return (...x) => { console.log(x[0])
      if (!x.length) {
        return reduceValue(args, seed);
      }
      return next(...args, reduceValue(x, seed));
    };
  };
  return next();
};

var iSum = infiniteCurry((x, y) => x + y, 0);

console.log(iSum(1)(3, 4)(5, 6)(7, 8, 9)());
