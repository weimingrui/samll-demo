  
  
  /*BOM（浏览器对象模型） 的核心对象是 window ，它表示浏览器的一个实例。在浏览器中， window 对象有双重角色，
它既是通过 JavaScript 访问浏览器窗口的一个接口，又是 ECMAScript 规定的 Global 对象。这意味着
在网页中定义的任何一个对象、变量和函数，都以 window 作为其 Global 对象，因此有权访问
parseInt() 等方法*/
 
 
 /*如果页面中包含框架，则每个框架都拥有自己的 window 对象，并且保存在 frames 集合中。在 frames
集合中，可以通过数值索引（从 0 开始，从左至右，从上到下）或者框架名称来访问相应的 window 对
象。每个 window 对象都有一个 name 属性，其中包含框架的名称*/
 window.frames[0] 
 window.frames["topFrame"]
 window.parent.parent.frames[0]
 /*框架有关的对象是 self,parent,top ，它始终指向 window ；实际上， self 和 window 对象可以互
换使用。
 引入 self 对象的目的只是为了与 top 和 parent 对象对应起来
 所有这些对象都是 window 对象的属性，可以通过 window.parent 、 window.top 等形式来访问*/
 
 //窗口位置
 var leftPos = (typeof window.screenLeft == "number") ?
	window.screenLeft : window.screenX;
 var topPos = (typeof window.screenTop == "number") ?
	window.screenTop : window.screenY;
	
/*使用 moveTo()和 moveBy() 方法倒是有可能将窗口精确地移动到一个新位置。这两个方法都接收两个参数，其中
moveTo() 接收的是新位置的 x 和 y 坐标值，而 moveBy() 接收的是在水平和垂直方向上移动的像素数。*/
	
//将窗口移动到屏幕左上角
window.moveTo(0,0);
//将窗向下移动 100 像素
window.moveBy(0,100);
//将窗口移动到(200,300)
window.moveTo(200,300);
//将窗口向左移动 50 像素
window.moveBy(-50,0);

/*
跨浏览器确定一个窗口的大小不是一件简单的事。IE9+、Firefox、Safari、Opera 和 Chrome 均为此提
供了 4个属性： innerWidth 、 innerHeight 、 outerWidth 和 outerHeight 。在 IE9+、Safari和 Firefox
中， outerWidth 和 outerHeight 返回浏览器窗口本身的尺寸（无论是从最外层的 window 对象还是从
某个框架访问）。在Opera中，这两个属性的值表示页面视图容器的大小。而innerWidth 和 innerHeight
则表示该容器中页面视图区的大小（减去边框宽度）。在 Chrome 中， outerWidth 、 outerHeight 与
innerWidth 、 innerHeight 返回相同的值，即视口（viewport）大小而非浏览器窗口大小。*/

	var pageWidth = window.innerWidth,
	pageHeight = window.innerHeight;
	if (typeof pageWidth != "number"){
		if (document.compatMode == "CSS1Compat"){
			pageWidth = document.documentElement.clientWidth;
			pageHeight = document.documentElement.clientHeight;
		} else {
			pageWidth = document.body.clientWidth;
			pageHeight = document.body.clientHeight;
		}
	}
/*
使用 resizeTo() 和 resizeBy() 方法可以调整浏览器窗口的大小。这两个方法都接收两个
参数，其中 resizeTo() 接收浏览器窗口的新宽度和新高度，而 resizeBy() 接收新窗口与原窗口的宽
度和高度之差。
*/	
//调整到 100×100
window.resizeTo(100, 100);
//调整到 200×150
window.resizeBy(100, 50);
//调整到 300×300
window.resizeTo(300, 300);


