

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

const map = function (array, callback) {

  const results = [];
  for (let item of array) {
    results.push(callback(item));
  }
  return results;
}

const words = ["ground", "control", "to", "major", "tom"];
const results1 = map(words, word => word[0]);
//console.log(results1);

assertArraysEqual(map(["ground", "control", "to", "major", "tom"], word => word[0]), ['g', 'c', 't', 'm', 't'], true);
assertArraysEqual(map(["programming", "javascript", "lighthouse"], word => word[0]), ['p', 'j', 'l'], true);
assertArraysEqual(map(["macbook", "laptop", "iPhone"], word => word[0]), ['m', 'l', 'i'], true);