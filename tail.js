
// tail.js

const assertEqual = require('./assertEqual');

const tail = function (arr) {
  var tailArr = arr.slice(1);
  return tailArr;
}

//export
module.exports = tail;


