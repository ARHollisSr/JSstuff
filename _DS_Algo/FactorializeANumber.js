function fatorialize(num) {
    if (num != 0) {
        let values = [];
        for (let i = 1; i <= num; i++) {
            values.push(i);
        }
        let sum = values.reduce((a, b) => {
            return a * b;
        });
        return sum;
    }
    else {
        return 1;
    }
}

/* Note:
    Solution #2 (Recursion)

    if (num === 0) {return 1; }
    return num * factorializeANumber(num - 1);
*/

console.log(fatorialize(5));