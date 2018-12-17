




/*


if (someNode.nodeType == 1){
value = someNode.nodeName; //nodeName 的值是元素的标签名
}
在这个例子中，首先检查节点类型，看它是不是一个元素。如果是，则取得并保存 nodeName 的值。
对于元素节点， nodeName 中保存的始终都是元素的标签名，而 nodeValue 的值则始终为 null 。


父节点的 firstChild 和 lastChild
属性分别指向其 childNodes 列表中的第一个和最后一个节点。其中， someNode.firstChild 的值
始 终 等 于 someNode.childNodes[0] ， 而 someNode.lastChild 的 值 始 终 等 于 someNode.
childNodes [someNode.childNodes.length-1] 。在只有一个子节点的情况下， firstChild 和
lastChild 指向同一个节点。如果没有子节点，那么 firstChild 和 lastChild 的值均为 null 。


if (someNode.nextSibling === null){
console.log("Last node in the parent’s childNodes list.");
} else if (someNode.previousSibling === null){
console.log("First node in the parent’s childNodes list.");
}
*/


//   insertBefore	appendChild		replaceChild     removeChild
/*

//替换最后一个子节点
returnedNode = someNode.replaceChild(newNode, someNode.lastChild);

var formerLastChild = someNode.removeChild(someNode.lastChild);

*/
/*
 cloneNode() 方法接受一个布尔值参数，表示是否执行深复制。在参数为 true
的情况下，执行深复制，也就是复制节点及其整个子节点树；在参数为 false 的情况下，执行浅复制，
即只复制节点本身。复制后返回的节点副本属于文档所有，但并没有为它指定父节点。因此，这个节点
副本就成为了一个“孤儿”，除非通过 appendChild() 、 insertBefore() 或 replaceChild() 将它
添加到文档中。
var deepList = myList.cloneNode(true);
console.log(deepList.childNodes.length); //3（IE < 9）或 7（其他浏览器）
var shallowList = myList.cloneNode(false);
console.log(shallowList.childNodes.length); //0
*/\



// document对象

var html = document.documentElement; //取得对<html>的引用
console.log(html === document.childNodes[0]); //true
console.log(html === document.firstChild); //true
var body = document.body; //取得对<body>的引用

//取得完整的 URL
var url = document.URL;
//取得域名
var domain = document.domain;
//取得来源页面的 URL
var referrer = document.referrer;


//假设页面来自 p2p.wrox.com 域
document.domain = "wrox.com"; // 成功
document.domain = "nczonline.net"; // 出错！

//假设页面来自于 p2p.wrox.com 域
document.domain = "wrox.com"; //松散的（成功）
document.domain = "p2p.wrox.com"; //紧绷的（出错！）


console.log(images.length); //输出图像的数量
console.log(images[0].src); //输出第一个图像元素的 src 特性
console.log(images.item(0).src); //输出第一个图像元素的 src 特性

/*
HTMLCollection 对象还有一个方法，叫做 namedItem() ，使用这个方法可以通过元素的 name
特性取得集合中的项。
<img src="myimage.gif" name="myImage">
那么就可以通过如下方式从 images 变量中取得这个 <img> 元素：
var myImage = images.namedItem("myImage");
*/

/*
对 HTMLCollection 而言，我们可以向方括号中传入数值或字符串形式的索引值。在后台，对数
值索引就会调用 item(),而对字符串索引就会调用 namedItem() 。


要想取得文档中的所有元素，可以向 getElementsByTagName() 中传入 "*" 。在 JavaScript 及 CSS
中，星号（ * ）通常表示“全部”。

getElementsByName  这个方法会返回带有给定 name 特性的所有元素




特殊集合：
		
	 document.anchors ，包含文档中所有带 name 特性的 <a> 元素；
 		document.applets ，包含文档中所有的 <applet> 元素，因为不再推荐使用 <applet> 元素，
所以这个集合已经不建议使用了；
	document.forms ，包含文档中所有的 <form> 元素，与 document.getElementsByTagName("form")
得到的结果相同；
 	document.images ，包含文档中所有的 <img> 元素，与 document.getElementsByTagName
("img") 得到的结果相同；
	 document.links ，包含文档中所有带 href 特性的 <a> 元素
*/


/*
如果浏览器支持给定名称和版本的功能，则该
方法返回 true ，如下面的例子所示：
var hasXmlDom = document.implementation.hasFeature("XML", "1.0");
*/


//   querySelector	querySelectorAll	matchesSelector

//取得 body 元素
var body = document.querySelector("body");
//取得 ID 为"myDiv"的元素
var myDiv = document.querySelector("#myDiv");
//取得类为"selected"的第一个元素
var selected = document.querySelector(".selected");
//取得类为"button"的第一个图像元素
var img = document.body.querySelector("img.button");

