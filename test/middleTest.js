const eqArrays = require('../eqArrays');
const assertArraysEqual = require('../assertArraysEqual');
const middle = require('../middle');

assertArraysEqual(middle([1]), []), [];// =>  true 
assertArraysEqual(middle([1, 2]), []),[]; // => true
assertArraysEqual(middle([1, 2, 3]), [2]), [2]; // => true
assertArraysEqual(middle([1, 2, 3, 4, 5]), [3]), [3]; // => true
assertArraysEqual(middle([1, 2, 3, 4]), [2, 3]), [2, 3];/// => true
assertArraysEqual(middle([1, 2, 3, 4, 5, 6]), [3, 4]), [3, 4];// => true
assertArraysEqual(middle([1, 2, 3, 4, 5, 6, 7]), [4]), [4];// => true
assertArraysEqual(middle([1, 2, 3, 4, 5, 6, 7, 8]), [4, 5]),[4, 5];// => true