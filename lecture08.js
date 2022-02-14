/**
 * @title : Implement Binary Seach
 *
 */

let array = [12, 3, 1, 32, 65, 78, 98, 90, 100];

const binarySeach = (arr, key) => {
  let lowest = 0;
  let height = arr.length - 1;

  while (lowest <= height) {
    let mid = Math.floor((lowest + height) / 2);

    if (arr[mid] === key) return mid;

    if (arr[mid] < key) lowest = mid + 1;

    if (arr[mid] > key) height = mid - 1;
  }
  return -1;
};

array.sort((a, b) => a - b);

console.log(array);

const index = binarySeach(array, 12);

console.log(index);
