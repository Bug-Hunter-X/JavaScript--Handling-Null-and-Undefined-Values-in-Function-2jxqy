# JavaScript: Handling Null and Undefined Values

This repository demonstrates a common error in JavaScript when dealing with null and undefined values in functions and provides a solution.

## Bug Description

The original `myFunc` function only correctly handles `null` values.  When an `undefined` value is passed, the addition operation leads to `NaN`.  This can cause unexpected behavior in applications.

## Solution

The improved version of `myFunc` explicitly checks for both `null` and `undefined` values before performing the addition, thus preventing the `NaN` error. This robust error handling ensures the function produces predictable results under different input conditions. 

## How to Run

1. Clone the repository.
2. Open `bug.js` and `bugSolution.js` to examine the original and improved function code.
3. Run the JavaScript files using a Node.js environment, or in your browser's console, to observe the outputs.

