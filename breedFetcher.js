const request = require('request');


const fetchBreedDescription = function(breedName, callback) {
  let catUrl = `https://api.thecatapi.com/v1/breeds/search?q=${breedName}`

  request(catUrl, (error, response, body) => {
    
    if (error) { 
      callback(`Breed not found: ${error.message}`, null);
    } else if (response.statusCode !== 200) {
      callback(`Breed not found`, null);
    } else {
    let catContent = JSON.parse(body);
      if (catContent.length) {
        callback(null, catContent[0].description);
      } else {
        callback(`Breed not found`, null);
      }
    }      
      
  });

};

module.exports = { fetchBreedDescription };

// fetchBreedDescription("Siberian", console.log());

