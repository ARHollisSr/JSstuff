/* Join is used to join the elements of an array together to create a string.*/

function sentensify(str) {

    let arr = str.split(/\W+/).join(" ");
    return arr;
}

console.log(sentensify("May-the-force-be-with-you"));
console.log(sentensify("The.force.is.strong.with.this.one"));
console.log(sentensify("There,has,been,an,awakening"));