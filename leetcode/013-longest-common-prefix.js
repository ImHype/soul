/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {

    if (strs.length === 0)
        return '';

    var i = 0;
    let commonStr = [];

    while (true) {
        let j = 0;
        let pre;
        
        while (j < strs.length) {
            const item = strs[j].charAt(i);
            if (
                !item || (pre && item !== pre)
             ) {
                return commonStr.join('');
            }
            pre = item;
            j++;
        }

        if (pre != void 0) {
            commonStr.push(pre)
        }
        i++;
    }
};


var strs = [];
var results = longestCommonPrefix(strs);

console.log(results);