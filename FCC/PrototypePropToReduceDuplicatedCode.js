function Dog(name) {
    this.name = name;
}

let germanShepherd = new Dog("Blazer");
Dog.prototype.numLegs = 4;

/* Prototype properties help to avoid duplicated variables. The prototype is an object that is shared among all instances of (insert object here). Since instances automatically have properties on the prototype, view it as a recipe for creating objects. Nearly every obj in JS has a prototype property which is part of the constructor that created it.
*/