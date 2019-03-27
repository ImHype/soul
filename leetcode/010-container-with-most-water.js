/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
    var max = 0;

    var size = height.length;
    var maxI = 0;

    for (let i = 0; i < size; i++) {
        var temp = height[i];
        if (temp > maxI) {
            maxI = temp;
            for (let j = i + 1; j < size; j++) {
                var item = height[j];
                var minItem = Math.min(temp, item);
                var sum = minItem * (j - i);
                max = max > sum ? max: sum;
            }
        }
    }

    return max;
};

var height = [1,8,6,2,5,4,8,3,7];
var result = maxArea(height);

console.log(result);