//open方法
//如果给 window.open() 传递的第二个参数并不是一个已经存在的窗口或框架，那么该方法就会根
//据在第三个参数位置上传入的字符串创建一个新窗口或新标签页。
/****第三个参数的设置选项

fullscreen	yes 或 no 表示浏览器窗口是否最大化。仅限IE
height		数值      表示新窗口的高度。不能小于100
left		数值  	  表示新窗口的左坐标。不能是负值
location	yes 或 no 表示是否在浏览器窗口中显示地址栏。不同浏览器的默认值不同。如果
			设置为no，地址栏可能会隐藏，也可能会被禁用（取决于浏览器）
menubar		yes 或 no 表示是否在浏览器窗口中显示菜单栏。默认值为 no
resizable 	yes 或 no 表示是否可以通过拖动浏览器窗口的边框改变其大小。默认值为 no
scrollbars	yes 或 no 表示如果内容在视口中显示不下，是否允许滚动。默认值为 no
status		yes 或 no 表示是否在浏览器窗口中显示状态栏。默认值为 no
toolbar		yes 或 no 表示是否在浏览器窗口中显示工具栏。默认值为 no
top			数值  表示新窗口的上坐标。不能是负值
width		数值  表示新窗口的宽度。不能小于100
*/
var wroxWin = window.open("http://www.wrox.com/","wroxWindow",
"height=400,width=400,top=10,left=10,resizable=yes");
//调整大小
wroxWin.resizeTo(500,500);
//移动位置
wroxWin.moveTo(100,100);
//调用 close() 方法还可以关闭新打开的窗口。
wroxWin.close();
/*但是，这个方法仅适用于通过 window.open() 打开的弹出窗口。对于浏览器的主窗口，如果没有
得到用户的允许是不能关闭它的。不过，弹出窗口倒是可以调用 top.close() 在不经用户允许的情况
下关闭自己。弹出窗口关闭之后，窗口的引用仍然还在，但除了像下面这样检测其 closed 属性之外，
已经没有其他用处了。*/
wroxWin.opener = null;
//将新创建的标签页的 opener 属性设置为 null ，即表示在单独的进程中运行新标签页,两个 window 对象之间不需要彼此通信





//location
// 
/*  属性
hash  "#contents"
	返回URL中的hash（#号后跟零或多个字符），如果URL
	中不包含散列，则返回空字符串
host  "www.wrox.com:80"
	返回服务器名称和端口号（如果有）
hostname  "www.wrox.com"
	返回不带端口号的服务器名称
href  "http:/www.wrox.com"
	返回当前加载页面的完整URL。而location对象的
	toString()方法也返回这个值
pathname  "/WileyCDA/"
	返回URL中的目录和（或）文件名
port  "8080"
	返回URL中指定的端口号。如果URL中不包含端口号，则
	这个属性返回空字符串
protocol  "http:"
	返回页面使用的协议。通常是http:或https:
search  "?q=javascript"
	返回URL的查询字符串。这个字符串以问号开头
*/

/*
location.assign("http://www.wrox.com");
这样，就可以立即打开新 URL 并在浏览器的历史记录中生成一条记录。如果是将 location.href
或 window.location 设置为一个 URL 值，也会以该值调用 assign() 方法。例如，下列两行代码与
显式调用 assign() 方法的效果完全一样。
window.location = "http://www.wrox.com";
location.href = "http://www.wrox.com";
*/

// 方法： load, replace





//   navigator

//常用的userAgent, plugins,appVersion
/*
Firefox 2为 navigator 对象新增了 registerContentHandler() 和 registerProtocolHandler() 方
法（这两个方法是在 HTML5 中定义的，相关内容将在第 22 章讨论）。这两个方法可以让一个站点指明
它可以处理特定类型的信息。随着 RSS 阅读器和在线电子邮件程序的兴起，注册处理程序就为像使用桌
面应用程序一样默认使用这些在线应用程序提供了一种方式。
navigator.registerContentHandler("application/rss+xml",
"http://www.somereader.com?feed=%s", "Some Reader");
navigator.registerProtocolHandler("mailto",
"http://www.somemailclient.com?cmd=%s", "Some Mail Client");
*/


//screen
/*
 screen 对象基本上只
用来表明客户端的能力，其中包括浏览器窗口外部的显示器的信息，如像素宽度和高度等
availHeight  availWidth
window.resizeTo(screen.availWidth, screen.availHeight);
许多浏览器都会禁用调整浏览器窗口大小的能力，因此上面这行代码不一定在所
有环境下都有效。
涉及移动设备的屏幕大小时，情况有点不一样。运行 iOS 的设备始终会像是把设备竖着拿在手里一
样，因此返回的值是 768×1024。而 Android设备则会相应调用 screen.width 和 screen.height 的值。
*/




//history
/*
//后退一页
history.go(-1);
//前进一页
history.go(1);
//前进两页
history.go(2);
//后退一页
history.back();
//前进一页
history.forward();


*/

/*

	top 对象始终指向最外围的框架，也就是整个浏览器窗口。
 parent 对象表示包含当前框架的框架，而 self 对象则回指 window 。
  使用 location 对象可以通过编程方式来访问浏览器的导航系统。设置相应的属性，可以逐段
或整体性地修改浏览器的 URL。
  调用 replace() 方法可以导航到一个新 URL，同时该 URL 会替换浏览器历史记录中当前显示
的页面。
 navigator 对象提供了与浏览器有关的信息。到底提供哪些信息，很大程度上取决于用户的浏
览器；不过，也有一些公共的属性（如 userAgent ）存在于所有浏览器中。

*/



































































