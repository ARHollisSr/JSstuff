/* Use slice and splice to copy each elment of the first array into the second array,
    in order. Begin inserting elements at index n of the second array. Return the resulting array.
    The input arrays should remain the same after execution.
*/

function frankenSplice(arr1, arr2, n) {
    let copyArray = arr2.slice();

    for(let i = 0; i < arr1.length; i++) {
        copyArray.splice(n, 0, arr[i]);
        n++;
    }

    return copyArray;
}

console.log(frankenSplice([1, 2, 3], [4, 5, 6], 1));    // [4, 1, 2, 3, 5]
console.log(frankenSplice([1, 2], ["a", "b"], 1));      // ["a", 1, 2, "b"]
