/* CHALLENGE
Given a sentence containing two or more words, 
return the equivalent of the sentence when capitalised. E.g
capSentence('the tales of scotch!') // would return 'The Tales Of Scotch!' 
*/

function capSentence(text) {
  let arrayOfWords = text.toLowerCase().split(" ")

  let capitalization = arrayOfWords.map(word=>{
    return word.replace(word[0], word[0].toUpperCase())
  })

  return capitalization.join(" ")
}
  

Or

function capSentence(text) {
  let arrayOfWords = text.toLowerCase().split(' ')
  let capArray = arrayOfWords.map(word =>{
      return word[0].toUpperCase() + word.slice(1)
  })

  return capArray.join(' ')
}


module.exports = capSentence
