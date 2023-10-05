const assertEqual = function(actual, expected) {

  if (actual === expected) {
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

const eqObjects = function(object1, object2) {
let array1 = Object.keys(object1);
let array2 = Object.keys(object2);
if (array1.length !== array2.length){
  return false; 
} else {
  for( key of array1){
     console.log(key);
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


const multiColorShirtObject = { color: ["red","blue"], size: "medium" };
const anotherMultiColorShirtObject = { size: "medium", color: ["red", "blue"] };

assertEqual(eqObjects(multiColorShirtObject , anotherMultiColorShirtObject),  true ); // => true

const longSleeveMultiColorShirtObject = { size: "medium", color: ["red", "blue"], sleeveLength: "long" };

assertEqual(eqObjects(multiColorShirtObject , longSleeveMultiColorShirtObject), false); // => false
