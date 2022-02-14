/**
 * @title : Imaplement Bubble Sort with Callback
 */

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

const bubbleSort = (array, cb) => {
  for (let i = 0; i < array.length - 1; i++) {
    for (let j = 0; j < array.length - 1; j++) {
      if (cb(array[j], array[j + 1]) > 0) {
        let temp = array[j];
        array[j] = array[j + 1];
        array[j + 1] = temp;
      }
    }
  }
};

const arr = [14, 2, 7, 4, 55, 9, 20, 34];
bubbleSort(arr, (a, b) => b - a);
// console.log(arr);

bubbleSort(team, (a, b) => a.id - b.id);

bubbleSort(team, (a, b) => {
  if (a.name > b.name) return 1;
  if (a.name < b.name) return -1;
  return 0;
});
console.log(team);
