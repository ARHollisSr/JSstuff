function countString(str) {

    let arr = str.split('').filter(a => {
        if (a !== " ")
            return a;
    }).join('');

    return arr.length;
}

console.log(countString("This is it"));