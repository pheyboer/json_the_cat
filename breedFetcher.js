const needle = require('needle');

// API endpoint to search breed information
const apiUrl = 'https://api.thecatapi.com/v1/breeds/search';



//search for breed name as part of the query parameter
const fetchBreedDescription = function(breedName, callback) {
  needle.get(`${apiUrl}?q=${breedName}`, (error, response, body) => {
    if (error) {
      console.log('error:', error); // Print the error if one occurred
      if (response) {
        console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
        //console.log('body:', body); // Print the HTML for the homepage.
        //console.log(typeof body);
      }
      return;
    }
  
    if (Array.isArray(body) && body.length > 0) {
      const firstBreed = body[0];
      console.log(`The first breed is: ${firstBreed.name}: ${firstBreed.description}`);
    } else {
      console.log(`Breed not found: "${breedName}"`);
    }
  });
};

module.exports = { fetchBreedDescription };