/*
Write a function to return the nth element in Fibonacci sequence,
where the sequence is:
    [1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, …]
*/


function fibonacci(n) {
    // Code goes here
    //create our first two numbers in the array
    let num1 = 1;
    let num2 = 1;
    // initialize an empty variable
    let result;
    //made a new array with first two numbers
    let arr = [num1, num2];
    // set a counter
    let count = 0;
    //iterate through the arr with a while loop
    while (count <= n) {
        //assign result to the addition of your first and second number
        result = num1 + num2;
        //assign num1 to num2
        num1 = num2;
        //assign num2 to the result
        num2 = result;
        //push each new result into the array we made.
        arr.push(result);
        //increase the count for our while loop
        count++;
    }
    //return arr[with the index of n]
    return arr[n];
}

module.exports = fibonacci
