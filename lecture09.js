/**
 * @Title : findIndex Method in Javascript
 */

let myArray = [1, 3, 78, 39, 22, 34, 2, 11, 30, 567, 19, 90];

let todos = [
  {
    name: "Project 1",
    isDone: false,
  },
  {
    name: "Project 2",
    isDone: true,
  },
  {
    name: "Project 3",
    isDone: false,
  },
  {
    name: "Project 4",
    isDone: true,
  },
  {
    name: "Project 5",
    isDone: false,
  },
  {
    name: "Project 6",
    isDone: true,
  },
  {
    name: "Project 7",
    isDone: true,
  },
];

const index1 = myArray.findIndex((item, i) => item === 12);
const index2 = todos.findIndex((item)=> item.name === 'Project 5')

console.log(index2);
