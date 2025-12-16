function addNumbers(a, b) {
    // Check for null or undefined
    if (a === null || a === undefined || b === null || b === undefined) {
        throw new Error('Inputs cannot be null or undefined');
    }

    // Check if both inputs are numbers
    if (typeof a !== 'number' || typeof b !== 'number') {
        throw new Error('Both inputs must be numbers');
    }

    // Check if inputs are valid numbers (not NaN)
    if (isNaN(a) || isNaN(b)) {
        throw new Error('Inputs must be valid numbers');
    }

    return a + b;
}

module.exports = addNumbers;