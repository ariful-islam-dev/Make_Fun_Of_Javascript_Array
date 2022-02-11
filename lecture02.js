let names = [
  "Howlader Ariful Islam Raju",
  "Howlader Aysha Mone",
  "Howlader Abdullah Al Zarif",
  "Howlader Assadullah Al Labib",
  "Howlader Sadiqul Islam Jamil",
];

// Extract Length -> [];
// Get UpperCarse Version -> [];
// Get Sliced Version -> []

// why us map

// function reuse(arr, cb) {
//   for (let i = 0; i < arr.length; i++) {
//     cb(arr[i], i, arr);
//   }
// }

// // Example One
// const result1 = [];
// reuse(names, (value) => {
//   result1.push(value.length);
// });

// console.log(result1);
// // Example Two

// const result2 = [];
// reuse(names, (value) => {
//   result2.push(value.toUpperCase());
// });

// console.log(result2);
// // Example three

// const result3 = [];
// reuse(names, (value) => {
//   result3.push(value.substr(9));
// });

// console.log(result3);

function reuseAndMap(arr, cb) {
  const result = [];
  for (let i = 0; i < arr.length; i++) {
    const r = cb(arr[i], i, arr);
    result.push(r);
  }
  return result;
}

const length = reuseAndMap(names, (value) => value.length);
const uppers = reuseAndMap(names, (value) => value.toUpperCase());
const sliced = reuseAndMap(names, (value) => value.substr(9));

// console.log(length, uppers, sliced);

const length1 = names.map((value) => value.length);
const uppers1 = names.map((value) => value.toUpperCase());
const sliced1 = names.map((value) => value.substring(9));

// console.log(length1, uppers1, sliced1);

// Real Life Example
const studentArray = [
  {
    id: 1,
    name: "Ariful Islam Raju",
    gpa: 2.99,
    email: "arifulislam@gmail.com",
  },
  { id: 2, name: "Aysha Mone", gpa: 4.19, email: "ayshaArif@gmail.com" },
  { id: 3, name: "Abdullah Al Zarif", gpa: 5.0, email: "zrif@gmail.com" },
  { id: 4, name: "Asadullah Al Labib", gpa: 5.0, email: "labib@gmail.com" },
  { id: 5, name: "Sadiqul Islam Jamil", gpa: 5.0, email: "jamil@gmail.com" },
];

const mappedStudents = studentArray.map((value) => {
  return {
    ...value,
    title: `Hello ${value.name} - Your result has been published`,
    msg: `Hi ${value.name}, Your reault has been published ande You have get ${
      value.gpa
    }, You have ${value.gpa >= 3 ? "Passed" : "Failed"}`,
  };
});

console.log(mappedStudents);
