
const assertArraysEqual = function (arr1, arr2, expected) {

  var actual = eqArrays(arr1, arr2);
  if (actual === expected)
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  else
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
};

const eqArrays = function (arr1, arr2) {
  var flag = true;
  for (var i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i])
      flag = false;
  }
  return flag;
}

assertArraysEqual([1, 2, 3], [1, 2, 3], true); // => true
assertArraysEqual([1, 2, 3], [3, 2, 1], false); // => false

assertArraysEqual(["1", "2", "3"], ["1", "2", "3"], true); // => true
assertArraysEqual(["1", "2", "3"], ["1", "2", 3], false); // => false