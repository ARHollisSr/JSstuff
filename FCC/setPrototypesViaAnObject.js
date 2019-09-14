/*  You can add prototypes to an object individually but that can become tedious.
A more efficient way is to set the prototype to a new object that already contains the properties.
This allows for the properties to all be added at once.

**IMPORTANT** A side effect to manually setting the prototype to a new object is that it will
               ERASE the constructor property. To resolve this you MUST manually define the 
               constructor property.
*/

function Dog(name) {
    this.name = name;
}

Dog.prototype = {
    constructor: Dog,  // MANUALLY DEFINING THE CONSTRUCTOR
    numLegs: 2,
    eat: () => console.log("nom nom nom"),
    describe: () => console.log("My name is " + this.name)
};

let snoopy = new Dog();
console.log(snoopy.eat());