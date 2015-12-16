
var a =  10;
function fn(x)
{
	console.log( x+a ); // 这里a就是自由变量
}
// 在fn作用域中使用a,但是fn作用域中没有a的定义,a就是自由变量.
// 自由变量的取值要到创建这个函数的那个作用域中寻找,而不是调用的作用域.

var x = 10;
function fn()
{
	console.log(x);  // 自由变量
}
function show(f)
{
	var x =20;
	(function() {
			f();
		}
	)();
}
show(fn);  // 10,而不是20