/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
  const map = {};
  nums.forEach((num, index) => {
    map[num] = index;
  });

  const ret = [];
  nums.some((num, index) => {
    const idx = map[target - num];
    if (idx !== undefined && idx !== index) {
      ret.push(index);
      ret.push(idx);
      return true;
    }
  });

  return ret;
};

console.log(twoSum([2, 7, 11, 15], 9));