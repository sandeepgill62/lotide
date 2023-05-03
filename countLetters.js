const assertEqual = function (actual, expected) {

  if (actual === expected)
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  else
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
};

const countLetters = function (letter) {

  //new empty object
  const results = {};

  for (const item of letter) {
    if (item !== ' ') {
      if (results[item]) {
        results[item] += 1;
      } else {
        results[item] = 1;
      }
    }
  }
  return results;
}

const result1 = countLetters("lighthouse in the house");

assertEqual(result1["h"], 4);
assertEqual(result1["s"], 2);
assertEqual(result1["x"], undefined);