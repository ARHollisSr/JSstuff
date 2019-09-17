/* The side effect of the sort method is that it changes the order of the 
elements in the original orray; it mutates in place. We can avoid this by
concatenating an empty array to the one being sorted then run the sort method.
Remember, concat returns a new array.
*/


var globalArray = [5, 6, 3, 2, 9];

function nonMutatingSort(arr) {
    let tempArray = [];
    return tempArray.concat(arr).sort();
}

console.log(nonMutatingSort(globalArray));