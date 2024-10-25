const { fetchBreedDescription } = require('./breedFetcher');

//get breed name from command line arugments
const breedName = process.argv[2];

fetchBreedDescription(breedName, (error, description) => {
  if (error) {
    console.log("Error fetch details:", error);
  } else {
  console.log(desc);
  }
});
