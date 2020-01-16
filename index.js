const breedName = process.argv[2];
const { fetchBreedDescription } = require('./breedFetcher');

fetchBreedDescription(breedName, (desc, error) => {
  if (error) {
    console.log('Error fetch details: ',  error);
  } else {
    console.log(desc);
  }
});