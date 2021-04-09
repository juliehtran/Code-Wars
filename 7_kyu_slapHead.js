function bald(string){
  let counter = 0;
  const replacedString = string.split('/').join('-')
  
  for (let i = 0; i <= string.length; i++){
    if(string[i] === '/'){
      counter++
    }
  }

  
  if(counter === 0) return [replacedString,"Clean!"]
  else if(counter === 1) return [replacedString,"Unicorn!"]
  else if( counter === 2) return [replacedString,"Homer!"]
  else if (counter >= 3 && counter < 5) return [replacedString,"Careless!"]
  else if(counter > 5) return [replacedString,"Hobo!"]
}



function bald(string){
    let counter = 0;
    const replacedString = string.split('/').join('-')
    
  //   the time complexity of this function is O(n) because for each character in the string
  //   we perform one comparison
    for (let i = 0; i <= string.length; i++){
      if(string[i] === '/'){
        counter++
      }
    }
  
    const phase = {
      0: "Clean!",
      1: "Unicorn!",
      2: "Homer!",
      3: "Careless!",
      4: "Careless!",
      5: "Hobo"
    }
    
    const message = phase[counter]
  
    return [replacedString, message]
}



function bald(string){
    let counter = 0;
    const replacedString = string.split('/').join('-')
    
  //   the time complexity of this function is O(n) because for each character in the string
  //   we perform one comparison
    for (let i = 0; i <= string.length; i++){
      if(string[i] === '/'){
        counter++
      }
    }
  
    const phase = ["Clean!", "Unicorn!", "Homer!", "Careless!", "Careless!", "Hobo"]
    
    const message = phase[counter]
  
    return [replacedString, message]
}
  
  
  
  
  
  
  
  