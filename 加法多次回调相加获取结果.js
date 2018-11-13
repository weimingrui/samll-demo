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
export default sum