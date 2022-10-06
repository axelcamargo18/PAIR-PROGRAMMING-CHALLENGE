// Create a Function Called “vowelChecker” that takes in a single argument (x) and logs weather or not the input is a vowel
// Example 1:
// Input: vowelChecker(‘b’)
// Output: ‘This is not a vowel’
// Example 2:
// Input: vowelChecker(‘a’)
// Output: ‘This is a vowel’

function vowelCheck(x) {
  var firstChar = x.toLowerCase().charAt(0);

  if (
    firstChar === "a" ||
    firstChar === "e" ||
    firstChar === "i" ||
    firstChar === "o" ||
    firstChar === "u"
  ) {
    console.log(" The first letter is a vowel.");
  } else {
    console.log("First letter is NOT a vowel.");
  }
}

vowelCheck("a");
vowelCheck("b");
