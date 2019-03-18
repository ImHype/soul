/**
 * @param {string} str
 * @return {number}
 */
var boundary = [-Math.pow(2, 31), Math.pow(2, 31) - 1];
  var fuhao = ['-', '+'];
  var map = {
    '0': 0,
    '1': 1,
    '2': 2,
    '3': 3,
    '4': 4,
    '5': 5,
    '6': 6,
    '7': 7,
    '8': 8,
    '9': 9
  }
var myAtoi = function(str) {
  var tokens = [];
 
  var matched = false;

  for (let i = 0; i < str.length; i++) {
    var char = str.charAt(i);
    if (char === ' ') {
      if (matched) {
        break;
      }
    } else if (fuhao.includes(char)) {
      if (matched) {
        break;
      } else {
        tokens.push(char);
        matched = true;
      }
    } else if (map[char] != void 0) {
      tokens.push(char);
      matched = true;
    } else {
      break;
    }
  }

  if (tokens.length === 0 ) return 0;
  var isF = false;

  if (tokens[0] === '+' || tokens[0] === '-') {
    if (tokens[0] === '-') {
      isF = true;
    }
    tokens.shift();
  }
  if (typeof map[tokens[0]] === 'undefined') {
    return 0;
  }
  var len = tokens.length;
  var sum = 0;
 for (let i = 0; i < len; i++) {
  var char = tokens[len - 1 - i];
  
  sum += map[char] * Math.pow(10, i);
 }

 if (isF) {
   sum = -sum;
 }
 if (sum <= boundary[0]) {
   return boundary[0];
 }

 if (sum >= boundary[1]) {
  return boundary[1];
}
 return sum;
};