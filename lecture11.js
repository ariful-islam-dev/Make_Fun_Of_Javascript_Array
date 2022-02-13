/**
 * @title: Map and Filter using Reduce
 */

const numbers = [1, 2, 3, 4, 5];

// Mapped

const squares = numbers.reduce((acc, cur) => {
  acc.push(cur * cur);
  return acc;
}, []);

console.log(squares);
//Filter

const odds = numbers.reduce((acc, cur) => {
  if (cur % 2 === 1) {
    acc.push(cur);
  }
  return acc;
}, []);

console.log(odds);

//Big Array

const bigArr = [];
for (let i = 0; i < 500000; i++) {
  bigArr.push(i);
}

// const oddSquare = bigArr.reduce((acc, cur)=>{
//     if(cur % 2 === 1){
//         acc.push(cur*2)
//     }
// return acc
// }, [])

// Map and Filter Chain - Time Efficiency
console.time("Both");

const oddSquare = bigArr.filter((v) => v % 2 === 1).map((v) => v * 2);

console.log(oddSquare);
console.timeEnd("Both");

// Map and Filter Reduce - time Efficiency
console.time("Reduce");

const oddSquareReduce = bigArr.reduce((acc, cur) => {
  if (cur % 2 === 1) {
    acc.push(cur *2);
  }
  return acc
}, []);

console.log(oddSquareReduce);
console.timeEnd("Reduce");
