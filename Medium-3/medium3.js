// Write a function that takes in two numbers and determines the largest positive integer that divides the two numbers without a remainder.

// Example 1:
// Input: gdc_two_numbers(336,360)
// Output: 24

// Example 2:
// Input: gdc_two_numbers(78,126)
// Output: 6

function largestRemainderCheck(x, y) {
  x = Math.abs(x);
  y = Math.abs(y);
  while (y) {
    var t = y;
    y = x % y;
    x = t;
  }
  return x;
}

console.log(largestRemainderCheck(336, 360));
console.log(largestRemainderCheck(78, 126));
