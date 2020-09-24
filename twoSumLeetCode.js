var twoSum = function(nums, target) {
    for(let i=0; i < nums.length; i++){
          for(let j=1; j < nums.length; j++){
        if(nums[i]+nums[j]===target){
            return [i,j]
        }
          }
    }
};

let arr=[2,11,21,7]
let sum= 9

console.log(twoSum(arr, sum))