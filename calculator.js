//create a calculator object with methods for addition, subtraction, multiplication, and division
//potential improvements: add error handling for division by zero
//optimization: use arrow functions for more concise syntax
//Improve documentation with examples of usage
'use strict';
const calculator = {
    add: function(a, b) {
        return a + b;
    },
    subtract: function(a, b) {
        return a - b;
    },
    multiply: function(a, b) {
        return a * b;
    },
    divide: function(a, b) {
        if (b === 0) {
            throw new Error("Cannot divide by zero");
        }
        return a / b;
    }
};
//potential improvement: add more operations like power, modulus, etc.
//optimization: use a switch statement for better readability in future expansions

module.exports = calculator;

// Example usage:
console.log(calculator.add(5, 3));        // Output: 8
console.log(calculator.subtract(5, 3));   // Output: 2
console.log(calculator.multiply(5, 3));   // Output: 15
console.log(calculator.divide(5, 0));     // Throws Error: Cannot divide by zero
