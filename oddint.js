// Given an array of integers, find the one that appears an odd number of times.

// There will always be only one integer that appears an odd number of times.

function findOdd(A) {
  let arr = A.sort()
  let count = 2
  if(arr.length===1){
    return arr[0]
  }
  if(arr[0]===arr[1]){
    for(let i = 0; i<arr.length; i++){
      if(arr[1]===arr[i]){
        count = count+1
      }
    }
    if(count%2>1){
      return arr[1]
    }
     return findOdd(A.slice(2))
  }
  
  return arr[0]
}