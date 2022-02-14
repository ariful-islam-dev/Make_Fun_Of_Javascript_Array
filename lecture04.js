/**
 * @Title : How to Work with Sort Method
 */

// let numbers = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];
// Will Not work perfectly
let numbers = [14, 2, 7, 4, 55, 9, 20, 34, 3, 5, 1, 6, 7];

numbers.sort((a, b) => a - b);

// console.log(numbers);

numbers.sort((a, b) => b - a);
// console.log(numbers);

let strings = ["apple", "Cat", "Ball", "Apple"];

strings.sort((a, b) => {
  a = a.toLowerCase();
  b = b.toLowerCase();
  if (a > b) return 1;
  if (b > a) return -1;
  return 0;
});

// console.log(strings);

let strings2 = ["Apple", "Ant", "Ball", "Cat"];
strings2.sort((a, b) => {
  if (a > b) return 1;
  if (b > a) return -1;
});

// console.log(strings2);

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

// Sort By Id

team.sort((a, b) => {
  if (a.id < b.id) return 1;
  if (b.id < a.id) return -1;
  return 0;
});

// Sort By Name

team.sort((a, b) => {
  if (a.name > b.name) return 1;
  if (b.name > a.name) return -1;
  return 0;
});

console.log(team);
