/**
 * @title: Example  - Array Flatemap
 */

const arr = [1, 2, 3, 4, 5];
// FlatMap  = Map->Flat
const map = arr.map((x) => [x * 2]);

const flatMap = arr.flatMap((x) => [x * 2]);
const flatMap1 = arr.flatMap((x) => [x, x * 2]);
// console.log(flatMap, flatMap1);

const reduceFlatMap = arr.reduce((acc, cur) => {
  return acc.concat(cur * 2);
}, []);
// console.log(reduceFlatMap);

const reduceFlatMap1 = arr.reduce((acc, cur) => {
  return acc.concat([cur, cur * 2]);
}, []);
console.log(reduceFlatMap1);
