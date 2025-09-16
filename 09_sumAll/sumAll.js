const sumAll = function(numberOne, numberTwo) {
    if (!Number.isInteger(numberOne) 
        || !Number.isInteger(numberTwo)
        || numberOne < 0 || numberTwo < 0
        ) {
            return "ERROR";
        }

    if (numberOne > numberTwo){
        const temp = numberTwo;
        numberTwo = numberOne;
        numberOne = temp;
    }
    
    // used formula to add consecutive numbers

    return (numberTwo * (numberTwo + 1) / 2 - (numberOne * (numberOne + 1) / 2) + numberOne);
};

// Do not edit below this line
module.exports = sumAll;
