const fibonacci = function(number) {
    if(number < 0){
        return "OOPS";
    }

    return fib(+number);
};

function fib(num){
    if(num < 2){
        return num;
    }

    return fib(num - 1) + fib(num - 2)
};

// Do not edit below this line
module.exports = fibonacci;
