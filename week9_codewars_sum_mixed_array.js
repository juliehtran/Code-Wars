// Given an array of integers as strings and numbers, return the sum of the array values as if all were numbers.
// Return your answer as a number.

function sumMix(array){  
  let sum = 0;
  array.forEach((numberOrString) => {
    sum = Number(numberOrString) + sum
  })
  return sum
}