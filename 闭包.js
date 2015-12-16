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
