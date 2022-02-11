let names = [
  "Ariful Islam Raju",
  "Aysha Mone",
  "Abdullah Al Zarif",
  "Assadullah Al Labib",
];

// How to do it on For loop

// for (let i = 0; i < names.length; i++) {
//   //   console.log(names[i]);
// }

// for (let i = 0; i < names.length; i++) {
//   //   console.log(`${i + 1}: ${names[i]}`);
// }

// // Iterating Logic -> Bussiness Logic

// function reuse(arr, logic) {
//   for (let i = 0; i < arr.length; i++) {
//     // const element = arr[i];
//     logic(arr[i], i, arr);
//   }
// }

// function logic(value, index, arr) {
//   console.log(value, index, arr);
// }

// function log(value){
// console.log(value);
// }

// reuse([]);
// reuse([1, 2, 3], log);
// reuse(["One", "Two"], logic);

function reuse(arr, cb) {
  for (let i = 0; i < arr.length; i++) {
    const element = arr[i];
    cb(arr[i], i, arr);
  }
}

const nums = [1, 2, 3, 4];
let sum = 0;

function sumFunc(v) {
  sum += v;
}
reuse(nums, function (v) {
  sum += v;
});
console.log(sum);

// for name array
reuse(names, (value, index) => {
  console.log(`${index + 1}: ${value}`);
});

// forEach Method
names.forEach((value, index) => {
  console.log(`[Array] ${index + 1} : ${value}`);
});
