// My Solution

/**
 * @param {number} num
 * @return {string}
 */
var intToRoman = function(num) {
    var list = [];

    while (num >= 1) {
        var temp = num % 10;
        num = (num - temp) / 10;
        list.push(temp);
    }

    if (num != 0) {
        list.push(num);
    }

    let i = list.length - 1;
    let result = [];

    function getStr(i) {
        var char1;
        var char5;
        if (i === 3) {
            char1 = 'M';
            char5 = '';
        } else if (i === 2) {
            char1 = 'C';
            char5 = 'D';
        } else if (i === 1) {
            char1 = 'X';
            char5 = 'L';
        } else if (i === 0) {
            char1 = 'I';
            char5 = 'V';
        }

        return {
            char1,
            char5
        }
    }

    while (i >= 0) {
        var {char1, char5} = getStr(i);

        var item = list[i];

        var j = 0;
        if (item <= 3) {
            while ( j < item ) {
                result.push(char1);
                j++;
            }
        } else if (item <= 5) {
            while ( j < (5 - item) ) {
                result.push(char1);
                j++;
            }
            result.push(char5);
        } else if (item <= 8) {
            result.push(char5);
            while ( j < (item - 5) ) {
                result.push(char1);
                j++;
            }
        } else {
            while ( j < (10 - item) ) {
                result.push(char1);
                j++;
            }
            result.push(getStr(i + 1).char1);
        }
        i--;
    }

    return result.join('')
};


// Better Solution
/**
 * @param {number} num
 * @return {string}
 */

/* value, str mapping */
const mapping = [
    [1000, 'M'], [900, 'CM'], [500, 'D'], [400, 'CD'], [100, 'C'], [90, 'XC'], [50, 'L'], [40, 'XL'], [10, 'X'], [9, 'IX'], [5, 'V'], [4, 'IV'], [1, 'I']
];

var intToRoman = function(num) {
    let str = '';

    for (let i = 0; i < mapping.length; i++) {
        const [val, char] = mapping[i];

        if (num >= val) {
            while (num >= val) {
                num -= val;
                str += char;
            }
        }
    }

    return str;
};

const res = intToRoman(1994);
console.log(res);