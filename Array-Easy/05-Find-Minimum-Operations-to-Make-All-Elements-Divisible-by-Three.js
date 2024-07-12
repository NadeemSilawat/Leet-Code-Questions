// https://leetcode.com/problems/find-minimum-operations-to-make-all-elements-divisible-by-three/description/

var minimumOperations = function (nums) {
  // let count = 0;
  // for(i=0 ; i< nums.length; i++){
  //     if(nums[i] %3 !== 0){
  //         count++;
  //     }
  // }
  // return count

  // (2)

//   return nums.reduce((a, b) => (b % 3 != 0 ? a + 1 : 0), 0);

return nums.reduce((a, b) => (b % 3 !== 0 ? a + 1 : a), 0);
};

console.log(minimumOperations([1, 2, 3, 4])); // 3
console.log(minimumOperations([3, 6, 9])); // 0
