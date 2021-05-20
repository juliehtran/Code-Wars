// receive a string which doesn't contain any numbers or symbols only letters and return the number of the most repeated letter
// example: "aabbbaaaa" -> 4 because a the end is the most repeated
// aabbbccccd -> 4 for all the c's

// example: "aabbbaaaa" -> 4 because a the end is the most repeated
// aabbbccccd -> 4 for all the c's

function longestRepeat(str){
    let longestRepeatedChar = 0
    // start at nothing for the count
    let letterCount = 0 
    // an empty character to compare to the i as you loop
    let character = ""
    // loop through the string that's passed
    for(let i = 0; i < str.length; i++){
      let thisCharacter = str[i]
      if(character === thisCharacter){
        // increase the count of the letter if it's the same as what's looped
        letterCount++
      } else{
        // longest repeated sequence
        longestRepeatedChar = Math.max(longestRepeatedChar, letterCount)
        // otherwise, the character IS the str[i]
        character = thisCharacter
      }
    }
    return longestRepeatedChar
  }
  
  console.log(longestRepeat("aabbbaaaa"))
  
  