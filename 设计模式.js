
//原型语法
function Person(){
}
Person.prototype = {
	name : "Nicholas",
	age : 29,
	job: "Software Engineer",
	sayName : function () {
	alert(this.name);
}
};

//构造函数模式+原型模式
function Person(name, age, job){
	this.name = name;
	this.age = age;
	this.job = job;
	this.friends = ["Shelby", "Court"];
}
Person.prototype = {
	constructor : Person,
	sayName : function(){
		alert(this.name);
	}
}

//动态原型模式
function Person(name, age, job){
	//属性
	this.name = name;
	this.age = age;
	this.job = job;

	// 方法
	if (typeof this.sayName != "function"){
		Person.prototype.sayName = function(){
			alert(this.name);
		};
	}
}

//寄生构造模式
function Person(name, age, job){
	var o = new Object();
	o.name = name;
	o.age = age;
	o.job = job;
	o.sayName = function(){
		alert(this.name);
	};
	return o;
}

//组合继承
function SuperType(name){
	this.name = name;
	this.colors = ["red", "blue", "green"];
}
SuperType.prototype.sayName = function(){
	console.log(this.name);

};
function SubType(name, age){
	//继承属性
	SuperType.call(this, name);
	this.age = age;
}
//继承方法
SubType.prototype = new SuperType();
SubType.prototype.constructor = SubType;
SubType.prototype.sayAge = function(){
	console.log(this.age);
};


//原型式继承
function object(o){
	function F(){}
	F.prototype = o;
	return new F();
}

var person = {
	name: "Nicholas",
	friends: ["Shelby", "Court", "Van"]
};
var anotherPerson = object(person);
anotherPerson.name = "Greg";
anotherPerson.friends.push("Rob");
var yetAnotherPerson = object(person);
yetAnotherPerson.name = "Linda";
yetAnotherPerson.friends.push("Barbie");

//寄生式继承
function object(o){
	function F(){}
	F.prototype = o;
	return new F();
}
function createAnother(original){
	var clone = object(original); //通过调用函数创建一个新对象
	clone.sayHi = function(){ //以某种方式来增强这个对象
		console.log("hi");
	};
	return clone; //返回这个对象
}

//寄生组合式继承
function SuperType(name){
	this.name = name;
	this.colors = ["red", "blue", "green"];
}
SuperType.prototype.sayName = function(){
	console.log(this.name);
};
function SubType(name, age){
	SuperType.call(this, name); // 第二次调用 SuperType()
	this.age = age;
}
SubType.prototype = new SuperType(); // 第一次调用 SuperType()
SubType.prototype.constructor = SubType;
SubType.prototype.sayAge = function(){
	console.log(this.age);
};

  //方法二
function inheritPrototype(subType, superType){
	var prototype = object(superType.prototype); //创建对象
	prototype.constructor = subType; //增强对象
	subType.prototype = prototype; //指定对象
}
function SuperType(name){
	this.name = name;
	this.colors = ["red", "blue", "green"];
}
SuperType.prototype.sayName = function(){
	console.log(this.name);
};
function SubType(name, age){
	SuperType.call(this, name);
	this.age = age;
}
inheritPrototype(SubType, SuperType);
SubType.prototype.sayAge = function(){
	console.log(this.age);
};
