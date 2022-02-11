const studentArray = [
  {
    id: 1,
    name: "Ariful Islam Raju",
    gpa: 2.99,
    email: "arifulislam@gmail.com",
    due: true,
    dueAmount: 10000,
  },
  {
    id: 2,
    name: "Aysha Mone",
    gpa: 2.75,
    email: "ayshaArif@gmail.com",
    due: false,
    dueAmount: 0,
  },
  {
    id: 3,
    name: "Abdullah Al Zarif",
    gpa: 5.0,
    email: "zrif@gmail.com",
    due: true,
    dueAmount: 13000,
  },
  {
    id: 4,
    name: "Asadullah Al Labib",
    gpa: 5.0,
    email: "labib@gmail.com",
    due: false,
    dueAmount: 9950,
  },
  {
    id: 5,
    name: "Sadiqul Islam Jamil",
    gpa: 5.0,
    email: "jamil@gmail.com",

    due: true,
    dueAmount: 11000,
  },
];

// now we want to filter the student who has GPA under
const lowGpa = studentArray.filter((value) => value.gpa < 3);
// console.log(lowGpa);
// and send  then inspiring message to study more or try harder
const messageTemplate = studentArray.map((value) => {
  return {
    ...value,
    title: `Hello ${value.name} - Your result has been published`,
    msg: `Hi ${value.name}, Your reault has been published ande You have get ${
      value.gpa
    }, You have ${value.gpa >= 3 ? "Passed" : "Failed"}. ${
      value.gpa <= 3 && "I want to more better result at next time"
    }`,
  };
});
// console.log(messageTemplate);

// due amount
const dueStudents = messageTemplate.filter((value) => value.due === true);
console.log(dueStudents);