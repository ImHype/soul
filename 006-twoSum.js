var twoSum = function(nums, target) {
    var map = {};
    for(var i =0; i< nums.length; i++) {
        var res = map[target - nums[i]]
        if (res !== undefined) {
            return [res, i]
        }
        map[nums[i]] = i
    }
};

console.log(twoSum([2, 7, 11, 15], 9))