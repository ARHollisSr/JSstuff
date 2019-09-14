/*  You can add prototypes to an object individually but that can become tedious.
A more efficient way is to set the prototype to a new object that already contains the properties.
This allows for the properties to all be added at once.
*/

function Dog(name) {
    this.name = name;
}

Dog.prototype = {
    numLegs: 2,
    eat: () => console.log("nom nom nom"),
    describe: () => console.log("My name is " + this.name)
};

let snoopy = new Dog();
console.log(snoopy.eat());