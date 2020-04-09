const request = require('request');
const fs = require('fs');

let argumentArray = process.argv.slice(2);
let catName = argumentArray[0]

if (argumentArray[1]) {
  catName = argumentArray[0] + " " + argumentArray[1]
}

let catUrl = `https://api.thecatapi.com/v1/breeds/search?q=${catName}`


request(catUrl, (error, response, body) => {
  let catContent = JSON.parse(body);
    try {
      console.log(catContent[0].description);
    }
    catch (error) {
      console.log(`Breed not found: ${error.message}`);
    }  
});




