/* The split method splits a string into an array of strings.
If the delimiter, which can be a character used to break up strings
or regular expression is a space, you get an array of words, if it's
an empty string you can an array of each character.

Remember: Strings are immutable, split makes it easier to work with them.
*/



function splitify(str) {

    return str.split(/\W+/);  // Capital W is the same [^A-za-z0-9_]

}

console.log(splitify("Hello World,I-am code"));