function reverseAString(str) {
    
    let arr = str.split("");
    str = arr.reverse().join("");
    return str;

    /* Or...
    let arr = [];
    for(let letter of str) {
        arr.unshift(letter);
    }
    return arr.join("");
    */
}