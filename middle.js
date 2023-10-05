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

const assertArraysEqual = function(array1, array2) {
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
  return array1
};

const middle = function(array) { 

  let arrayLength = array.length;
  let newArray = [];
  let index = 0;
  if( arrayLength === 1 || arrayLength === 2 ) {
      return newArray;
  } else if ( arrayLength % 2 !== 0 ) {
    index = Math.floor(arrayLength / 2);
    newArray.push(array[index]);
    return newArray;
  
  } else if ( arrayLength % 2 === 0) {
    index = Math.floor(arrayLength / 2);
    newArray.push(array[index - 1], array[index]);
    return newArray;
  }

}

eqArrays(assertArraysEqual(middle([1]), []), []);// => []
eqArrays(assertArraysEqual(middle([1, 2]), []),[]); // => []
eqArrays(assertArraysEqual(middle([1, 2, 3]), [2]), [2]); // => [2]
eqArrays(assertArraysEqual(middle([1, 2, 3, 4, 5]), [3]), [3]); // => [3]
eqArrays(assertArraysEqual(middle([1, 2, 3, 4]), [2, 3]), [2, 3]);/// => [2, 3]
eqArrays(assertArraysEqual(middle([1, 2, 3, 4, 5, 6]), [3, 4]), [3, 4]);// => [3, 4]
eqArrays(assertArraysEqual(middle([1, 2, 3, 4, 5, 6, 7]), [4]), [4]);// => [4]
eqArrays(assertArraysEqual(middle([1, 2, 3, 4, 5, 6, 7, 8]), [4, 5]),[4, 5]);// => [4, 5]