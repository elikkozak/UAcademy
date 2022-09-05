const AM = require("./code");
// const PM = require("./code");
// const clearLowPriority = require("./code");

// test("add should return sum of a + b", () => {
//   let sum = add(1, 2);
//   expect(sum).toBe(3);
// });

// test("calculateHyp should return square root of squared a + squared b", () => {
//     let hyp = calculateHyp(3, 4);
//     expect(hyp).toBe(5);
//   });

// test("clearLowPriority should return arr with only high priority objects", () => {
//   let arr = clearLowPriority([
//     { text: "dummy1", priority: "HIGH" },
//     { text: "dummy2", priority: "LOW" },

//     { text: "dummy3", priority: "LOW" },
//     { text: "dummy4", priority: "HIGH" },
//   ]);

//   arr.forEach(t => {
//     expect(t.priority).toBe("HIGH")
// })

// });

// test("addPicture should add a picture URL to the pictureURLs array and remove it", function () {
//   //sanity
//   const picManager = new PM();
//   expect(picManager.pictureURLs.length).toBe(0);

//   picManager.addPicture("some_url");
//   expect(picManager.pictureURLs.length).toBe(1); //test
//   expect(picManager.pictureURLs).toContain("some_url"); //double check

//   picManager.removePicture("some_url");
//   expect(picManager.pictureURLs.length).toBe(0); //test
//   expect(picManager.pictureURLs).not.toContain("some_url"); //double check
// });

test("check that for 2 arrays different length the method returns empty obj", function () {
  const arrayManipulator1 = new AM();
  let x = ["food", "item", "location"];
  let y = ["cherry", "Tazmania"];
  expect(arrayManipulator1.manipulate(x, y)).toEqual({});
});

test("check that for 2 arrays sane length the method returns combined obj", function () {
  const arrayManipulator2 = new AM();
  let x = ["food", "item", "location"];
  let y = ["cherry", "lightbulb", "Tazmania"];
  expect(arrayManipulator2.manipulate(x, y)).toEqual({
    food: "cherry",
    item: "lightbulb",
    location: "Tazmania",
  });
});
