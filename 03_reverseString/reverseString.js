const reverseString = function(text) {

    let reversedText = "";
    let loopTimes = text.length-1;

    for(loopTimes; loopTimes >= 0; loopTimes--){
        reversedText += text[loopTimes];
    }

    return reversedText;
};

// Do not edit below this line
module.exports = reverseString;
