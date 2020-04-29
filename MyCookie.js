/*
 * @Author: your name
 * @Date: 2020-04-29 17:32:08
 * @LastEditTime: 2020-04-29 17:41:14
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /myCode/samll-demo/getCookiValue.js
 */

class Cookie {
    constructor(){
    }
    /**
     * @description: 通过正则匹配出对应name的cookie的值
     * @param {string} name
     * @return: value string
     */
    get(name) {
        var reg = new RegExp(name+'=([^;]*)?(;|$)');
        var res = reg.exec(document.cookie);
        if(!res || !res[1])return '';
            try{
            if(/(%[0-9A-F]{2}){2,}/.test(res)){//utf8编码
                return decodeURIComponent(res);
            }else{//unicode编码
                return unescape(res);
            }
        }catch(e){
            return unescape(res);
        }

    }
}
export default Cookie;