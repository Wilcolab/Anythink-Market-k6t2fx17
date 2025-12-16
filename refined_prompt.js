/**
 * Converts a given phrase into camel case format.
 * The first word is converted to lowercase, and each subsequent word 
 * starts with an uppercase letter, with the rest of the letters in lowercase.
 *
 * @param {string} phrase - The input phrase to be converted to camel case.
 * @returns {string} The camel case representation of the input phrase.
 *
 * @example
 * // returns 'helloWorld'
 * camelCase('hello world');
 *
 * @example
 * // returns 'myNameIsJohn'
 * camelCase('my name is john');
 */

/**
 * Converts a given phrase into dot case format.
 * Each word in the phrase is converted to lowercase and joined by a dot.
 *
 * @param {string} phrase - The input phrase to be converted to dot case.
 * @returns {string} The dot case representation of the input phrase.
 *
 * @example
 * // returns 'hello.world'
 * dotCase('Hello World');
 *
 * @example
 * // returns 'my.name.is.john'
 * dotCase('My Name Is John');
 */
function camelCase(phrase) {
    return phrase
        .split(' ')
        .map((word, index) => {
            if (index === 0) {
                return word.toLowerCase();
            }
            return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
        function dotCase(phrase) {
            return phrase
                .split(' ')
                .map(word => word.toLowerCase())
                .join('.');
        }
        })
        .join('');
}

