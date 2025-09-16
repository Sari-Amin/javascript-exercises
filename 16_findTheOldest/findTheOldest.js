const findTheOldest = function(array) {
    function compare(a, b){
        let aAge = 0;
        let bAge = 0;
        if (a.yearOfDeath === undefined){
            aAge = 2025 - a.yearOfBirth; 
        }else{
            aAge = a.yearOfDeath - a.yearOfBirth;
        }
        if (b.yearOfDeath === undefined){
            bAge = 2025 - b.yearOfBirth; 
        }else{
            bAge = b.yearOfDeath - b.yearOfBirth;
        }

        return bAge - aAge;
    }

    array.sort(compare);

    return array[0];
};

// Do not edit below this line
module.exports = findTheOldest;
