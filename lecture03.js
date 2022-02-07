const arr = [47, 5,105,  78, 63, 99, 14, 39];
const n = arr[3];
const m = arr[2];
const x = 1;
const y = 0;

// console.log(m, n, arr[x], arr[y], arr[x]+arr[y], arr[x+y+1]);

// Simple Traverse
for (let i = 0; i < arr.length; i++) {
//   console.log(arr[i]);
}

// Array Sum & Avg
/**
 * sum = 0;
 * sum= 0+1=1;
 * sum = 1+2=3
 */
let sum = 0;
for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
    
}
console.log(sum);
console.log(sum/arr.length);

// Find Large Number

let largestNumber = arr[0];
for (let i = 1; i < arr.length; i++) {
    if(arr[i] >largestNumber){
        largestNumber = arr[i]
    }
    
}

console.log(largestNumber);