/**
 * @Title : Update Existing Elements
 */

// Easy One
const numbers = [1, 2, 7, 4, 5];
numbers[2] = 3;
console.log(numbers);


// Array of Objects
const students = [
    {id: 1, name: "Ariful"},
    {id: 2, name: "Aysha"},
    {id: 3, name: "Zarif"},
    {id: 4, name: "Labib"},
    {id: 5, name: "Jamil"},
];

const givenID = 3;
const updatedName = "Assadullah Al Labib";

for (let i = 0; i < students.length; i++) {
    if(givenID === students[i].id){
        students[i].name = updatedName;
        break
    }
    
}

console.log(students);