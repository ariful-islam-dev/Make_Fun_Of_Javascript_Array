/**
 * @Title : Combining Data from Different Sources
 */

const courses = [
  {
    id: "OC1",
    name: "Javascript All You Need to Know",
    topic: "javascript",
    price: 2599,
  },
  {
    id: "OC2",
    name: "Drive into NodeJS",
    topic: "nodejs",
    price: 2599,
  },
  {
    id: "OC3",
    name: "Understand ReactJS Core Features",
    topic: "javascript",
    price: 1799,
  },
  {
    id: "OC4",
    name: "Understand ReactJS Advanced Features",
    topic: "react",
    price: 4099,
  },
  {
    id: "OC5",
    name: "Add to Cart - MERN Project",
    topic: "mern",
    price: 1799,
  },
  {
    id: "OC6",
    name: "Make Fun Of Javascript Array",
    topic: "mern",
    price: 1799,
  },
];

const discountedPrice = {
  OC1: 2099,
  OC2: 2099,
  OC3: 1399,
  OC4: 2099,
  OC5: 3599,
  OC6: 1399,
};

const updateCourse = courses.reduce((acc, cur) => {
  console.log(discountedPrice[cur.id]);
  if (discountedPrice[cur.id]) {
    cur.discountedPrice = discountedPrice[cur.id];
  } else {
    cur.discountedPrice = 0;
  }
  acc.push(cur);
  return acc;
}, []);

console.log(updateCourse);
