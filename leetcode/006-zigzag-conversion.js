/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function(s, numRows) {
  var table = [];

  var i = 0;
  while(i < numRows) {
    table.push([]);
    i++;
  }

  i = 0;

  
  if (s.length <= numRows) {
    return s;
  }

  var wholeSize = numRows > 2 ? (numRows + numRows - 2): numRows;

  while (i < s.length) {
    var char = s[i];
    var index = (i >= wholeSize) ? (i % wholeSize): i;

    var isDown = index <= (numRows - 1);

    if (isDown) {
      table[index].push(char);
    } else {
      var row = (numRows - 1) - (index % numRows + 1);
      table[row].push(char);
    }

    i++;
  }
  return table.map(i => i.join('')).join('');
};

console.log(convert('PAYPALISHIRING', 3))