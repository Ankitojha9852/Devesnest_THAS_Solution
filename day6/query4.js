const show = (arr) => {
  arr.forEach((obj) => {
    console.log(
      `Book:  "${obj.title}"  by:  "${obj.author}"  has Reading status set as:  "${obj.readingStatus}"`
    );
  });
};

var library = [
  { author: "Bill Gates", title: "The Road Ahead", readingStatus: true },
  { author: "Steve Jobs", title: "Walter Isaacson", readingStatus: true },
  {
    author: "Suzanne Collins",
    title: "Mockingjay: The Final Book of The Hunger Games",
    readingStatus: false,
  },
];

show(library);