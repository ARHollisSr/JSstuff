/*Write a function that takes two or more arrays and returns a new array of unique values in the order of the original provided arrays.
In other words, all values present from all arrays should be included in their original order, but with no duplicates in the final array.
The unique numbers should be sorted by their original order, but the final array should not be sorted in numerical order.
*/


function uniteUnique(arr) {

    let arr2 = [];
    arr2.push(...arr);

    for (let i = 1; i < arguments.length; i++) {
        for (let j = 0; j < arguments[i].length; j++) {
            if (arr2.indexOf(arguments[i][j]) == -1)
                arr2.push(arguments[i][j]);
        }
    }

    return arr2;
}

uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]);