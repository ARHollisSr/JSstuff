/* Return the lowest index at which a value (second argument) should be inserted into 
an array (first argument) once it has been sorted. The returned value should be a number.
*/

function getIndexToIns(arr, num) {

    if (arr.length == 0)
        return 0;

    arr.sort((a, b) => a - b);

    for (let i = 0; i < arr.length; i++) {

        if (num == arr[i]) {
            return i;
        }

        if ((num < arr[i]) && (num > arr[i - 1])) {
            return num = i;
        }

        if (num > arr[arr.length - 1]) {
            return arr.length;
        }
    }

    return num;

    /* Note:
    Best solution
    
    function getIndexToIns(arr, num) {
        arr.push(num);
        arr.sort(function (a, b) { return a - b });
        return arr.indexOf(num);
    }
   */

}

// console.log(getIndexToIns([10, 20, 30, 40, 50], 30));
// console.log(getIndexToIns([3, 10, 5], 3));
// console.log(getIndexToIns([5, 3, 20, 3], 5));
// console.log(getIndexToIns([2, 20, 10], 19));
// console.log(getIndexToIns([2, 5, 10], 15));
// console.log(getIndexToIns([], 1));
console.log(getIndexToIns([2, 5, 10], 15));