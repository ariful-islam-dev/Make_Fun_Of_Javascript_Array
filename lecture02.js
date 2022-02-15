const arr = [1, 2, 3, 4];

const arr2 = [...arr];

arr2.push(5);

// console.log(arr2, arr);

// Shallow Copy vs Deep Copy

const points = [
  [10, 12],
  [2, 55],
  [67, 31],
];

const pointsCopy = [...points];
pointsCopy.push([1, 2]);
// pointsCopy[0][0] = 100;
// pointsCopy[0][1] = 120;
// console.log(points);
// console.log(pointsCopy);

// [].map (Shallow Copy )
const arr4 = arr.map((x) => x);
console.log(arr === arr4);

// [].filter (Shallow Copy)
const arr5 = arr.filter(() => true);

console.log(arr5 === arr);

// [].slice (Shallow Copy)
const arr6 = arr.slice();
console.log(arr6);


// [].concate (shallow Copy);
const arr7 = arr.concat()
console.log(arr7);

// Array.from() (Shallow copy)
const arr8 = Array.from(arr);
console.log(arr8);

// JSON.stringify and JSON.parse [Deep Copy]

const pointsDeepCopy = JSON.parse(JSON.stringify(points));
pointsDeepCopy[0][0] = 100;
pointsDeepCopy[0][1] = 120;
console.log(points);
console.log(pointsDeepCopy);
