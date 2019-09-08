function findLongestWordLength(str) {

    let longestWord = 0;
    let arrayOfWords = str.split(" "); // "" seperates each letter and space with a comma, " " seperates each word with a comma no space

    for (let word of arrayOfWords) {
        if(longestWord <= word.length)
            longestWord = word.length;
    }

    return longestWord;

    /* Note:
    Alternative solution

    return str.split(' ').reduce((x,y)=> {
        return Math.max(x, y.length)
    },0); // 0 is used to give an initial value to x so Math.max knows where to begin

    */
}

console.log(findLongestWordLength("The quick brown fox jumped over the lazy dog"));