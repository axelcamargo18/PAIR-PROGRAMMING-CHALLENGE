// Write a function that takes in a string and returns a boolean value whether or not the string contains a pair of matching brackets ({}, [], ()). These brackets must be nested appropriately in order to return a true value
// Example 1:
// Input: str = “{hello world}” brackets(srt)
// Output: True

// Example 2:
// Input: str = “{hello world]” brackets(srt)
// Output: False

brackets = (str) => {
  const brackets = ["{}", "[]", "()"];
  brackets.forEach((e) =>
    e === `${str.slice(0, 1)}${str.slice(-1)}` ? console.log(true) : 0
  );
};

brackets("{hello}");
