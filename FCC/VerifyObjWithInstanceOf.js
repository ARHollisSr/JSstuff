function House(numBedrooms) {
    this.numBedrooms = numBedrooms;
}

// Add your code below this line
let myHouse = new House(3);
console.log(myHouse instanceof House);

/* Notes:
    Object created via a constructor (new) are instnaces of the constructor. The instanceOf operator allows you to compare an object to a constructor, returning true or false based on whether it was created with a constructor or not.
*/
