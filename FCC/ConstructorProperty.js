/* The advantage of the constructor property is that it's possible to check for this property to find
out what kind of object it is. However, Since the constructor property can be overwritten it best
practice to use instanceOf method instead.
*/

function Dog(name) {
    this.name = name;
}

function joinDogFraternity(candidate) {
    if (candidate.constructor === Dog) {
        return true;
    }
    return false;
}

console.log(Dog);

