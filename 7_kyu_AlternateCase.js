// Write function alternateCase which switch every letter in string from upper to lower and from lower to upper. E.g: Hello World -> hELLO wORLD

function alternateCase(s) {
    let arr = s.split('')
    for (let i = 0; i < arr.length; i++){
      
      if (arr[i] === arr[i].toUpperCase()){
       arr.splice(i,1,arr[i].toLowerCase())
        
      }else{
        arr.splice(i,1,arr[i].toUpperCase())
      }
    }
    return arr.join('')
  }