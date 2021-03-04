// Given an array of integers your solution should find the smallest integer.
//
// For example:
//
// Given [34, 15, 88, 2] your solution will return 2
// Given [34, -345, -1, 100] your solution will return -345
// You can assume, for the purpose of this kata, that the supplied array will not be empty.

class SmallestIntegerFinder {
  findSmallestInt(args) {
  	const sortedList = args.sort((left,right) => left - right)
    return sortedList[0]
  }
}

// Or do this: iterate through the list and keep track of the current smallest
//  at first, the smallest one is the first one
    let smallestNum = args[0]
    args.forEach((number) => {
      if(number < smallestNum) {
        smallestNum = number
      }
    })
    return smallestNum
  }
}
