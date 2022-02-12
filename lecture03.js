/**
 * @title : Anatomy of Reduce Method
 */

const arr = [1, 2, 3, 4, 5];

const sum = arr.reduce((acc, cur, index, arr) => {
  console.log(index, acc, cur);
  return acc + cur;
}, 0);

console.log(sum);
