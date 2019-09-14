/* IIFE is often used to group related functionality into a single object or module.
In doing so, you end up with an IIFE that returns an object that contains all of the
mixin behaviors as properties of the object.

The advantage of the module pattern is that all of the motion behaviors can be packaged into
a single object that can then be used by other parts of the code.
*/

let funModule = (function () {
    return {
        isCuteMixin: function (obj) {
            obj.isCute = function () {
                return true;
            };
        },
        singMixin: function (obj) {
            obj.sing = function () {
                console.log("Singing to an awesome tune");
            };
        }
    }
})();

function Dog(){}
beagle = new Dog();
funModule.isCuteMixin(beagle);

console.log(beagle.isCute());