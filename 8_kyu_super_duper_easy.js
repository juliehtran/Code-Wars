// Make a function that returns the value multiplied by 50 and increased by 6. If the value entered is a string it should return "Error".


function problem(x){
  if (isNaN(x)) {
    return "Error"
  } 
  else if(x === ""){
    return "Error"
  }
  return x * 50 + 6
}