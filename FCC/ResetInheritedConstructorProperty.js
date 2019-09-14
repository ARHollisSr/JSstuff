/* When an object inherits its property from another object. It also inherits
the supertype's constructor property.

Objects inheriting from a supertype should show their correct constructors. To do so,
we can manually set their constructors to their propert objects.
*/

function Animal() { }
function Bird() { }
function Dog() { }

Bird.prototype = Object.create(Animal.prototype); // inheriting the Animal constructor here
Dog.prototype = Object.create(Animal.prototype);  // inheriting the Animal constructor here

Bird.prototype.constructor = Bird; // resetting back to its proper constructor
Dog.prototype.constructor = Dog;   // resetting back to its proper constructor


let duck = new Bird();
let beagle = new Dog();

console.log(duck.constructor);
console.log(beagle.constructor);