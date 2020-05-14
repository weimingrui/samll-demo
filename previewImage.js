/*
 * @Author: Arthur
 * @Date: 2020-05-14 11:24:37
 * @LastEditors: Arthur
 * @LastEditTime: 2020-05-14 11:33:01
 * @Description: file content
 */
export default class PreviewImage {
    previewLen = 7;
    /**
     * @description: 获取该图片是否预加载
     * @param {type} 
     * @return: 
     */
    static isPreViewImage(index) {
        let isShow = false;
        let swiperIndex = this.swiperIndex;
        let list = this.landImageList;
        let max = list.length;
        // 图片 < 20张 直接展示
        if (max < 20) {
            return true;
        }
        let showIndArr = new Array(this.previewLen).fill(1).map((item,ind)=>{
            let showIndex = (swiperIndex - (Math.floor(this.previewLen/2)) + ind);
            if (showIndex >= max) {
                showIndex = showIndex% max
            }
            if (showIndex < 0) {
                showIndex = showIndex + max
            }
            return showIndex;
        });
        // console.log(showIndArr);
        if (showIndArr.includes(index)) {
            isShow = true;
        }
        return isShow
    }
}
