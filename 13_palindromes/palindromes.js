const palindromes = function (string) {
    let alphanumericOnlyString = "";
    for(let char of string.toLowerCase()){
        if (/[a-z | 0-9]/.test(char) && char.trim() !== ""){
            alphanumericOnlyString += char;
        }
    }
    return alphanumericOnlyString === alphanumericOnlyString.split("").reverse().join("");
};

// Do not edit below this line
module.exports = palindromes;
