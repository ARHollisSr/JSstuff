/* One way to create an instance of an object is to use the new operator.
    There are some disadvantages when using that syntax for inheritance.
    
    let animal = Object.create(Animal.prototype);
    Object.create(obj) creates a new object and sets obj as the new object's prototype.
    Remember that prototype is recipe for creating an object. By setting the property of
    animal to be Animal's prototype, we're giving the animal instance the same "recipe" as
    any other instance of Animal
*/

function Animal() { }

Animal.prototype = {
    constructor: Animal,
    eat: function () {
        console.log("nom nom nom");
    }
};


let duck = Object.create(Animal.prototype); // inheriting from the a Supertype
let beagle = Object.create(Animal.prototype); // inheriting from the a Supertype

duck.eat(); // Should print "nom nom nom"
beagle.eat(); // Should print "nom nom nom" 