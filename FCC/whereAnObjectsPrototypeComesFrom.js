/* An object inherits its prototype directly from the constructor function that created it.
    You can show this relationship with the isPrototypeOf method
*/

function Dog(name) {
    this.name = name;
}

let beagle = new Dog("Snoopy");

console.log(Dog.prototype.isPrototypeOf(beagle)); //retyrns trule