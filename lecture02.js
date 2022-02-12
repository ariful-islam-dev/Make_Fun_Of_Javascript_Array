/**
 * @title : Hands on Reduce
 */

let numbers = [1, 2, 3, 4, 5];
//Implementing Sum;
function reduce(accumulator, currentValue) {
  return accumulator + currentValue;
}

const sum = numbers.reduce(reduce);
// console.log(sum);

// Implementing Average;

const avg = numbers.reduce((acc, cur, index, arr) => {
  acc += cur;

  if (index === arr.length - 1) {
    return acc / arr.length;
  }
  return acc;
});


console.log(avg);