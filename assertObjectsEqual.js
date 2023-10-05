const eqObjects = function(object1, object2) {
  let array1 = Object.keys(object1);
  let array2 = Object.keys(object2);
  if (array1.length !== array2.length){
    return false; 
  } else {
    for( key of array1){
      if(Array.isArray(object1[key]) && Array.isArray(object2[key])) {
        if ( !eqArrays(object1[key], object2[key]) ){
          return false;
        } 
      } else {
        if (object1[key] !== object2[key]){
          return false; 
        }
      }
    } 
    return true  
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

  const assertObjectsEqual = function(actual, expected) {
    // Implement me!
    const inspect = require('util').inspect;
    if (eqObjects(actual, expected)) {
      console.log(`✅✅✅ Assertion Passed: ${inspect(actual)} === ${inspect(expected)}`);
    } else {
      console.log(`🛑🛑🛑 Assertion Failed: ${inspect(actual)}!== ${inspect(expected)}`);
    }
  };

const multiColorShirtObject = { color: ["red","blue"], size: "medium" };
const anotherMultiColorShirtObject = { size: "medium", color: ["red", "blue"] };

assertObjectsEqual(multiColorShirtObject, anotherMultiColorShirtObject); // => true

const longSleeveMultiColorShirtObject = { size: "medium", color: ["red", "blue"], sleeveLength: "long" };

assertObjectsEqual(multiColorShirtObject, longSleeveMultiColorShirtObject); // => false