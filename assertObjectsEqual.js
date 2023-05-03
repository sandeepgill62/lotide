
const assertObjectsEqual = function (actual, expected) {
  const inspect = require('util').inspect;

  var flag = eqObjects(actual, expected);

  if (flag)
    console.log(`✅✅✅ Assertion Passed: ${inspect(actual)} === ${inspect(expected)}`);
  else
    console.log(`✅✅✅ Assertion Passed: ${inspect(actual)} !== ${inspect(expected)}`);

};

const eqArrays = function (arr1, arr2) {
  var flag = true;
  for (var i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i])
      flag = false;
  }
  return flag;
}

// Returns true if both objects have identical keys with identical values.
// Otherwise you get back a big fat false!
const eqObjects = function (object1, object2) {

  var flag = true;
  var keys1 = Object.keys(object1);
  var keys2 = Object.keys(object2);

  if (keys1.length !== keys2.length)
    flag = false;
  else {
    for (var k of keys1) {
      if (object1[k] !== object2[k]) {
        flag = false;
        if (Array.isArray(object1[k]) && Array.isArray(object2[k])) {
          flag = eqArrays(object1[k], object2[k]);
        }
      }
    }
  }

  return flag;
};

const multiColorShirtObject = { colors: ["red", "blue"], size: "medium" };
const anotherMultiColorShirtObject = { size: "medium", colors: ["red", "blue"] };
eqObjects(multiColorShirtObject, anotherMultiColorShirtObject); // => true
assertObjectsEqual(multiColorShirtObject, anotherMultiColorShirtObject);

const longSleeveMultiColorShirtObject = { size: "medium", colors: ["red", "blue"], sleeveLength: "long" };
eqObjects(multiColorShirtObject, longSleeveMultiColorShirtObject); // => false
assertObjectsEqual(multiColorShirtObject, longSleeveMultiColorShirtObject);