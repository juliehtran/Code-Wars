// Welcome. In this kata, you are asked to square every digit of a number and concatenate them.

// For example, if we run 9119 through the function, 811181 will come out, because 92 is 81 and 12 is 1.

// Note: The function accepts an integer and returns an integer

function squareDigits(num){
 // Get an array of digits as a string
    const digits = num.toString().split('')

    // Square each digit. 
    const squaredDigits = digits.map(n => n * n)

    // Join each digit together, then use the + operator 
    // to convert the string into a number
    const newNumber = squaredDigits.join('')

    return +newNumber
}