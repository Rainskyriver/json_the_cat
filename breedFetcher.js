const request = require('request');


const fetchBreedDescription = function(breedName, callback) {
  request('https://api.thecatapi.com/v1/breeds/search?q=' + breedName, 'utf8', (error, response, body) => {
    if (error) {
      callback(error);
    }
  
    const data = JSON.parse(body);
  
    if (data[0] === undefined) {
      return console.log('Invalid cat name, please try again');
      
    }

    callback(data[0].description);
  });
};

module.exports = { fetchBreedDescription };