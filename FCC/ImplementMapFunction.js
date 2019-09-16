/*
    - add myMap to Array.prototype
    - map is called with function as an argument inside it
        .map(function(val, index, arr){})
        Our map function should accept function as an argument
    - The function in the argument should be called for each value in the 
       array with three args: current element, current element's index, entire array
    - this refers to the array on which myMap is done. this is the array itself.
    - Output the result to a new array and return
*/

var s = [23, 65, 98, 5];

Array.prototype.myMap = function(callback) {
    let newArray = [];

    for(let index = 0; index < this.length; index++) {
        newArray.push(callback(this[index], index, this));
    }
    return newArray;
};

var new_s = s.myMap(function(item) {
    return item * 2;
});

console.log(new_s);