/*To set the prototype of the subtype (child) to be an instance of the parent:

    SomeChildObject.prototype = Object.create(SomeParentObject.prototype);

    Since prototype is the recipe for creating an object. The recipe for SomeChildObject now
    iherits all the functionality from SomeParentObject.
*/

function Animal() { }

Animal.prototype = {
    constructor: Animal,
    eat: function () {
        console.log("nom nom nom");
    }
};

function Dog() { }

Dog.prototype = Object.create(Animal.prototype); //Set child prototype instance to instance of parent

let beagle = new Dog();
beagle.eat();  // Should print "nom nom nom"