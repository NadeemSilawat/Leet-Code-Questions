// https://leetcode.com/problems/shuffle-the-array/description/


var shuffle = function (nums, n) {
  //   (1)
  let arr = [];
  for (i = 0; i < nums.length - n; i++) {
    arr.push(nums[i], nums[i + n]);
  }

  return arr;
  
};

console.log(shuffle([2, 5, 1, 3, 4, 7], 3)); // [2,3,5,4,1,7]
console.log(shuffle([1, 2, 3, 4, 4, 3, 2, 1], 4)); // [1,4,2,3,3,2,4,1]
console.log(shuffle([1, 1, 2, 2], 2)); // [1,2,1,2]
