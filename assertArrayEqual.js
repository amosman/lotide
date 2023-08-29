const assertArrayEqual = function(array1 , array2) {
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
assertArrayEqual([1, 2, 3], [1, 2, 3]); // => true
assertArrayEqual([1, 2, 3], [3, 2, 1]); // => false
assertArrayEqual(["1", "2", "3"], ["1", "2", "3"]); // => true
assertArrayEqual(["1", "2", "3"], ["1", "2", 3]); // => false