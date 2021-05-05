// Given a non-empty array of integers, return the result of multiplying the values together in order. Example:
// [1, 2, 3, 4] => 1 * 2 * 3 * 4 = 24

function multiplyingNumbers(array){
    return array.reduce( (acc, num) =>{
      return acc * num
    },1)
  }
  
  console.log(multiplyingNumbers([1, 3, 4, 5]))