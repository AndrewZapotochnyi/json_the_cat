const { fetchBreedDescription } = require('./breedFetcher');

let argumentArray = process.argv.slice(2);
let breedName = argumentArray[0]

if (argumentArray[1]) {
  breedName = argumentArray[0] + " " + argumentArray[1]
}

fetchBreedDescription(breedName, (error, desc) => {
  if (error) {
    console.log('Error fetch details:', error);
  } else {
    console.log(desc);
  }
});