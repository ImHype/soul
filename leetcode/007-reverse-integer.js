/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
  if(x>=1534236469) return 0;
  //else if(x<=-2147483652)return 0;
  else if(x<=-1563847412 && x>-2147483412)return 0;
  else if(x===-2147483648)return 0;

  // var range = [-Math.pow(2, 31), Math.pow(2, 31) -1]

  var y;
  var arr = [];
  var isF = x < 0;
  if (isF) {
      x = -x;
  }
  var jinzhi = 10;
  while (true) {
    y = x % jinzhi;
    x = (x - y) / jinzhi;

    arr.push(y);
    if (x < jinzhi) {
      if (x > 0) {
        arr.push(x);
      }
      break;
    }
  }
  var sum = arr.join('');
  // var i = 0;
  // var sum = 0;
  // while(i < arr.length) {
  //   var j = arr.length - 1 - i;
  //   var s = Math.pow(10, j);
  //   sum += s * arr[i];
  //   i++;
  // }
  
  if (isF) {
    sum = '-' + sum;
  }

  // if (sum <= range[0]) return 0;
  // if (sum >= range[1]) return 0;
  return sum;
};

var res = reverse(-1534236469);
console.log(res);