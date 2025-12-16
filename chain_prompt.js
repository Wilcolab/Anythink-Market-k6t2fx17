// Function to convert a camelCase string to kebab-case
function toKebabCase(str) {
    return str
        .replace(/([a-z])([A-Z])/g, '$1-$2') // Insert a hyphen between lowercase and uppercase letters
        .toLowerCase(); // Convert the entire string to lowercase
}

// Example usage
console.log(toKebabCase('camelCaseString')); // Output: camel-case-string
console.log(toKebabCase('anotherExampleHere')); // Output: another-example-here