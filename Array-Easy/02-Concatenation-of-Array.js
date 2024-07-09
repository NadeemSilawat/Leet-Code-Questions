// https://leetcode.com/problems/build-array-from-permutation/description/

var getConcatenation = function(nums) {

    // (1)
    // return nums.concat(nums)

    // (2)

    // return [...nums,...nums]

    // (3)
    return nums.concat(nums).slice(0)


    
};

console.log(getConcatenation([1,2,1])); // [1,2,1,1,2,1]
console.log(getConcatenation([1,3,2,1])); // [1,3,2,1,1,3,2,1]
