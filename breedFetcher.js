const needle = require('needle');

// API endpoint to search breed information
const apiUrl = 'https://api.thecatapi.com/v1/breeds/search';

//get breed name from command line arugments
const breedName = process.argv[2];


needle.get(`${apiUrl}?q=${breedName}`, (error, response, body) => {
  //search for breed name as part of the query parameter
  console.log('error:', error); // Print the error if one occurred
  console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
  console.log('body:', body); // Print the HTML for the homepage.
  console.log(typeof body);

  if (Array.isArray(body) && body.length > 0) {
    const firstBreed = body[0];
    console.log(`The first breed is: ${firstBreed.name}: ${firstBreed.description}`);
  } else {
    console.log(`Breed not found: "${breedName}"`);
  }
});