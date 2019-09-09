function confirmEnding(str, target) {
    let arr = str.split('');
    return arr.slice(arr.length - target.length, arr.length).join('') == target;
}

confirmEnding("Congratulation", "on");
// confirmEnding("Open sesame", "same");
// confirmEnding("Bastian", "n");