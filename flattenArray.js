var arr1 = [1,2,3,[1,2,3,4, [2,3,4]]];
function flattenDeep(arr1) {
   return arr1.reduce((acc, val) => Array.isArray(val) ? acc.concat(flattenDeep(val)) : acc.concat(val), []);
}
var result = flattenDeep(arr1);
console.log(result);

