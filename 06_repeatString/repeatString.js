const repeatString = function(string, numberOfRepeat) {
    
    if (numberOfRepeat < 0) return "ERROR";

    let resultString = "";
    for(let i = 0; i < numberOfRepeat; i++){
        resultString += string;
    }

    return resultString;

};

// Do not edit below this line
module.exports = repeatString;
