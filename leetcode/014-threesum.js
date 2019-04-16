// /**
//  * @param {number[]} nums
//  * @return {number[][]}
//  */
// var threeSum = function(nums, sum = 0) {
//     const map = new Map();

//     nums.forEach((item, index) => {
//         map.set(item, index);
//     });

//     const results = [];

//     for (let i = 0; i < nums.length; i++) {
//         for (let j = i + 1; j < nums.length; j++) {
//             const a = sum - nums[i] - nums[j];
//             if (map.has(a)) {
//                 const index = map.get(a);

//                 if (index > j && index > i) {
//                     results.push([
//                         nums[i], nums[j], a
//                     ]);
//                 }
//             }
//         }
//     }

//     return results;
// };
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
// [ -1, -1, -4, 0, 1, 2, 100 ]
var threeSum = function(nums, sum = 0) {
    nums = nums.sort();
    const map = new Map();

    nums.forEach((item, index) => {
        map.set(item, index);
    });

    const results = [];

    var i = 0;
    var j = length - 1;

    while (i < j) {
        const left = nums[i];
        const right = nums[i];

        const r = sum - right - left;
        if (map.has(r)) {
            results.push([
                left, right, map.get(r)
            ]);
        } else if () {

        }
    }

    return results;
};

console.log(threeSum([-1, 0, 1, 2, -1, -4]));