/*
 * @Author: Arthur
 * @Date: 2020-05-14 11:29:53
 * @LastEditors: Arthur
 * @LastEditTime: 2020-05-14 17:23:20
 * @Description: 浅复制
 */
export default class Copy{
    static copyObject(obj){
        if (obj === null) {
            return null;
        }
        if (a.constructor == Date) {
            return new Date(a)
        }
        return JSON.parse(JSON.stringify(obj));
    }
    static copy(data){
        if (typeof data == 'object') {
            return this.copyObject(data);
        } else if (typeof data == 'function'){
            return data;
        } else if (typeof data == 'string' || typeof data == 'number' || typeof data == 'boolean') {
            return data;
        }   
    }
}