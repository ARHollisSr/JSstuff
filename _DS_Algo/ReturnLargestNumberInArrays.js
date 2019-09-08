function largestOfFour(arr) {

    let largest = [];
    let currentVal = 0;

    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr[i].length; j++) {
            if (j === 0) {
                currentVal = arr[i][j];
            }

            if (currentVal < arr[i][j]) {
                currentVal = arr[i][j];
            }
        }
        largest.push(currentVal);
        currentVal = 0;
    }

    return largest;
    /*Note: 
    
      Alternative Solution
      
      return arr.map(Function.apply.bind(Math.max, null));
    */
}


largestOfFour([[17, 23, 25, 12], [25, 7, 34, 48], [4, -10, 18, 21], [-72, -3, -17, -10]]);

/* Time it
var t1 = performance.now();
largestOfFour([[17, 23, 25, 12], [25, 7, 34, 48], [4, -10, 18, 21], [-72, -3, -17, -10]]);
var t2 = performance.now();
console.log(`Time Elapsed: ${(t2 - t1) / 1000} seconds.`)
*/