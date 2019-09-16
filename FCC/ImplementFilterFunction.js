// the global Array
var s = [23, 65, 98, 5];

Array.prototype.myFilter = function (callback) {
    var newArray = [];
    

    // Good for seeing internally
    // console.log(this);  // out puts the array
    // console.log(callback); // out puts the function signature

    for (let index = 0; index < this.length; index++) {
        if (callback(this[index], index, this))
            newArray.push(this[index]);
    }
    // Add your code above this line
    return newArray;

};

var new_s = s.myFilter(function (item) {
    return item % 2 === 1;
});