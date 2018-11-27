function quickSort(array) {
    function sort(prev, numsize) {
        var nonius = prev;
        var j = numsize - 1;
        var flag = array[prev];
        if ((numsize - prev) > 1) {
            while (nonius < j) {
				//向左校验对比
                for (; nonius < j; j--) {
                    if (array[j] < flag) {
                        array[nonius++] = array[j];　 //a[i] = a[j]; i += 1;
                        break;
                    };
                }
				console.log('right : ',array)
				//向右校验对比
                for (; nonius < j; nonius++) {
                    if (array[nonius] > flag) {
                        array[j--] = array[nonius];//j--是为了中断while循环
                        break;
                    }
                }
				console.log('left : ',array)
            }
			console.log('last : ',array,flag,'   nonius: ',nonius,'  numsize  : ',numsize)
            array[nonius] = flag;
			console.log('new array : ',array)
			//分成更小的区块
            sort(0, nonius);
            sort(nonius + 1, numsize);
        }
    }
    sort(0, array.length);
	return array;
}
function constructor () {		
	this.add =function(arr){
		var sumval = 0
		if (arr.constructor !== Array){
			arr = [...arr]
		}
		arr.forEach(val=>{
			sumval+=val
		})
		return sumval
	}
	sumvalue = sum.sumvalue
	sumvalue=sumvalue+this.add(arguments)
	console.log(sumvalue)
	sum.sumvalue= sumvalue
	
	var callback = function(){
		return constructor(...arguments)
	}
	callback.value=function(){
		return sum.sumvalue
	}
	return callback
} 
function sum(){
	//if(sum.construct!== undefined){
	//	return sum.construct
	//}
	that = sum
	that.sumvalue = 0
	that.value=function(){
		return that.sumvalue
	}
	sum.construct = new constructor(...arguments)
	return sum.construct
}

function parent(){
	this.a=1
	function chirld(){
		this.b = 123
		chirld.prototype.c=12311
	}
	parent.prototype= new chirld()
}

function a(){
	console.log(...ar)
	return function(){
		return new a()
	}
}