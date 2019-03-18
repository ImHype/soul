/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
  var list = [];
  for (let i = 0; i < s.length; i++ ) {

    var j = 0;
    var k = 0;

    while (s[i + k + 1] === s[i]) {
      k ++;
    }

    while (true) {
      var left = s[i - j - 1];
      var right = s[i + k + j + 1];

      if (left != void 0 && left === right) {
        j++;
      } else {
        break;
      }
    }
    if (j > 0 || k > 0) {
      var str = s.substring(i - j, i + k + j + 1);
      list.push(str);
    }
  }
  var max = Math.max.apply(null, list.map(i => i.length));
  return list.filter(i => i.length === max)[0] || s[0] || '';
};
console.log(longestPalindrome('babad'))