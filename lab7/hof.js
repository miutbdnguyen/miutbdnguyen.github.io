/* 4 Define a function sum() and a function multiply() that sums and multiplies (respectively) all the numbers in an array of numbers */

Array.prototype.sum = function () {
  return this.reduce(
    (previousValue, currentValue) => previousValue + currentValue,
    0
  );
};

Array.prototype.multiply = function () {
  this.reduce((previousValue, currentValue) => previousValue * currentValue, 1);
};

let sumData = [1, 2, 3, 4].sum();
console.log("sum", sumData);

let multiplyData = [1, 2, 3, 4].multiply();
console.log("multiply", multiplyData);

/* 5 Define a function reverse() that computes the reversal of a string. */
String.prototype.reverse = function () {
  var result = "";
  for (var i = this.length - 1; i >= 0; i--) {
    let character = this[i];
    result += character;
  }
  return result;
};

let reversedString = "Dan is so handsome".reverse();
console.log("Reversed string of Dan is so hand some is ", reversedString);

/* 7 Write a function filterLongWords() that takes an array of words and an integer i and returns the array of words that are longer than i. */
function filterLongWords(words, i) {
  return words.filter((item) => item.length > i);
}

let words = ["a", "b", "c", "aa", "bb", "cc"];
console.log("filterLongWords words: ", filterLongWords(words, 1));
