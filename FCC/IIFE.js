/* A common pattern in JS is to execute a function as soon as it's declared.
Note the function has no name and is not stored in a variable. The two parens
at the end of the function cause it to be immediately invoked. This is known as
immediately invoked function expression or IIFE.
*/

(function () {
    console.log("A cozy nest is ready");
})();
