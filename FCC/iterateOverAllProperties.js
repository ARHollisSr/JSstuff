function Dog(name) {
    this.name = name;
}

Dog.prototype.numLegs = 4;

let beagle = new Dog("Snoopy");

let ownProps = [];
let prototypeProps = [];

for (let property in beagle) {
    if (beagle.hasOwnProperty(property)) {
        ownProps.push(property);
    }
    else {
        prototypeProps.push(property);
    }
}

/* Note:
    Own properties are defined directly on the object instance itself. 
    And prototypeproperties are defined on the prototype.
*/