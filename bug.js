function myFunc(a, b) {
  if (a === null || b === null) {
    return 0; // Handle null values
  }
  return a + b;
}

console.log(myFunc(null, 5)); // Output: 0
console.log(myFunc(5, null)); // Output: 0
console.log(myFunc(5, 5)); // Output: 10

//The bug is that the function does not handle undefined values properly. If either a or b is undefined, the function will still attempt to perform the addition operation, resulting in NaN.

function myFunc(a, b) {
  if (a === null || b === null || a === undefined || b === undefined) {
    return 0; // Handle null and undefined values
  }
  return a + b;
}

console.log(myFunc(undefined, 5)); // Output: 0
console.log(myFunc(5, undefined)); // Output: 0
console.log(myFunc(5, 5)); // Output: 10