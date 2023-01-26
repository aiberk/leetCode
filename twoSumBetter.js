/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
  let map = new Map();
  for (let i = 0; i < nums.length; i++) {
    let tarValue = target - nums[i];
    let matchValue = map.get(tarValue);
    if (matchValue !== undefined) {
      return [matchValue, i];
    }
    map.set(nums[i], i);
  }
};
