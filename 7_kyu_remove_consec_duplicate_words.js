// Your task is to remove all consecutive duplicate 
// words from a string, leaving only first words 
// entries. For example:

function removeConsecutiveDuplicates(s){
  let arr = []
  let string = s.split(' ')
  for(let i = 0; i <= string.length; i++){
    if(string[i] !== string[i + 1]){
      arr.push(string[i])
    }
  }
  return arr.join(' ')
}