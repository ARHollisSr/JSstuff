/*Flatten a nested array. You must account for varying levels of nesting.*/

function steamrollArray(arr) {
    let flat = [].concat(...arr);
    return flat.some(Array.isArray) ? steamrollArray(flat) : flat;
}

steamrollArray([1, [2], [3, [[4]]]]); //[1, 2, 3, 4]
steamrollArray([[["a"]], [["b"]]]);  //["a", "b"]
steamrollArray([1, [], [3, [[4]]]]); // [1, 3, 4]
steamrollArray([1, {}, [3, [[4]]]]); // [1, {}, 3, 4]