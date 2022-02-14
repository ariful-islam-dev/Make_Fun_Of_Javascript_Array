let myArray = [1, 3, 78, 39, 22, 34, 2, 11, 30, 567, 19, 90];

const team = [
  { id: 12, name: "Zarif" },
  { id: 9, name: "Labib" },
  { id: 8, name: "Arif" },
  { id: 4, name: "Johir" },
  { id: 11, name: "Aziz" },
  { id: 6, name: "Jamil" },
  { id: 7, name: "Asia" },
  { id: 3, name: "Aysha" },
  { id: 2, name: "Rupa" },
  { id: 10, name: "Sohag" },
  { id: 5, name: "Sohraf" },
  { id: 1, name: "Halima" },
];

const linearSeach = (arr, key) => {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === key) {
      return i;
    }
  }
  return -1;
};

const s1 = linearSeach(myArray, 2);
// console.log(s1);

const linearSeachCB = (arr, cb) => {
  for (let i = 0; i < arr.length; i++) {
    if (cb(arr[i])) {
      return i;
    }
  }
  return -1;
};

const s2 = linearSeachCB(team, (item) => item.name === "Sohraf");
const s3 = linearSeachCB(team, (item) => item.id === 4);

console.log(s3);
