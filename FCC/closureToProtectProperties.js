/* An object with a public property can accessed and changed outside of its definition.
The simplest way to make a property private is by creating a variable within the constructor
function.  This changes the scope of that variable to be within the constructor function versus
available globally. This way, the property can only be accessed and changed by methods also 
within the constructor function.
*/

function Bird() {
    // this.weight = 15; // public property
    let weight = 15; // private property
    this.getWeight = () => weight; //public accessor method
}