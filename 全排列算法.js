/*
 * @Author: your name
 * @Date: 2020-04-29 17:38:35
 * @LastEditTime: 2020-04-29 17:58:34
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /myCode/samll-demo/全排列算法.js
 */
/* 思路： 通过不断递推拼接，得出全排列结果
123 => [1],[2,3]
[2,3] => [2], [3]
2 1 321
1 2 321 312
3 1 2 321 312
1 3 213
3 1 213 231
2 3 1 321 312 213 231
3 2 132
2 3 132 123
1 2 3 321 312 213 231 132 123
*/
function permutate(str) {
    var array = str.split('');
    function loop(array, pre = []) {
        // console.log(array, pre)
        if (array.length == 1) {
            return [pre.concat(array).join('')];
        }
        let res = [];
        for (let index = 0; index < array.length; index++) {
            var first = array.pop();
            res = res.concat(loop(array, [...pre, first]));
            array.unshift(first);
            console.log(...array ,...res)
        }
        return res;
    }
    return Array.from(new Set(loop(array)))
}


export default permutate;