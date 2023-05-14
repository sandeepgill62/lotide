// middle.js

const middle = function (array) {

  var result = [];
  if (array.length >= 3) {
    if (array.length % 2 != 0) {
      var index = parseInt(array.length / 2);
      result = [array[index]];
    }
    else {
      var index = parseInt(array.length / 2);
      result = [array[index - 1], array[index]];
    }
  }

  return result;
}

//export
module.exports = middle;

// TEST CODE
// assertArraysEqual(eqArrays(middle([1]), []), true);
// assertArraysEqual(eqArrays(middle([1, 2]), []), true);

// assertArraysEqual(eqArrays(middle([1, 2, 3]), [2]), true);
// assertArraysEqual(eqArrays(middle([1, 2, 3, 4, 5]), [3]), true);

// assertArraysEqual(eqArrays(middle([1, 2, 3, 4]), [2, 3]), true);
// assertArraysEqual(eqArrays(middle([1, 2, 3, 4, 5, 6]), [3, 4]), true);
