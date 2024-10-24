const needle = require('needle');

// API endpoint to search breed information
const apiUrl = 'https://api.thecatapi.com/v1/breeds/search';

needle.get(apiUrl, (error, response, body) => {
  console.log('error:', error); // Print the error if one occurred
  console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
  console.log('body:', body); // Print the HTML for the homepage.
  console.log(typeof body);
});