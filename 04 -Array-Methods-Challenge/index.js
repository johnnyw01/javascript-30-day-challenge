// Get your shorts on - this is an array workout!
// ## Array Cardio Day 1

// Some data we can work with

const inventors = [
  { first: 'Albert', last: 'Einstein', year: 1879, passed: 1955 },
  { first: 'Isaac', last: 'Newton', year: 1643, passed: 1727 },
  { first: 'Galileo', last: 'Galilei', year: 1564, passed: 1642 },
  { first: 'Marie', last: 'Curie', year: 1867, passed: 1934 },
  { first: 'Johannes', last: 'Kepler', year: 1571, passed: 1630 },
  { first: 'Nicolaus', last: 'Copernicus', year: 1473, passed: 1543 },
  { first: 'Max', last: 'Planck', year: 1858, passed: 1947 },
  { first: 'Katherine', last: 'Blodgett', year: 1898, passed: 1979 },
  { first: 'Ada', last: 'Lovelace', year: 1815, passed: 1852 },
  { first: 'Sarah E.', last: 'Goode', year: 1855, passed: 1905 },
  { first: 'Lise', last: 'Meitner', year: 1878, passed: 1968 },
  { first: 'Hanna', last: 'Hammarström', year: 1829, passed: 1909 }
];

const people = [
  'Bernhard, Sandra', 'Bethea, Erin', 'Becker, Carl', 'Bentsen, Lloyd', 'Beckett, Samuel', 'Blake, William', 'Berger, Ric', 'Beddoes, Mick', 'Beethoven, Ludwig',
  'Belloc, Hilaire', 'Begin, Menachem', 'Bellow, Saul', 'Benchley, Robert', 'Blair, Robert', 'Benenson, Peter', 'Benjamin, Walter', 'Berlin, Irving',
  'Benn, Tony', 'Benson, Leana', 'Bent, Silas', 'Berle, Milton', 'Berry, Halle', 'Biko, Steve', 'Beck, Glenn', 'Bergman, Ingmar', 'Black, Elk', 'Berio, Luciano',
  'Berne, Eric', 'Berra, Yogi', 'Berry, Wendell', 'Bevan, Aneurin', 'Ben-Gurion, David', 'Bevel, Ken', 'Biden, Joseph', 'Bennington, Chester', 'Bierce, Ambrose',
  'Billings, Josh', 'Birrell, Augustine', 'Blair, Tony', 'Beecher, Henry', 'Biondo, Frank'
];

// Array.prototype.filter()
// 1. Filter the list of inventors for those who were born in the 1500's

const inventors1500s = inventors.filter((inventor) => {
  if (inventor.year >= 1500 && inventor.year < 1600) {
    return true; //keep it!
  }
});
console.table(inventors1500s);


// Array.prototype.map()
// 2. Give us an array of the inventors first and last names

const fullNames = inventors.map((inventor) => {
  return `${inventor.first} ${inventor.last}`
}); console.log(fullNames);

// Array.prototype.sort()
// 3. Sort the inventors by birthdate, oldest to youngest

const inventorsAgeSorted = inventors.sort((inventorA, inventorB) => {
  // if (inventorA.year > inventorB.year) {
  //   return 1;
  // } else {
  //   return -1
  // }
  return inventorA.year - inventorB.year;
});

console.table(inventorsAgeSorted);


// Array.prototype.reduce()
// 4. How many years did all the inventors live all together?

const inventorsAgeSum = inventors.reduce((total, inventor) => {
  return total + (inventor.passed - inventor.year);
}, 0);
console.log(inventorsAgeSum);

// 5. Sort the inventors by years lived

const yearsLived = inventors.sort((inventorA, inventorB) => {
  const totalYearsLivedA = inventorA.passed - inventorA.year;
  const totalYearsLivedB = inventorB.passed - inventorB.year;
  //   if (totalYearsLivedA > totalYearsLivedB) {
  //     return -1;
  //   }
  //   else if (totalYearsLivedA < totalYearsLivedB) {
  //     return 1;
  //   }
  //   else {
  //     return 0
  //   }
  // });
  return totalYearsLivedA > totalYearsLivedB ? -1 : 1;
});
console.table(yearsLived);


// 6. create a list of Boulevards in Paris that contain 'de' anywhere in the name
// https://en.wikipedia.org/wiki/Category:Boulevards_in_Paris

//Must perform this in the browser's console.

//Step1: Open the url in a new window.

//Step2: Open the console and find the DOM elements with the corresponding information on the page.
// const category = document.querySelector('.mw-category'); //gets all the elements with links to the Boulevards.

//Step3:
// const links = Array.from(category.querySelectorAll('a')); //converts the returned NodeList of all the links within the category variable into an array.

//Step4:
// const de = links.map(link => link.textContent).filter(streetName => streetName.includes('de'));//.map returns an array of street names by targeting the data from the 'textContent' area of the object. .filter returns only the street names with a 'de' that are in the array.

// 7. sort Exercise
// Sort the people alphabetically by last name

const alphabeticallySorted = people.sort((currentPerson, nextPerson) => {
  const [currentLast, currentFirst] = currentPerson.split(', ');//converts the string values in the people array into a individual (seperate) first and last name variable by splitting at the ', ' (known as 'destructuring)
  const [nextLast, nextFirst] = nextPerson.split(', ');

  // console.log(currentLast, currentFirst);
  // console.log(nextLast, nextFirst);

  // if (currentLast > nextLast) {
  //   return 1;
  // } else if (currentLast < nextLast) {
  //   return -1;
  // }

  return currentLast > nextLast ? 1 : -1;
});

console.log(alphabeticallySorted);


// 8. Reduce Exercise
// Sum up the instances of each of these
const data = ['car', 'car', 'truck', 'truck', 'bike', 'walk', 'car', 'van', 'bike', 'walk', 'car', 'van', 'car', 'truck', 'airplane'];

const eachInstance = data.reduce((obj, item) => {
  // console.log(item);
  if (!obj[item]) {
    obj[item] = 0;
  }
  obj[item]++; //counts how many times the item in the object occurs.
  return obj;
}, {}); //the empty object at the end of the syntax is necessary in order to get started(must start with an object) looping through the array.

console.log(eachInstance);