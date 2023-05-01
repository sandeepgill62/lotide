// TEST/ASSERTION FUNCTIONS
const eqArrays = function (arr1, arr2) {
  var flag = true;
  for (var i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i])
      flag = false;
  }
  return flag;
}

const assertArraysEqual = function (actual, expected) {
  if (actual === expected)
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  else
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);

}

// ACTUAL FUNCTION
const middle = function (array) {

  var result = [];
  //console.log(parseInt(array.length / 2));
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

// TEST CODE
assertArraysEqual(eqArrays(middle([1]), []), true);
assertArraysEqual(eqArrays(middle([1, 2]), []), true);

assertArraysEqual(eqArrays(middle([1, 2, 3]), [2]), true);
assertArraysEqual(eqArrays(middle([1, 2, 3, 4, 5]), [3]), true);

assertArraysEqual(eqArrays(middle([1, 2, 3, 4]), [2, 3]), true);
assertArraysEqual(eqArrays(middle([1, 2, 3, 4, 5, 6]), [3, 4]), true);
