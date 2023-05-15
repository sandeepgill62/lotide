# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @sandeepgill62/lotide`

**Require it:**

`const _ = require('@sandeepgill62/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

* `assertEqual(actual, expected)`: This function helps to test code.
* `head(array)`: This function returns the first item in the array
* `tail(array)`: This function returns the "tail" of an array: everything except for the first item (head) of the provided array.
* `eqArrays(array1, array2)`: This function which takes in two arrays and returns true or false, based on a perfect match.
* `assertArraysEqual(array1, array2, expected)`: This function which will take in two arrays and console.log an appropriate message to the console.
* `without(source, itemsToRemove)`: This function which will return a subset of a given array, removing unwanted elements.
* `flatten(array)`: This function which will take in an array containing elements including nested arrays of elements, and return a "flattened" version of the array.
* `middle(array)`: This function which will take in an array and return the middle-most element(s) of the given array.
* `countOnly(allItems, itemsToCount)`: This function should take in a collection of items and return counts for a specific subset of those items
* `countLetters(letters)`: This function should take in a sentence (as a string) and then return a count of each of the letters in that sentence. 
* `letterPositions(sentence)`: This function which will return all the indices (zero-based positions) in the string where each character is found
* `findKeyByValue(object, value)`: This function which takes in an object and a value. It should scan the object and return the first key which contains the given value. If no key with that given value is found, then it should return undefined.
* `eqObjects(object1, object2)`: This function which will take in two objects and returns true or false, based on a perfect match.
* `assertObjectsEqual(actual, expected)`: This function which will take in two objects and console.log an appropriate message to the console.
* `map(array, callback)`: This function which will take in array and callback function. This function will provide the result with array according to callback function definition.   
