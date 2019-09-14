/* It's possible to override an inherited method. It's performed by adding a method
to ChildObject.prototype
*/

function Bird() { }

Bird.prototype.fly = function() { return "I am flying!"; };

function Penguin() { }
Penguin.prototype = Object.create(Bird.prototype);
Penguin.prototype.constructor = Penguin;

Penguin.prototype.fly = () => "Alas, this is a flightless bird."; // override inherited fly method

let penguin = new Penguin();
console.log(penguin.fly());