// https://leetcode.com/problems/concatenation-of-array/description/

var buildArray = function(nums) {
    
    // (1) Using for loop 

    var ans = []
    for(var i = 0 ; i<nums.length; i++ ){
          ans[i] = nums[nums[i]] 

    } 
    return ans

    // (2) Using Map One Line Code

    return nums.map((ans,i) => nums[nums[i]])


};

console.log(buildArray([0,2,1,5,3,4])); //[0,1,2,4,5,3]
console.log(buildArray([5,0,1,2,3,4])); //[4,5,0,1,2,3]  