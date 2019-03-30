const map = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
}

/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
    let i = 0;
    let prev;
    let sum = 0;
    
    while (i < s.length) {
        const item = s.charAt(i);
        const num = map[item];

        if (prev && (num > prev)) {
            sum -= prev;
            sum = sum + num - prev;
        } else {
            sum += num;
        }

        prev = num;
        i++;
    }

    return sum;
};


const result = romanToInt('MCMXCIV');

console.log(result);