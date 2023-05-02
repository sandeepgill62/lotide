
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

const without = function (source, itemsToRemove) {

  for (var i = 0; i < source.length; i++) {
    for (var j = 0; j < itemsToRemove.length; j++) {
      if (source[i] === itemsToRemove[j]) {
        source.splice(i, 1);
      }
    }
  }

  return source;
}

assertArraysEqual(without([1, 2, 3], [1]), [2, 3], true); // => [2, 3]
assertArraysEqual(without(["1", "2", "3"], [1, 2, "3"]), ['1', '2'], true); // => ["1", "2"]