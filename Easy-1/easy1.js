// Write a JavaScript function that takes in a random array and outputs two new arrays of odd numbers and even numbers.
// Example:
// Input: [2, 4, 7, 11, 15, 16]

// Output: Even numbers: [2, 4, 16]
// 	  Odd Numbers: [7, 11, 15]

let arr = [2, 4, 7, 11, 15, 16];

let odds = arr.filter((n) => n % 2);
let evens = arr.filter((n) => n % 2 == 0);

console.log(evens);
console.log(odds);
