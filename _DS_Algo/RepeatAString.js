function repeatStringNumTimes(str, num) {
    let arr = [];

    if(!(num < 0)) {
        for(let i=0; i<num; i++) {
            arr.push(str);
        }
        return arr.join('');
    }
    return "";
}

repeatStringNumTimes("abc", 3);
// repeatStringNumTimes("*", 8);
// repeatStringNumTimes("abc", -2);


/* Note:
    Alternate solution --
    var addToString = '';

    while(num > 0) {
        addToString += str;
        num--;
    }
    return addToString;
}
*/