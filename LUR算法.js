/*
 * @Author: your name
 * @Date: 2020-04-29 17:28:43
 * @LastEditTime: 2020-04-29 17:36:48
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /myCode/samll-demo/LUR算法.js
 */
/* 思路:
1.最多存储n对KV;
2.如果大于n个, 则随意剔除一个已经过期的KV;
3.如果没有过期的KV, 则按照LRU的规则剔除一个KV;
4.查询时如果已经过期, 则返回空;
为什么使用Map？Map结构的key是有序的，普通Object的key是无序的
*/
class LRUCache {
    constructor(capacity,intervalTime){
        this.cache = new Map();
        this.capacity = capacity;
        this.intervalTime = intervalTime;
    }
    get(key){
        if(!this.cache.has(key)){
            return null
        }
        const tempValue = this.cache.get(key)
        this.cache.delete(key);
        if(Date.now() - tempValue.time > this.intervalTime){
            return null
        }
        this.cache.set(key, {value: tempValue.value, time: Date.now()})
        return tempValue.value
    }
    put(key, value){
        if(this.cache.has(key)){
            this.cache.delete(key)
        }
        if(this.cache.size >= capacity){ //满了
            const keys = this.cache.keys()
            this.cache.delete(keys.next().value)
        }
        this.cache.set(key, {value,time:Date.now()})
    }
}
export default LRUCache;