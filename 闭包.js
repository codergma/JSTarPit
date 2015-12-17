###函数作为返回值
function fn()
{
	var plus = 10;
	return function f1(x)
	{
		plus += x;
		console.log(plus);
	}
}
var f2 = fn();
f2(15);
f2(15);

###函数作为参数被传递
var plus = 10,
	fn = function(x)
		{
			plus += x;
			console.log(plus);
		};

(function (f){
	var max = 100;
	f(15);
	f(15);
})(fn);



例子:
//(1)
function foo(x) {
    var tmp = 3;
    function bar(y) {
        alert(x + y + (++tmp));
    }
    bar(10);
}
foo(2); // 16
foo(2); // 16
foo(2); // 16


// (2)
function foo(x) {
    var tmp = 3;
    return function (y) {
        alert(x + y + (++tmp));
    }
}
var bar = foo(2); // bar 现在是一个闭包
bar(10);  // 16
bar(10);  // 17
bar(10);  // 18


// (3)
function foo(x) {
var tmp = 3;
return function (y) {
    alert(x + y + tmp);
    x.memb = x.memb ? x.memb + 1 : 1;
    alert(x.memb);
    }
}
var age = new Number(2);
var bar = foo(age); // bar 现在是一个引用了age的闭包
bar(10);
bar(10);
bar(10);

// (4)
function fun(n,o) {
  console.log(o)
  return {
    fun:function(m){
      return fun(m,n);
    }
  };
}
var a = fun(0);  a.fun(1);  a.fun(2);  a.fun(3);//undefined,0,0,0
var b = fun(0).fun(1).fun(2).fun(3);//undefined,0,1,2
var c = fun(0).fun(1);  c.fun(2);  c.fun(3);//undefined,0,1,1
//问:三行a,b,c的输出分别是什么？