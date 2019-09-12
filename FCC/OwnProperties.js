function Bird(name) {
    this.name = name;
    this.numLegs = 2;
}

let canary = new Bird("Tweety");
let ownProps = [];
// Add your code below this line
for (let property in canary) {
    if (canary.hasOwnProperty(property)) {
        ownProps.push(property);
    }
}

console.log(ownProps);

/* Notes:
    Inside a constructor the defined properties are called own properties because they are defined directly on the instance object. Therefore, each instance has its own seperate copy of these properties.
*/