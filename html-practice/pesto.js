


// function memoizeFn(fn){
// const cache = new Map()
//     return function(...args){
//         const key = JSON.stringify(args)
//         if(cache.has(key)) {
//             return cache.get(key)
//         } else {
//             const result = fn(...args)
//             cache.set(key,result)
//             return result
//         }
//     }
// }

// function sum(a,b){
//     console.log(`sum is called with ${a}, ${b}`)
//     return a+b
// }

// // const factorialMem = memoizeFn(factorial)
// const sumMem = memoizeFn(sum)

// // factorialMem(10)
// // factorialMem(5)
// // factorialMem(10)


// console.log(sumMem(1,2))
// console.log(sumMem(1,21))
// console.log(sumMem(1,2))
// console.log(sumMem(1,2))
// console.log(sumMem(1,2))
// console.log(sumMem(1,2))
// console.log(sumMem(1,2))
// console.log(sumMem(1,2))

const timePro = function() {
    return new Promise((resolve, reject) => {
        let waitingtime = setTimeout(resolve("Resolved"), 1000);
    });
}

const var1 = timePro();

var1.then(response => {
    console.log(response);
})
var1.then(response => {
    console.log(response)
})

// function* getNum(){
//     yield 1;
//     yield 2;
//     yield 3;
//     yield 4;
//     yield 5;
// }

class MulNum {
    constructor() {
    }
    multiply(num1, num2) {
        return num1 * num2;
    }
}

const res = new MulNum();

console.log(res.multiply(2,2))

