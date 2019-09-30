/*Convert the characters &, <, >, "(double quote), and '(apostrophe), in a string to their corresponding HTML entities.
*/

function convertHTML(str) {
    // &colon;&rpar;
    let entities = {
        '&': '&amp;',
        '<': '&lt;',
        '>': '&gt;',
        '"': '&quot;',
        "\'": '&apos;'
    }

    for (let item in entities) {
        str = str.replace(new RegExp(item, 'g'), entities[item]);

    }
    return str;

    /*Alternate: 
        function convertHTML(str) {
      // Use Object Lookup to declare as many HTML entities as needed.
      htmlEntities={
        '&':'&amp;',
        '<':'&lt;',
        '>':'&gt;',
        '"':'&quot;',
        '\'':"&apos;"
      };
      //Use map function to return a filtered str with all entities changed automatically.
      return str.split('').map(entity => htmlEntities[entity] || entity).join('');
    }
    */
}

console.log(convertHTML("Dolce & Gabbana"));
console.log(convertHTML("Hamburgers < Pizza < Tacos"));
console.log(convertHTML("Sixty > twelve"));
console.log(convertHTML('Stuff in "quotation marks"'));
console.log(convertHTML("Schindler's List"));