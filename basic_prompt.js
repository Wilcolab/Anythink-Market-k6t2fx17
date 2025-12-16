function toCamelCase(str) {
    return str
        .toLowerCase()
        .trim()
        .split(/\s+/)
        .map((word, index) => {
            if (index === 0) {
                return word;
            }
            return word.charAt(0).toUpperCase() + word.slice(1);
        })
        .join('');
}

// Example usage
console.log(toCamelCase("welcome to geeks for geeks")); // Output: welcomeToGeeksForGeeks