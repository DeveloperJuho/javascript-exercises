const repeatString = function(text, repeats) {
    let concatText = "";

    if(repeats >= 0){

        for(let i = 0; i < Number(repeats); i++){
            concatText += text;
        }

        return concatText;
    }

    else return "ERROR";  
};

// Do not edit below this line
module.exports = repeatString;
