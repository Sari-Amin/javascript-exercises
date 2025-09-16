const add = function(numberOne, numberTwo) {
	return +numberOne + +numberTwo;
};

const subtract = function(numberOne, numberTwo) {
	return +numberOne - +numberTwo;
};

const sum = function(array) {

	return array.reduce((total, currentNumber) =>
    total += currentNumber, 0);

};

const multiply = function(array) {
  return array.reduce((product, currentNumber) =>
    product *= currentNumber, 1);
};

const power = function(base, exponent) {
	// return base ** exponent;
  return Math.pow(base, exponent);
};

const factorial = function(number) {
	let factorialOfNumber = 1;
  for(let i = number; i > 1; i--){
    factorialOfNumber *= i;
  }

  return factorialOfNumber
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
