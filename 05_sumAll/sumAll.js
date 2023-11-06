const sumAll = function(firstNumber, lastNumber) {
    let sumOfNumbers = 0;
    let smallerNumber = 0;

    if(typeof(firstNumber) !== "number" || typeof(lastNumber) !== "number") return "ERROR";

    if(firstNumber < 0 || lastNumber < 0) return "ERROR";

    if(lastNumber < firstNumber){
        smallerNumber = lastNumber;
        lastNumber = firstNumber;
        firstNumber = smallerNumber;
    }

    for(firstNumber; firstNumber <= lastNumber; firstNumber++){
        sumOfNumbers += firstNumber;
    }
    
    return sumOfNumbers;
};

// Do not edit below this line
module.exports = sumAll;
