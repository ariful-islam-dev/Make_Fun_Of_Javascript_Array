/**
 * @ title Inspect Nested Objcets
 */

const js = {
  name: "Javascript: All You Need to Know",
  authod: {
    name: "HM Nayem",
    email: "hasan.me.nayem@gmail.com",
  },
  contents: {
    video: {
      count: 222,
    },
  },
};

const node = {
  name: "Drive into NodeJS",
  authod: {
    name: "HM Nayem",
    email: "hasan.me.nayem@gmail.com",
  },
  contents: {
    video: {
      count: 234,
    },
  },
};

const react = {
  name: "Understand React Core Feature",
  authod: {
    name: "HM Nayem",
    email: "hasan.me.nayem@gmail.com",
  },
  contents: {
    video: {
      count: 125,
    },
    article: {
      count: 15,
    },
    quiz: {
      count: 10,
    },
  },
};

const inspectObj= (obj, path, returnValue = 0) => {
  // const path = "contents.article.count";
  return path.split(".").reduce((acc, cur) => {
    if (acc) {
      return acc[cur];
    }
    return returnValue;
  }, obj);
};
const courses = [js, node, react];

courses.forEach((course) => {

  const countVideo = inspectObj(course, 'contents.video.count')
  const countArticle = inspectObj(course, 'contents.article.count')
  const countQuiz = inspectObj(course, 'contents.quiz.count')

  console.log(`Total Video = ${countVideo}, Article = ${countArticle}, and Quiz = ${countQuiz}`);
});
