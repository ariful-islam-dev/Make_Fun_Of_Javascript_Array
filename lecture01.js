/**
 * @ title: Array is an object
 *
 */

const arr = [1, 2, 3];

console.log(arr.constructor.prototype);
console.log(Array.prototype);
console.log(Object.getOwnPropertyNames(Array.prototype));

Array.prototype.log = function () {
  console.log(this.join(" | "));
};

arr.log();

const names = ["Ariful", "Johirul", "Azizul"];

names.log();

Array.prototype.loop = function (cb) {
  for (let i = 0; i < this.length; i++) {
    cb(this[i], i, this);
  }
};

names.loop((v) => {
  console.log(` My Name Is ${v}`);
});

arr.loop((v) => {
  console.log(` V = ${v} and V*2 = ${v * 2}`);
});
