// Write a function that takes a string which has 
// integers inside it separated by spaces, and your 
// task is to convert each integer in the string 
// into an integer and return their sum.

function summy(stringOfInts) {
    const listOfStrings = stringOfInts.split(" ")
    const listOfInts = listOfStrings.map((string) => Number(string))
    let sum = 0
    listOfInts.forEach((int) => sum = sum + int)
    return sum
 }

 or 
 
 function summy(stringOfInts){
    return stringOfInts.split(' ').reduce((acc,cur)=>acc+parseFloat(cur),0)
}
