function findLongestWordLength(str) {

    let longestWord = 0;
    let arrayOfWords = str.split(" "); // "" seperates each letter and space with a comma, " " seperates each word with a comma no space

    for (let word of arrayOfWords) {
        if(longestWord <= word.length)
            longestWord = word.length;
    }

    return longestWord;
}

console.log(findLongestWordLength("The quick brown fox jumped over the lazy dog"));