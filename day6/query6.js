var library = [
  { title: "The Road Ahead", author: "Bill Gates", libraryID: 1254 },
  { title: "Walter Isaacson", author: "Steve Jobs", libraryID: 4264 },
  {
    title: "Mockingjay: The Final Book of The Hunger Games",
    author: "Suzanne Collins",
    libraryID: 3245,
  },
];

// sorting based on tittle

library.sort((a, b) => {
  if (a.title < b.title) return -1;
  else if (a.title > b.title) return 1;
  else return 0;
});

console.table(library);

// sorting based on author

library.sort((a, b) => {
  if (a.author < b.author) return -1;
  else if (a.author > b.author) return 1;
  else return 0;
});

console.table(library);