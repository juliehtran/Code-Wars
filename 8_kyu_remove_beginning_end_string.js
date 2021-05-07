// Your goal is to create a function that removes the first and last characters of a string. You're given one parameter, the original string. You don't have to worry with strings with less than two characters.

// P = string +2

// R = string with whatever amount letters is in there minus the first and last letters

// E = "potato" => "otat"

// P = slices from the beginning and the end


function removeBeginningAndEnd(string){
  return string.slice(1, -1)
}

removeBeginningAndEnd("potato")
