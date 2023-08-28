const assertEqual = function(actual, expected) {
  if (actual.length !== expected.length) {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  } else {
    for (let i = 0; i < actual.length; i++) {
      if (actual[i] !== expected[i]) {
        console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
        break;
      }
    }
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  }
};
const tail = function(array) {
  return array.slice(1);
};
assertEqual(tail(["Lighthouse Labs", "Bootcamp", "Web Development"]),["Bootcamp", "Web Development"]);
assertEqual(tail(["football", "soccer", "baseball", 4 ]),["soccer", "baseball", 7]);
assertEqual(tail([1, 1, 4 , 7 ,9, "tom"]),[1, 1, 4 , 7 ,9, "Sam"]);
assertEqual(tail([]), []);
