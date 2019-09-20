/*Welcome. In this kata, you are asked to square every digit of a number.

For example, if we run 9119 through the function, 811181 will come out, because 92 is 81 and 12 is 1.
*/

function squareDigits(num) {
    // First Pass

    // let numbers = num.toString().split('');
    // let squared = [];    

    // for (let digit of numbers) {
    //     squared.push(digit * digit);
    // }
    // return parseInt(squared.join(''));

    // Refactored

    let squared = parseInt(num.toString().split('').map((a)=> a * a).join(''));
    return squared;
}

console.log(squareDigits(9119));