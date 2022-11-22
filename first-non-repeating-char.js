/* Write a function named first_non_repeating_letter that takes a string input, and returns the first character that is not repeated anywhere in the string.

For example, if given the input 'stress', the function should return 't', since the letter t only occurs once in the string, and occurs first in the string.

As an added challenge, upper- and lowercase letters are considered the same character, but the function should return the correct case for the initial letter. For example, the input 'sTreSS' should return 'T'.

If a string contains all repeating characters, it should return an empty string ("") or None -- see sample tests. */

export function firstNonRepeatingLetter({ input }) {
    const sLow = input.toLowerCase();

    let charsCount = {};
    for (const char of sLow) {
        charsCount[char] = charsCount[char] ? charsCount[char] + 1 : 1;
    }

    for (const char in charsCount) {
        if (charsCount[char] === 1) {
            for (const sChar of input) {
                if (sChar === char || sChar === char.toUpperCase()) {
                    return sChar;
                }
            }
        }
    }

    return "";
}