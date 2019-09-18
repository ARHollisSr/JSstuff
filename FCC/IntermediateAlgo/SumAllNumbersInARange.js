function sumAll(arr) {

    let smallest = Math.min(...arr);
    let largest = Math.max(...arr);
    let sum = 0;

    for (let i = smallest; i <= largest; i++) {
        sum += i;
    }

    return sum;

}

console.log(sumAll([1, 4]));
console.log(sumAll([10, 5]));
console.log(sumAll([4, 1]));
