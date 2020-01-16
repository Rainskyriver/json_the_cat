const request = require('request');
const args = process.argv.slice(2);

request('https://api.thecatapi.com/v1/breeds/search?q=' + args[0], 'utf8', (err, response, body) => {
  if (err) {
    return console.log('Encountered an error: ', err);
  }

  const data = JSON.parse(body);

  if (data[0] === undefined) {
    return console.log('Invalid cat name, please try again');
    
  }
  
  console.log(data[0].description);
});