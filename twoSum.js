/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] + nums[j] == target) {
        return [i, j];
      }
    }
  }
  return "Nothing found";
};

console.log(twoSum([3, 0, 0, 0, 0, 0, 23], 6));

// if (index + 1 == nums.length()) return;
// if (numbers + nums[index + 1] == target) return [numbers, nums[index + 1]];
// index = index + 1;
