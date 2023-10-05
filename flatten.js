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

const flatten = function(array) {
  let newArray = [];
  for (let i = 0; i < array.length; i++) {
    if (!Array.isArray(array[i])) {
      newArray.push(array[i]);
    } else {
      for (let j = 0; j < array[i].length; j++) {
        newArray.push(array[i][j]);
      }
    }
  }
  return newArray;
};

assertArraysEqual(flatten([1, 2, [3, 4], 5, [6]]), [1, 2, 3, 4, 5, 6]); // => [1, 2, 3, 4, 5, 6]
