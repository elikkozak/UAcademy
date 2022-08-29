const raiseSalary = function (person) {
  if (person.goodPerformance) {
    person.salary += 300;
  }
};

let people = [
  { salary: 1300, goodPerformance: false },
  { salary: 1500, goodPerformance: true },
  { salary: 1200, goodPerformance: true },
  { salary: 1700, goodPerformance: false },
  { salary: 1600, goodPerformance: true },
];

people.forEach((person) => raiseSalary(person));
people.forEach((p) => console.log(p.salary));

let messagesFromDad = [
  "HI HONEY",
  "HOW WAS SCHOOL??",
  "DID YOU EAT TODAY?",
  "I CAN'T FIND THE REMOTE CONTROL",
];
messagesFromDad.map((string) => string.toLowerCase());

let posts = [
  {
    id: 0,
    text: "I'm not here",
    comments: [{ id: 0, text: "support that" }],
  },
  {
    id: 1,
    text: "Find me",
    comments: [
      { id: 0, text: "here I am" },
      { id: 1, text: "rock you like a hurricane" },
      { id: 2, text: "dum dum" },
    ],
  },
  {
    id: 2,
    text: "Where's waldo anyway",
    comments: [
      { id: 0, text: "who's waldo" },
      { id: 1, text: "he's called Effi" },
    ],
  },
  {
    id: 3,
    text: "Poof",
    comments: [{ id: 0, text: "like magic" }],
  },
];

const findById = (id) => posts.find((p) => p.id === id);

function findCommentByID(postID, commentID) {
  const ret = posts.find(
    (p) => p.id === postID && p.comments.find((c) => c.id === commentID)
  );
  return ret;
}

// const findCommentById = (postID, commentID) => {
//     let post = findById(postID)
//     return post.comments.find(c => c.id == commentID)
// }

findCommentByID(1, 1);

let movies = [
  { title: "Dareangel", studio: "Marvel", year: 2023 },
  { title: "Batterfly", studio: "Fox", year: 2021 },
  { title: "League of Ordinary People", studio: "Blizzard", year: 2025 },
  { title: "Thor: Ragnarok", studio: "Marvel", year: 2017 },
];

movies.some((m) => m.studio === "Marvel")
  ? console.log("Let’s go watch some movies")
  : console.log("Let’s stay home");

movies.every((m) => m.year > 2020)
  ? console.log("Futuristic stuff")
  : console.log("Yawn");
