// assertArraysEqual.js

const eqArrays = require('./eqArrays');

const assertArraysEqual = function (arr1, arr2, expected) {

  var actual = eqArrays(arr1, arr2);
  if (actual === expected)
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  else
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
};

//export
module.exports = assertArraysEqual;