let todos = [
  {
    id: "123",
    task: "Eat",
    time: "Morning",
  },
  {
    id: "234",
    task: "Code!",
    time: "Afternoon",
  },
  {
    id: "532",
    task: "Coffee Break",
    time: "Evening",
  },
  {
    id: "121",
    task: "Sleep",
    time: "Night",
  },
];

const todo = todos.find((item) => item.time === "Afternoon");
todo.task = "Debugging!!";
// console.log(todos);

let result = [
  { name: "Tamim", score: 89 },
  { name: "Reya", score: 85 },
  { name: "Sakib", score: 96 },
  { name: "Mehedi", score: 90 },
];

const student = result.find((v) => v.score === 96);
// console.log(student);

const ourFind = (arr, cb) => {
  for (let i = 0; i < arr.length; i++) {
    if (cb(arr[i])) {
      return arr[i];
    }
  }
  return undefined;
};

const student2 = ourFind(result, (item) => item.score === 85);

console.log(student2)