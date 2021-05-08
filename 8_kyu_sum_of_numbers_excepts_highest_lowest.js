// Sum all the numbers of the array except the highest and the lowest element (the value, not the index!).
// Example:
// [ 6, 2, 1, 8, 10 ] => 16
// [ 1, 1, 11, 2, 3 ] => 6


function sumOfAllNumbers(array){
  const sortedArray = array.sort((a,b) => a - b);
  let newArray = sortedArray.slice(1, sortedArray.length -1)
  return result = newArray.reduce( (acc, num) =>{
    return acc + num
  },0)
}

sumOfAllNumbers([-2,-79,4,9,8])