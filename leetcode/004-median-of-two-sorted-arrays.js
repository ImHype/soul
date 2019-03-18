/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function(nums1, nums2) {
  var i = 0;
  var j = 0;

  var temp = [];

  while (i < nums1.length || j < nums2.length) {
    if (i >= nums1.length) {
      temp.push(nums2[j]);
      j++;
      continue;
    }

    if (j >= nums2.length) {
      temp.push(nums1[i]);
      i++;
      continue;
    }

    if (nums1[i] < nums2[j]) {
      temp.push(nums1[i]);
      i++;
    } else {
      temp.push(nums2[j]);
      j++;
    }
  }

  return (temp.length % 2 === 1) ? temp[(temp.length - 1) / 2]: ((temp[temp.length / 2 - 1] + temp[temp.length / 2]) / 2);
};

console.log(findMedianSortedArrays([1, 2], [2]));
console.log(findMedianSortedArrays([1, 2], [3, 4]));