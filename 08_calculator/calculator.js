const add = function() {
  const numbers = Array.from(arguments);

  /*/ for(let i = 0; i <= numbers.length; i++){
    console.log(numbers[i]);
  } /*/

  let addTotal = numbers.reduce((total, item) => {
    return total + Number(item);
  }, 0);
  console.log(addTotal);
  return addTotal;
};

const subtract = function() {
	
};

const sum = function(numbers) {

  /*/ for(let i = 0; i <= numbers.length; i++){
    console.log(numbers[i]);
  } /*/

  let addSum = numbers.reduce((total, item) => {
    console.log(Number(item));

    return Number(total) + Number(item);
  }, 0);

  console.log(addSum);
  return addSum;
};

const multiply = function() {

};

const power = function() {
	
};

const factorial = function() {
	
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

sum([1,3,5]);