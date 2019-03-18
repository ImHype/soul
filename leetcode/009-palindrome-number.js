/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    if (x < 0) {
      return false;
    }

    var list = [];
    var result = x;

    while (result >= 1) {
      let temp = result % 10;
      list.push(temp);
      result = (result - temp) / 10;
    }

    var j = 0;
    var sum = 0;
    while (j < list.length) {
      var item = list[j];
      sum += item * Math.pow(10, list.length - 1 - j);
      j++;
    }
    return sum === x;
};


var res = isPalindrome(121);
console.log(res);