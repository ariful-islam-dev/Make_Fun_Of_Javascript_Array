/**
 * @ Title: Array of Anythin
 */

const arr = [10, "Ten", true, getTen, { ten: 10 }, [10, 10]];

function getTen() {
  return 10;
}

// console.log(arr);

// Array of Objects

const favChannels = [
  { name: "Jhonkor Mahbub", url: "http://youtube.com" },
  { name: "Stake learner", url: "http://youtube.com" },
  { name: "Bogurar Binodon", url: "http://youtube.com" },
  { name: "Bogurar Adda", url: "http://youtube.com" },
  { name: "Learn with Sumit", url: "http://youtube.com" },
];

// Array of functions
const sum = (a, b) => a + b;
const sub = (a, b) => a - b;
const times = (a, b) => a * b;
const div = (a, b) => a / b;
const mod = (a, b) => a % b;

const funcs = [sum, sub, times, div, mod];
const a = 10,
  b = 20;

for (let i = 0; i < funcs.length; i++) {
  const result = funcs[i](a, b);
  //   console.log(`[${funcs[i].name}] Result = ${result}`);
}

// Array of Arrays - Multi dimensional Array

const pointTable = [
  [0, 0],
  [3, 5],
  [5, 7],
  [10, 23],
];

// One Dimentional Array
for (let i = 0; i < pointTable.length; i++) {
  //  const element = pointTable[i];
  //   console.log(`Point ${i} - X=${pointTable[i][0]} and y=${pointTable[i][1]}`);

  for (let j = 0; j < pointTable[i].length; j++) {
    const element = pointTable[i][j];
    console.log(`Point ${i} - X=${pointTable[i][j]} and y=${pointTable[i][j]}`);
  }
}

// Two dimentionsal array

const numbers = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];
for (let i = 0; i < numbers.length; i++) {
  for (let j = 0; j < numbers[i].length; j++) {
    console.log(numbers[i][j]);
  }
}

// Matrix Example
const matrixA = [
  [1, 3],
  [1, 0],
  [1, 2],
];

const matrixB = [
  [0, 0],
  [7, 5],
  [2, 1],
];

const matrixSum = (matrixA, matrixB) => {
  const result = [];

  for (let i = 0; i < matrixA.length; i++) {
    const row = [];
    for (let j = 0; j < matrixA[i].length; j++) {
      row.push(matrixA[i][j] + matrixB[i][j]);
    }

    result.push(row)
  }
  return result
};


const matrixC = matrixSum(matrixA, matrixB)
console.log(matrixC);