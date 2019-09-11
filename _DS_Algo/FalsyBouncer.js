/*Remove all falsy values from an array.
    Falsy values in JS are false, null, 0, "", undefined, NAN
*/

function bouncer(arr) {
    for (let i = 0; i < arr.length; i++) {
        if (!arr[i]) { // test for falsy value; if value is falsy condition will be true
            arr.splice(i, 1, ''); //delete current value and replace with nothing
        }
    }
    return arr.filter((a) => { return a != "" }); //filter any dangling commas representing empty array elements

    /*Note :

    Advance solution

    return arr.filter(Boolean);
    */
}

console.log(bouncer([7, "ate", "", false, 9]));
console.log(bouncer(["a", "b", "c"]));
console.log(bouncer([false, null, 0, NaN, undefined, ""]));
console.log(bouncer([1, null, NaN, 2, undefined]));