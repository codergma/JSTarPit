/* 
 执行上下文环境:在执行代码之前，把将要用到的所有的变量都事先拿出来，有的直接赋值了，有的先用undefined占个空。
*/

// 全局环境下的代码段
// (1)
console.log(a); // Uncaught ReferenceError: a is not defined
// (2)
console.log(a); // undefined
var a;
// (3)
console.log(a); // undefined
var a =10;
// (4)
console.log(f1); // function f1(){}
function f1(){}; // 函数声明
// (5)
console.log(f2); // undefined
var f2 = function (){}; // 函数表达式

/* 
总结 : 在准备阶段做了什么事情
变量: 进行了声明, 默认值是undefined
函数表达式:进行了声明,默认值是undefined
函数声明: 进行了赋值
this: 进行了赋值
*/

// 函数作用域
function f1(x)
{
	console.log(arguments); // 10 arguments变量和函数的参数都已经被赋值
	console.log(x);         // 10
}
f1(10);
// 以上代码展示了在函数体的语句执行之前，arguments变量和函数的参数都已经被赋值. 从这里可以看出，函数每被调用一次，都会产生一个新的执行上下文环境。 因为不同的调用可能就会有不同的参数;


var a = 10;
function fn()
{
	console.log(a); // a是自由变量,函数创建时,就确定了a要取值的作用域
}

function bar(f)
{
	var a = 20;
	f(); // 打印10
}
bar(fn);
/*
总结: 在准备阶段(代码执行之前)做了什么事
arguments: 赋值
参数: 赋值
自由环境变量: 赋值
*/



