// This code does not execute properly. Try to figure out why.

function multiply(a, b){
 a * b
}

// answer
function multiply(a, b){
 return a * b
}

// Create a function (or write a script in Shell) that takes an integer
// as an argument and returns "Even" for even numbers or "Odd" for odd numbers.
// answer
function even_or_odd(number) {
  if (number % 2 === 0){
    return "Even"
  }
  else{
    return "Odd"
  }
}

// Very simple, given a number, find its opposite.
//
// Examples:
// 1: -1
// 14: -14
// -34: 34

// answer
function opposite(number) {

return -number
}

// You get an array of numbers, return the sum of all of the positives ones.
//
// Example [1,-4,7,12] => 1 + 7 + 12 = 20
//
// Note: if there is nothing to sum, the sum is default to 0.

// answer
  function positiveSum(arr) {
  //   get the positives ones
    let positive = arr.filter(val => {
      if (val > 0) {
        return val
       }
    })
    console.log(positive)
  //   get the sum of the numbers in the array
    total = 0
    positive.forEach((arrayNuber) => {
      total = total + arrayNuber
    })
    return total
  }

  // In this simple assignment you are given a number and have to make it negative. But maybe the number is already negative?
  //
  // Example:
  // makeNegative(1); // return -1
  // makeNegative(-5); // return -5
  // makeNegative(0); // return 0
  // makeNegative(0.12); // return -0.12

  // answer
  function makeNegative(num) {
  if (num < 0) {
    return num
  } else {
    return -num
  }
}
