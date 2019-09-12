function Dog() {
    this.name = "Rupert";
    this.color = "brown";
    this.numLegs = 4;
}


let hound = new Dog();

/* Note: 
    The new operator is used when calling a constructor. Without the new operator, this
    inside the constructor would not point to the newly create object and give unexpected results.
*/
