const request = require('request');


const fetchBreedDescription = function(breedName, callback) {
  request('https://api.thecatapi.com/v1/breeds/search?q=' + breedName, 'utf8', (error, response, body) => {
    if (error) {
      callback(error, null);
    }
  
    const data = JSON.parse(body);
  
    if (data[0] === undefined) {
      callback('Invalid cat breed, please try a valid breed', null);
    } else {
      callback(null, data[0].description.trim());
    }

  });
};

module.exports = { fetchBreedDescription };