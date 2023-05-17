// ## Array Method Challenge some/every/find/findIndex

const people = [
  { name: 'Wes', year: 1988 },
  { name: 'Kait', year: 1986 },
  { name: 'Irv', year: 1970 },
  { name: 'Lux', year: 2015 }
];

const comments = [
  { text: 'Love this!', id: 523423 },
  { text: 'Super good', id: 823423 },
  { text: 'You are the best', id: 2039842 },
  { text: 'Ramen is my fav food ever', id: 123523 },
  { text: 'Nice Nice Nice!', id: 542328 }
];

// Some and Every Checks
// Array.prototype.some() // is at least one person (SOME) 19 or older? //Will check every object in the array
const isAdult = people.some((person) => {
  const currentYear = (new Date()).getFullYear();
  if (currentYear - person.year >= 19) {
    return true;
  }
});

console.log({ isAdult }); //curly brackets around the variable will show you the name of the variable and its value.

// Array.prototype.every() // is everyone (ALL) 19 or older?

const allAdults = people.every((person) => {
  const currentYear = (new Date()).getFullYear();
  if (currentYear - person.year >= 19) {
    return true;
  }
});

console.log({ allAdults });

// Array.prototype.find()
// Find is like filter, but instead returns just the one you are looking for //Does not return a subset of the array like filter does, instead it will only return the first item/object it finds.
// find the comment with the ID of 823423

const comment = comments.find((comment) => {
  if (comment.id === 823423) {
    return console.log(comment.text);
  }
});

console.log(comment);

// Array.prototype.findIndex() //Finds where something is inside of the array
// Find the comment with this ID
// delete the comment with the ID of 823423

const index = comments.findIndex((comment) => {
  if (comment.id === 823423) {
    return comment.id;
  }
});

//comments.splice(index,1); You can use the splice method to delete an item/object from the array

//OR you can use this method that is popular in the redux world //create a new array with the updated infromation

const newComments = [
  //make a copy of the old array // need to use the spread method so that you dont get arrays within arrays
  ...comments.slice(0, index), //start at 0 and go until the index
  ...comments.slice(index + 1) // start at the index and then add 1 to ensure you captured all the data in the array
];

console.log(index);
console.table(comments);
console.table(newComments);

