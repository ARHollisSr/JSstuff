/*Usually when you buy something, you're asked whether your credit card number, phone number or answer to your most secret question is still correct. However, since someone could look over your shoulder, you don't want that shown on your screen. Instead, we mask it.

Your task is to write a function maskify, which changes all but the last four characters into '#'.
*/

// replace all but last four elements with the # character
function maskify(cc) {

    // First Attempt
    
    // let maskedValues = cc.split('');
    // for (let i = 0; i < maskedValues.length - 4; i++) {
    //     maskedValues.splice(i, 1, '#');
    // }
    // return maskedValues.join('');

    // Refactored
    return cc.split('').map((a, index) => {
            if(index < cc.length-4)            
                return a = '#';
            return a;
    }).join('');

}

console.log(maskify("Skippy"));
console.log(maskify("Nananananananananananananananana Batman!"));
