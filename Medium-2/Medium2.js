// Create a function that accepts two strings, then determines whether or not the first string is an anagram of the second string by returning a boolean.
// Example:
// Input: String 1: So dark the con of man
//  String 2: Madonna of the Rocks
// Output: True
// Input: String 1: Things are good
// 	  String 2: Dogs eat ants
// Output: False

function letterChecker(a1, a2) {
  lowercase = (x) => x.toLowerCase().split("").sort().join("");
  lowercase(a1) == lowercase(a2) ? console.log("true") : console.log("false");
}
letterChecker("god", "DGo");
