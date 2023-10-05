const assertEqual = function(actual, expected) {

  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

const countLetters = function( sentence ) {

const letters = {};
const sentenceLowerCase = sentence.toLowerCase();
for (let letter of sentenceLowerCase) {
  if (!letters[letter]) {
    letters[letter] = 1;
  } else {
    letters[letter] = letters[letter] + 1;
  }
} 

const keysArray = Object.keys(letters).sort();
for (letter of keysArray){
 console.log( ` ${letter} : ${letters[letter]} ` )
}
};

countLetters("LHL");
