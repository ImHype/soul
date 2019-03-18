/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
  var i = 0;
  var temp = [];
  
  var len = [];

  while (i < s.length) {
    const char = s[i];
    const idx = temp.indexOf(char);

    if (idx !== -1) {
      len.push(temp.length);
      temp.splice(0, idx + 1);
    }

    temp.push(char);
    i++;
  }

  len.push(temp.length);

  return Math.max.apply(null, len);
};

console.log(lengthOfLongestSubstring('abcabcbb'))