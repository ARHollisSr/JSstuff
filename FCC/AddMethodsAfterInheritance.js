/* A constructor function that inherits its prototypeobject from a supertypeconstructor function 
   can still have its own methods in addition to inherited methods.
*/

function Animal() { }
Animal.prototype.eat = function () { console.log("nom nom nom"); };

function Dog() { }

Dog.prototype = Object.create(Animal.prototype); // inherit from supertype via the cloning of it's prototype object
Dog.prototype.constructor = Dog;    // reset the constructor of the Dog object
Dog.prototype.bark = () => console.log("Woof!"); // add a method to Dog after inheritance

let beagle = new Dog();

beagle.eat(); // Should print "nom nom nom"
beagle.bark(); // Should print "Woof!"