/**
Task:
Given a list of integers, determine whether the sum of its elements is odd or even.

Give your answer as a string matching "odd" or "even".

If the input array is empty consider it as: [0] (array with a zero).


Input: [0]
Output: "even"

Input: [0, 1, 4]
Output: "odd"

Input: [0, -1, -5]
Output: "even"


// oddOrEven([0, 1, 5] --> 'even'
// oddOrEven([-1023, -1, 3]), 'odd'
// oddOrEven([]), 'even'

**/

function oddOrEven(array) {
   let newNumber = array.reduce((a,b) =>{
     return a + b
   },0)
   
   if(newNumber % 2 === 0){
     return "even"
   }
  else{
  return "odd"
  }
}

console.log(oddOrEven([]))