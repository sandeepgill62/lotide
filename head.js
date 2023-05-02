var _ = require('lodash');

// FUNCTION IMPLEMENTATION
const assertEqual = function (actual, expected) {

  if (actual === expected)
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  else
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
};

const head = function (arr) {
  var h = arr[0]
  return h;
}

assertEqual(head([5, 6, 7]), 5);
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");
assertEqual(head([]), 3);

