/*Convert a string to spinal case. Spinal case is all-lowercase-words-joined-by-dashes.*/


function spinalCase(str) {
    // "It's such a fine line between stupid, and clever."
    // --David St. Hubbins

    //Convert to an arry and split the string at one of the following
    //conditions:
    //a whitespace character [\s] is encountered
    //a underscore character [_] is encountered
    //or is followed by an uppercase letter [(?=[A-Z])]
    //Join the array using a hyphen (-)
    //Lowercase the whole resulting string

    return str.split(/\s|_|(?=[A-Z])/).join('-').toLowerCase();
}

console.log(spinalCase('This Is Spinal Tap'));
console.log(spinalCase("thisIsSpinalTap"));
console.log(spinalCase("The_Andy_Griffith_Show"));
console.log(spinalCase("Teletubbies say Eh-oh"));