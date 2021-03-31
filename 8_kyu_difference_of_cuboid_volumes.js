// Find the difference of Volumes of Cuboids

function finDifference(a,b){
    let arr1 = a.reduce((acc, val)) => acc * val, 1)
    let arr2 = a.reduce((acc, val)) => acc * val, 1)
    return Math.abs(arr1 - arr2)
}