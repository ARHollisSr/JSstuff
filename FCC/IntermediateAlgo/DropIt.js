/*
Given the array arr, iterate through and remove each element starting from the first element
(the 0 index) until the function funcreturns truewhen the iterated element is passed through it.

Then return the rest of the array once the condition is satisfied, otherwise, arrshould be returned as an empty array.
*/


function dropElements(arr, func) {

    while (!func(arr[0])) {
        arr.shift();
    }

    // Drop them elements.
    return arr;
}

dropElements([1, 2, 3], function (n) { return n < 3; });
dropElements([1, 2, 3, 4], function (n) { return n >= 3; })
dropElements([0, 1, 0, 1], function (n) { return n === 1; });
dropElements([1, 2, 3], function (n) { return n > 0; });
dropElements([1, 2, 3, 4], function (n) { return n > 5; });
dropElements([1, 2, 3, 7, 4], function (n) { return n > 3; });
dropElements([1, 2, 3, 9, 2], function (n) { return n > 2; });