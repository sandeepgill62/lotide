
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

const flatten = function (arr) {

  var result = [];

  for (var a of arr) {
    var len = a.length;
    if (len >= 1) {
      for (var i of a)
        result.push(i);
    }
    else {
      result.push(a);
    }
  }

  return result;
}

flatten([1, 2, [3, 4], 5, [6]]) // => [1, 2, 3, 4, 5, 6]

assertArraysEqual(flatten([1, 2, [3, 4], 5, [6]]), [1, 2, 3, 4, 5, 6], true);