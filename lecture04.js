const studentArray = [
  {
    id: 1,
    name: "Ariful Islam Raju",
    gpa: 2.99,
    email: "arifulislam@gmail.com",
  },
  { id: 2, name: "Aysha Mone", gpa: 2.19, email: "ayshaArif@gmail.com" },
  { id: 3, name: "Abdullah Al Zarif", gpa: 5.0, email: "zrif@gmail.com" },
  { id: 4, name: "Asadullah Al Labib", gpa: 5.0, email: "labib@gmail.com" },
  { id: 5, name: "Sadiqul Islam Jamil", gpa: 5.0, email: "jamil@gmail.com" },
];

const emailTemplate = studentArray.filter(value=>value.gpa<3).map(value=>{
    return {
        ...value,
        title: `Resutl Published`,
        msg: 'You are failed'
    }
})
console.log(emailTemplate);