/**
 * @title : Keys, Values & Enntries
 */

//Keys

const array = ["a", "b", "c"];

const keys = array.keys();
const values = array.values();
const entries = array.entries();

console.log(keys);
console.log(values);
console.log(entries);

const loop = (it, name) => {
  for (const v of it) {
    console.log(`[${name} - ${v}]`);
  }
};

loop(keys, "KEY");
loop(values, "VALUE");
loop(entries, "ENTRY");

const arr = [3, 5, 7, 9];

for (const v of arr) {
  console.log(v);
}

console.log(arr, 'ARRAY');
