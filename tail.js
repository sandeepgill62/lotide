var _ = require('lodash');

// FUNCTION IMPLEMENTATION
const assertEqual = function (actual, expected) {

  if (actual === expected)
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  else
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
};

const tail = function (arr) {
  var tailArr = _.tail(arr);
  return tailArr;
}

// assertEqual(head([5, 6, 7]), 5);
// assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");
// assertEqual(head([]), 3);

var result = tail(["Hello", "Lighthouse", "Labs"]);
assertEqual(result.length, 2); // ensure we get back two elements
assertEqual(result[0], "Lighthouse"); // ensure first element is "Lighthouse"
assertEqual(result[1], "Labs"); // ensure second element is "Labs"

var result = tail([5, 6, 7]);
assertEqual(result.length, 2); // ensure we get back two elements
assertEqual(result[0], 6); // ensure first element is "6"
assertEqual(result[1], 7); // ensure second element is "7"

var result = tail([2]);
assertEqual(result.length, 0); // ensure we get back empty arrary

var result = tail([]);
assertEqual(result.length, 0); // ensure we get back empty arrary
