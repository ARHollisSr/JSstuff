/*You will be provided with an initial array (the first argument in the destroyer function), followed by one or more arguments. Remove all elements from the initial array that are of the same value as these arguments.*/

function destroyer(arr) {
    // Remove all the values
    let args = [];

    for (let i = 1; i < arguments.length; i++) {
        args.push(arguments[i]);
    }

    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < args.length; j++) {
            if (arr.indexOf(args[j]) !== -1) {
                arr.splice(arr.indexOf(args[j]), 1);
            }
        }
    }
    return arr;

    /* Alternative:
  
    var args = Array.from(arguments).slice(1);
    return arr.filter(val => {
      return !args.includes(val);
    });
  */

}

console.log(destroyer([1, 2, 3, 1, 2, 3], 2, 3)); // [1,1]
console.log(destroyer([1, 2, 3, 5, 1, 2, 3], 2, 3)); // [1,5,1]
console.log(destroyer([3, 5, 1, 2, 2], 2, 3, 5)); // [1]
