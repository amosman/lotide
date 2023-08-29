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

const without = function(array1 , array2) {
  let newArray = [];
  for (let i = 0; i < array1.length; i++) {
    let match = false;
    for (let j = 0; j < array2.length; j++) {
      if (array1[i] === array2[j]) {
        match = true;
        break;
      }
    }
    if (!match) {
      newArray.push(array1[i]);
    }
  }
  return newArray;
};
const words = ["hello", "world", "lighthouse"];
without(words, ["lighthouse"]); // no need to capture return value for this test case
// Make sure the original array was not altered by the without function

assertArraysEqual(words, ["hello", "world", "lighthouse"]);
assertArraysEqual(without([1, 2, 3], [1]), [2, 3]); // => [2, 3]
assertArraysEqual(without(["1", "2", "3"], [1, 2, "3"]), ["1", "2"]); // => ["1", "2"]


