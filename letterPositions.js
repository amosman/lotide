const assertArraysEqual = function(array1 , array2) {
  let isFalse = false;
  if (array1.length !== array2.length) {
    console.log(`🛑🛑🛑 Assertion Failed`);
  } else {
    for (let i = 0; i < array1.length; i++) {
      if (array1[i] !== array2[i]) {
        console.log(`🛑🛑🛑 Assertion Failed`);
        isFalse = true;
        break;
      }
    }
    if (!isFalse) {
      console.log(`✅✅✅ Assertion Passed`);
    }
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
  
const letterPositions = function (sentence) {
    const results = {};
     for ( let i = 0; i < sentence.length; i++){
       if ( !results[sentence[i]]) {
        results[sentence[i]] = [i];
       } else {
       results[sentence[i]].push(i);
       }
  
     } 
    console.log(results);
     return results;
}
assertArraysEqual(letterPositions("lighthouseinthehouse").e, [22]);