/*Compare two arrays and return a new array with any items only found in one of the two given arrays, but not both. In other words, return the symmetric difference of the two arrays.

Hints:
-Merge the list to make it easy to compare functions. 
-Use filter to get the new array, you will need to create a callback function.
-The best way to go about the callback function is to check if the number from the new merged array is not in both original arrays and return it.
*/
function diffArray(arr1, arr2) {
    var newArr = [];

    function onlyInFirst(first, second) {
        //loop through array, find elements that don't exist in the other
        for(var i=0; i<first.length; i++) {
            if(second.indexOf(first[i]) === -1) {
                //push unique elements to newArr
                newArr.push(first[i]); 
            }
        }
    }
    onlyInFirst(arr1,arr2);
    onlyInFirst(arr2,arr1);

    return newArr;

    /*Alternate solutions:
    function diffArray(arr1, arr2) {
      return arr1
        .concat(arr2)
        .filter(
            item => !arr1.includes(item) || !arr2.includes(item)
        )
    }
    */
}

console.log(diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]));