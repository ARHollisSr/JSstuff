
// the global variable
var globalTitle = "Winter Is Coming";


function urlSlug(title) {

    return title.split(/\W/).filter((obj) => {
        return obj !== '';
    }).join('-').toLowerCase();

}


var winterComing = urlSlug(globalTitle); // Should be "winter-is-coming"
var winterComing2 = urlSlug(" Winter Is  Coming") // Should be "winter-is-coming"