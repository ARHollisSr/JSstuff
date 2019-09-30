/*
To prove whether a number is a prime number, first try dividing it by 2, and see if you get a whole number. 
If you do, it can't be a prime number. If you don't get a whole number, next try dividing it by 
prime numbers: 3, 5, 7, 11 (9 is divisible by 3) and so on, always dividing by a prime number
*/

function sumPrimes(num) {

    var sum = 0;
    var divider;

    for (var i = 2; i <= num; i++) {
        divider = 2;
        while (i % divider !== 0) {
            divider++;
        }
        if (i === divider) {
            sum += i;
        }
    }

    /*Alternate solution

    // var primes = [];
    // var sum = 0;
    // for (var i = 2; i <= num; i++) {
    //   var checkForPrime = true;
    //   for (var j = 2; j < i; j++) {
    //     if (i % j === 0) {
    //       checkForPrime = false;
    //       break;
    //     }
    //   }
    //   sum += checkForPrime ? i : 0;
    // }
    */

    return sum;
}