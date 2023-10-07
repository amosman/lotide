const assertArraysEqual = function(actual, expected) {
  if (eqArrays(actual, expected)) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

const eqArrays = function(array1 , array2) {
  if (array1.length !== array2.length) {
    return false
  } else {
    for (let i = 0; i < array1.length; i++) {
      if (array1[i] !== array2[i]) {
        return false
      }
    }
    return true
  }
}; 

const words = ["ground", "control", "to", "major", "tom"];
const words2 = ["green", "can", "town", "may", "toy"];
const words3 = ["one", "two", "three", "four", "five"];

const map = function( array, callback) {
  const results = [];
  for (let item of array) {
    results.push(callback(item));
  }
  return results;
}

 const results1 = map(words, word => word[0]);
//  console.log(results1);
 const results2 = map(words2, word => word[0]);
//  console.log(results2);
 const results3 = map(words3, word => word[0]);
//  console.log(results3);

assertArraysEqual(eqArrays(results1, results2), true); // => true
assertArraysEqual(eqArrays(results1, results3), false ); // => false
assertArraysEqual(eqArrays(results2, results3), false ); // => false
