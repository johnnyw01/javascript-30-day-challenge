//U.S. cities and states population information from 2013. 'endpoint' JSON file found on github.

const endpoint = 'https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json';

const cities = []; //empty array

//Using the Fetch API (Returns a promise. Use the '.then' to access that promise. That promise contains raw data. That raw data needs to be converted into JSON. Converting the data into JSON returns another promise. Use the '.then' to access that promise.)

fetch(endpoint)
  .then(data => data.json())
  .then(data => cities.push(...data)); //the spread method will create individual arguments into the array, instead of creating indivdual items in the array the like standard push method will do. Thus creating an array of a thousand different cities.

//When the user types in the search box, run a function that takes the cities array and filters it down into a subset, where it can then be listen for. 

function findMatches(wordToMatch, cities) {
  return cities.filter(place => {
    //needs to figure out if the city or state matches what was searched
    //This allows you to place a variable into a regular expression 
    const regex = new RegExp(wordToMatch, 'gi'); //'g' is global (looks through the entire string for the match) and 'i' is case insensitive
    return place.city.match(regex) || place.state.match(regex); //'city' and 'state' are a key-value pair within the cities array
  }); //returns a subset of the cities array
}

//This function inserts commas to properly format large numbers, such as population sizes. Found on Stack Overflow.
function numberWithCommas(x) {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
}

//The displayMatches function is called when the user changes the value inside of the search box field
function displayMatches() {
  // console.log(this.value); //This allows you to find the class or classes associated with the search box that user uses so that you can target that element in order make realtime changes to the DOM.
  const matchArray = findMatches(this.value, cities);//pass in the value the user is searching and the cities array
  console.log(matchArray); //console logs the matches (the data)


  const html = matchArray.map(place => { //the .map will call array, but a string is more appropriate, so use the .join method at the end to return a string.

    //format the population numbers and highlight the words searched in the results field by using a regex to match the city and state name and then replace the word that it matches with a span tag with the class 'hl'.
    const regex = new RegExp(this.value, 'gi');
    const cityName = place.city.replace(regex, `<span class ="hl">${this.value}</span>`);
    const stateName = place.state.replace(regex, `<span class ="hl">${this.value}</span>`);

    //Creates the html the user sees on their screen.
    return `
    <li>
    <span class="name">${cityName}, ${stateName}</span>
    <span class="population">${numberWithCommas(place.population)}</span>
    <li>
    `
  }).join("");
  suggestions.innerHTML = html;
}

const searchInput = document.querySelector('.search');
const suggestions = document.querySelector('.suggestions');

searchInput.addEventListener('change', displayMatches); //listen for the change event and then when the user input changes, run the displayMatches function if the user clicks outside of the search field after changing the input
searchInput.addEventListener('keyup', displayMatches);//this does the same as the above, expect it runs after each key press on the keyboard

