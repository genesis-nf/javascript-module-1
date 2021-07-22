// Using the .map() method, create a new array with `numbers` multiplied by 100
// Write multiple solutions using different syntax (as shown in the README)

function double(number) {
    return number * 2;
  }
var numbers = [0.1, 0.2, 0.3, 0.4, 0.5];
var numbersDoubled = numbers.map(double);

console.log(numbersDoubled)

var numbers = [0.1, 0.2, 0.3, 0.4, 0.5];
var numbersDoubled = numbers.map(function double(number) {
  return number * 2;
});

console.log(numbersDoubled)

  var numbers = [0.1, 0.2, 0.3, 0.4, 0.5];
var numbersDoubled = numbers.map(function double(number) {
  return number * 2;
});

console.log(numbersDoubled)


var numbers = [0.1, 0.2, 0.3, 0.4, 0.5];
var numbersDoubled = numbers.map(number => {
  return number * 2
});

console.log(numbersDoubled)


var numbers = [0.1, 0.2, 0.3, 0.4, 0.5];
var numbersDoubled = numbers.map(number => number * 2);

console.log(numbersDoubled)
