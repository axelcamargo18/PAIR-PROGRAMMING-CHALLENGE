// Create a function that checks an array for prime numbers then inserts any primes into a new array.
// Example 1:                                                                                                                                       Input: numArray = [1,2,3,4,5,6,7,8,9,10]
// Output: primeArray = [2,3,5,7]
// Example 2:Input: numArray = [10, 18, 19, 29, 33, 35, 47, 66, 83]

// function checkArr(numArray) {
//   var numArray = [2, 3, 5, 7, 10, 18, 19, 29, 33, 35, 47, 66, 83];
//   for (var i = 2; i <= array.length - 1; i++) {
//     if (i % 2 === 0 || i % 3 === 0) continue;
//     document.writeln(i + ",");
//   }
// }
// console.log(checkArr());

// how to find prime numbers in an array in javascript
let num = [
  -1, -2, -3, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19,
  20, 21, 22, 23, 24, 25, 26, 27, 28, 29,
];
let result = [];
function isPrime(num) {
  if (num < 2) return false;

  for (let k = 2; k < num; k++) {
    if (num % k == 0) {
      return false;
    }
  }
  return true;
}
num.forEach(function (element) {
  const item = isPrime(element);
  if (item) {
    result.push(element);
  }
});
console.log(result); // [ 2, 3, 5, 7, 11, 13, 17, 19]
