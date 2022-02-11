const productReview = [
  { name: "Ariful Islam", response: "positive", ratings: "5" },
  { name: "Johirul Islam", response: "positive", ratings: "4" },
  { name: "Sakib Al Hassan", response: "negative", ratings: "4" },
  { name: "Azizul Islam", response: "positive", ratings: "3" },
];
const positive = productReview.every((value) => value.ratings > 3);
// console.log(positive);

if(positive){
    console.log('100% Positive Reviews');
}else{
    console.log('Some Customer not satified');
}

const testRunsInAsingleMathch = [
  { name: "DPMD Jayawardene", runs: 374 },
  { name: "BC Lara", runs: 375 },
  { name: "ML Mayden", runs: 380 },
  { name: "BC Lara", runs: 400 },
];

const atleastOne = testRunsInAsingleMathch.some(value=>value.runs>= 400);
console.log(atleastOne);