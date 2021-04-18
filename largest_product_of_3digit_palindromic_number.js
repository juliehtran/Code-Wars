'A palindromic number reads the same both ways. The largest palindrome made from the product of two 2-digit numbers is 9009 = 91 × 99. Find the largest palindrome made from the product of two 3-digit numbers.'

// params = nothing just a function

// return a palindrome biggest that's the product of 2 three digit nums

// example:  91144119

// function, make 2 variables for integer 1 and 2, check if thy're a palindrome when multiplied 

function palindromeNumbers(){
  // count backwards from 999
  const palindromeNumbers = []
  for(let num1 = 999; num1 >= 100; num1--){
    for(let num2 = 999; num2 >= 100; num2--){
      // multiply together
      let product = num1 * num2

      // check if palindrome
      if(checkPalindrome(product)) {
        palindromeNumbers.push(product)
      }
    }
  }
  return palindromeNumbers.sort((a, b) => b - a)[0]
}

function checkPalindrome(product){
  return String(product) === String(product).split('').reverse().join('')
}

palindromeNumbers()