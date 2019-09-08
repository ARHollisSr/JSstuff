function validAnagram(str1, str2) {
    if (str1.length !== str2.length) {
        return false;
    }

    let comparisonCheck1 = {};
    let comparisonCheck2 = {};

    for (let char of str1) {
        //add 1 if character exists or intialize to 1
        comparisonCheck1[char] = (comparisonCheck1[char] || 0) + 1;
    }

    for (let char of str2) {
        //add 1 if character exists or intialize to 1
        comparisonCheck2[char] = (comparisonCheck2[char] || 0) + 1;
    }

    for (let key in comparisonCheck1) {
        if (!(key in comparisonCheck2)) {
            return false;
        }

        if (comparisonCheck1[key] !== comparisonCheck2[key]) {
            return false;
        }
    }
    return true;
}


console.log(validAnagram('', ''));
console.log(validAnagram('aaz', 'zza'));
console.log(validAnagram('anagram', 'nagaram'));
console.log(validAnagram('rat', 'car'));
console.log(validAnagram('awesome', 'awesom'));
console.log(validAnagram('amanaplanacanalpanama', 'acanalmanplanpamana'));
console.log(validAnagram('qwerty', 'qeywrt'));
console.log(validAnagram('texttwisttime', 'timetwisttext'));

/* Notes:
    When using for..in  you use that to iterate over the properties of an object (the object keys)
    Use for..of to iterate over the values.
*/