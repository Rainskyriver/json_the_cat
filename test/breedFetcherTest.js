// breedFetcherTest.js

const { fetchBreedDescription } = require('../breedFetcher');
const { assert } = require('chai');

describe('fetchBreedDescription', () => {
  it('returns a string description for a valid breed, via callback', (done) => {
    fetchBreedDescription('Siberian', (err, desc) => {

      assert.equal(err, null);

      const expectedDesc = "The Siberians dog like temperament and affection makes the ideal lap cat and will live quite happily indoors. Very agile and powerful, the Siberian cat can easily leap and reach high places, including the tops of refrigerators and even doors.";

      assert.equal(expectedDesc, desc);

      done();
    });
  });
  it('returns "Invalid cat breed, please try a valid breed" response when given an incorrect cat breed', (done) => {
    fetchBreedDescription('AAA', (err, desc) => {

      const expectedErr = "Invalid cat breed, please try a valid breed";

      assert.equal(err, expectedErr);
      
      assert.equal(desc, null);
      done();
    });
  });
});