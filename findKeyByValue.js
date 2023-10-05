const assertEqual = function(actual, expected) {

  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
}; 

const findKeyByValue = function(object, value) {
  let result;
  const keys = Object.keys(object);
  for ( let key in keys ){
    if (object[key] === value) {
      result = key;  
      break
    }
  }
  return result; 
  };

const bestTVShowsByGenre = { 
    sci_fi: "The Expanse",
    comedy: "Brooklyn Nine-Nine",
    drama:  "The Wire",
    comic: "Loki",
    fantasy: "Lord of the Rings"
  }; 

assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");

assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);