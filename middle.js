// middle.js

const middle = function (array) {

  var result = [];
  if (array.length >= 3) {
    if (array.length % 2 != 0) {
      var index = parseInt(array.length / 2);
      result = [array[index]];
    }
    else {
      var index = parseInt(array.length / 2);
      result = [array[index - 1], array[index]];
    }
  }

  return result;
}

//export
module.exports = middle;

