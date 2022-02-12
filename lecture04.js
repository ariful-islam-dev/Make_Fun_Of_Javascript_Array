/**
 * @title: Example Array Flatten
 */

const nestedArray = [[1, 2], 3, [4, 5], [6]];

// [1,2,3,4,5];

// Array Flat Mathod]
const flatArray1 = nestedArray.flat();
console.log(flatArray1);

// We can do the same using reduce mehtod

const flatArray2 = nestedArray.reduce((acc, cur) => {
  return acc.concat(cur);
}, []);

console.log(flatArray2);