//取得某<div>中的所有<em>元素（类似于 getElementsByTagName("em")）
var ems = document.getElementById("myDiv").querySelectorAll("em");
//取得类为"selected"的所有元素
var selecteds = document.querySelectorAll(".selected");
//取得所有<p>元素中的所有<strong>元素
var strongs = document.querySelectorAll("p strong");


//这个方法接收一个参数，即 CSS 选择符，如果调用元素与该选择符匹配，返回 true ；否则，返回 false 
if (document.body.matchesSelector("body.page1")){
//true
}
 //childElementCount ：返回子元素（不包括文本节点和注释）的个数。
 //firstElementChild ：指向第一个子元素； firstChild 的元素版。
 //lastElementChild ：指向最后一个子元素； lastChild 的元素版。
 //previousElementSibling ：指向前一个同辈元素； previousSibling 的元素版。
 //nextElementSibling ：指向后一个同辈元素； nextSibling 的元素版。


	//add(value) ：将给定的字符串值添加到列表中。如果值已经存在，就不添加了。
 //contains(value) ：表示列表中是否存在给定的值，如果存在则返回 true ，否则返回 false 。
 //remove(value) ：从列表中删除给定的字符串。
 //toggle(value) ：如果列表中已经存在给定的值，删除它；如果列表中没有给定的值，添加它。
   //eg: div.classList.remove("user");


   
   // document.activeElement 属性，这个属性始终会引用 DOM 中当前获得了焦点的元素
   var button = document.getElementById("myButton");
	button.focus();
	console.log(document.activeElement === button); //true
   

/*

HTML5规定可以为元素添加非标准的属性，但要添加前缀 data- ，目的是为元素提供与渲染无关的
信息，或者提供语义信息。这些属性可以任意添加、随便命名，只要以 data- 开头即可。来看一个例子。
<div id="myDiv" data-appId="12345" data-myname="Nicholas"></div>


*/

/*

var div = document.getElementById("myDiv");
//取得自定义属性的值
var appId = div.dataset.appId;
var myName = div.dataset.myname;
//设置值
div.dataset.appId = 23456;
div.dataset.myname = "Michael";
//有没有"myname"值呢？
if (div.dataset.myname){
	console.log("Hello, " + div.dataset.myname);
}

*/

/*


 insertAdjacentHTML() 方法
插入标记的最后一个新增方式是 insertAdjacentHTML() 方法。这个方法最早也是在IE中出现的，
它接收两个参数：插入位置和要插入的 HTML 文本。第一个参数必须是下列值之一：
 "beforebegin" ，在当前元素之前插入一个紧邻的同辈元素；
 "afterbegin" ，在当前元素之下插入一个新的子元素或在第一个子元素之前再插入新的子元素；
 "beforeend" ，在当前元素之下插入一个新的子元素或在最后一个子元素之后再插入新的子元素；
 "afterend" ，在当前元素之后插入一个紧邻的同辈元素。
注意，这些值都必须是小写形式。第二个参数是一个 HTML 字符串（与 innerHTML 和 outerHTML
的值相同），如果浏览器无法解析该字符串，就会抛出错误。以下是这个方法的基本用法示例。
//作为前一个同辈元素插入
element.insertAdjacentHTML("beforebegin", "<p>Hello world!</p>");
//作为第一个子元素插入
element.insertAdjacentHTML("afterbegin", "<p>Hello world!</p>");
//作为最后一个子元素插入
element.insertAdjacentHTML("beforeend", "<p>Hello world!</p>");
//作为后一个同辈元素插入
element.insertAdjacentHTML("afterend", "<p>Hello world!</p>");
支持 insertAdjacentHTML() 方法的浏览器有 IE、Firefox 8+、Safari、Opera 和 Chrome。







*/

/*

scrollIntoView() 可以在所有 HTML 元素上调用，通过滚动浏览器窗口或某个容器元素，调用
元素就可以出现在视口中。
//让元素可见
document.forms[0].scrollIntoView();

支持 scrollIntoView() 方法的浏览器有 IE、Firefox、Safari 和 Opera。
*/


/*

调用 contains() 方法的应该是祖先节点，
也就是搜索开始的节点，这个方法接收一个参数，即要检测的后代节点。如果被检测的节点是后代节点，
该方法返回 true ；否则，返回 false 。以下是一个例子：
console.log(document.documentElement.contains(document.body)); //true

*/
 检测元素标签是否包含
 function contains(refNode, otherNode){
if (typeof refNode.contains == "function" &&
(!client.engine.webkit || client.engine.webkit >= 522)){
return refNode.contains(otherNode);
} else if (typeof refNode.compareDocumentPosition == "function"){
return !!(refNode.compareDocumentPosition(otherNode) & 16);
} else {
var node = otherNode.parentNode;
do {
if (node === refNode){
return true;
} else {
node = node.parentNode;
}
} while (node !== null);
return false;
}
}






























