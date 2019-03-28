// My Solution
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

// Better Soluter
/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
    let left = 0;
    let right = height.length - 1;
    let max = 0;

    while (left < right) {
        let step = right - left;
        let h = Math.min(height[left], height[right]);
        let area = step * h;

        if (area > max) {
            max = area;
        } else {
            (height[left] > height[right])? right-- : left++
        }
    }
    
    return max;
};


var height = [1,8,6,2,5,4,8,3,7];
var result = maxArea(height);

console.log(result);