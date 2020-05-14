/*
 * @Author: your name
 * @Date: 2020-04-22 17:40:55
 * @LastEditTime: 2020-05-07 17:17:56
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /myCode/samll-demo/device.js
 */
const Device = (function (){
    const userAgent = window.navigator.userAgent.toLowerCase()
    let device = {};
    let find = function(needle) {
        return userAgent.indexOf(needle) !== -1
    }
    
    device.iphone = function() {
        return !device.windows() && find('iphone')
    }
    
    device.ipod = function() {
        return find('ipod')
    }
    
    device.ipad = function() {
        return find('ipad')
    }
    
    device.android = function() {
        return !device.windows() && find('android')
    }
    
    device.androidPhone = function() {
        return device.android() && find('mobile')
    }
    
    device.blackberry = function() {
        return find('blackberry') || find('bb10') || find('rim')
    }
    
    device.blackberryPhone = function() {
        return device.blackberry() && !find('tablet')
    }
    
    device.windows = function() {
        return find('windows')
    }
    
    device.windowsPhone = function() {
        return device.windows() && find('phone')
    }
    
    device.fxos = function() {
        return (find('(mobile') || find('(tablet')) && find(' rv:')
    }
    
    device.fxosPhone = function() {
        return device.fxos() && find('mobile')
    }
    
    device.meego = function() {
        return find('meego')
    }
    
    device.mobile = function() {
        return (
            device.androidPhone() ||
            device.iphone() ||
            device.ipod() ||
            device.windowsPhone() ||
            device.blackberryPhone() ||
            device.fxosPhone() ||
            device.meego()
        )
    }
    return device;
})()
export default Device