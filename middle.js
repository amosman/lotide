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

module.exports = middle;