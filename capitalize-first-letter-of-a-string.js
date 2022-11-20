/* Capitalize First Letter of a String
Write a function capitalize() which capitalizes the first letter (if any) of the given string. For example:

Input	Output
string	String
hello World	Hello World
i love codewars	I love codewars
This sentence is already capitalized	This sentence is already capitalized
0123the first character of this sentence is not a letter	0123the first character of this sentence is not a letter
JavaScript / CoffeeScript: Extend the String prototype with a method capitalize() so you can call it on a string like so: "string".capitalize(). Learn about inheritance and the prototype chain.

Furthermore, the built-in string methods toUpperCase() and toLowerCase() are disabled for this Kata. */

String.prototype.capitalize = function() {
    let code = this.charCodeAt(0)
    if (code > 96 && code < 122) {
      code -= 32
    }
    return String.fromCharCode(code) + this.slice(1)
  }

String.prototype.capitalize = function () {
    const findFirstLetter = this.replace(/^[a-z]/, item =>
      String.fromCodePoint(this.charCodeAt(0) - 32),
    );
    return findFirstLetter;
  };