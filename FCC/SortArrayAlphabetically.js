/* The code below returns the array alphabetically in ascending order.
    Reverse condition, e.g., (a < b) to ( a > b) for descending.
*/

function alphabeticalOrder(arr) {

    return arr.sort((a, b) => {
        //return in ascending order
        if (a < b) {
            return -1;
        } else if (b > a) {
            return 1;
        } else {
            return 0;
        }
    });

}

console.log(alphabeticalOrder(["a", "d", "c", "a", "z", "g"]));