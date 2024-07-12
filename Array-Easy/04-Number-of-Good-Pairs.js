// https://leetcode.com/problems/number-of-good-pairs/description/
    
var numIdenticalPairs = function (nums) {
    const arr = [];
    for (i = 0; i < nums.length; i++) {
        for (j = 1; j < nums.length; j++) {
        if(nums[i] == nums[j] && i < j){
           arr.push([i,j]) 
        }
        
    }

}
    return arr.length
};

console.log(numIdenticalPairs([1,2,3,1,1,3]));  // 4    
console.log(numIdenticalPairs([1,1,1,1]));  // 6
console.log(numIdenticalPairs([1,2,3]));  // 0