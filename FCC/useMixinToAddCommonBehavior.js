/* In the cases where inheritance doesn't make sense for unrelated objects. 
    A mixin will allow other objects to use a collection of functions.
*/

let bird = {
    name: "Donald",
    numLegs: 2
};

let boat = {
    name: "Warrior",
    type: "race-boat"
};

let glideMixin = (obj) => obj.glide = () => "I'm gliding"; // mixin method

glideMixin(bird); // add common behavior via mixin
glideMixin(boat); // add common behavior via mixin

console.log(bird.glide());
console.log(boat.glide());