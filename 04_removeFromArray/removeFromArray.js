const removeFromArray = function() {

    let indexOfItem = NaN;
    text = arguments[0];

    /*/ Can have multiple arguments, they should all be found and deleted
        Iterate through the arguments array and splice everytime something is found
        Check for case and type-sensitivity
        If not found, just move on
    /*/

    for(let startNumber = 1; startNumber < arguments.length; startNumber++){
        indexOfItem = text.indexOf(arguments[startNumber]);

        if(text[indexOfItem] === arguments[startNumber]){
            text.splice(indexOfItem, 1);
        }
    }

    return text;
};

// Do not edit below this line
module.exports = removeFromArray;
