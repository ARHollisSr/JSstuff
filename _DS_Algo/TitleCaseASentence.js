function titleCase(str) {
    var arr = str.toLowerCase().split(' ');
    var result = arr.map((word) => {
        return word.replace(word.charAt(0), word.charAt(0).toUpperCase());
    });
    return result.join(' ');
};

titleCase("I'm a ready to do whatever it takes");