###构造函数
function Foo()
{
	this.name = 'name';
	this.year = 1234;
	console.log(this);
}

var foo = new Foo(); // this => Foo
Foo();               // this => Window

###函数作为对象的一个属性
var obj =
{
	x : 10;
	fn: function()
	{
		console.log(this);
		console.log(this.x);
	}
}

obj.fn();        // this => Object
var f1 = obj.fn; // this => Window

###call(),apply()
无需多说,this就是传入的对象,没传就是全局对象Window;

###全局环境下,普通函数调用,this就是Window
var fn = function()
{
	console.log(this);
}
fn();       // this => Window

var obj = 
{
	fn:function()
	{
		function f()
		{
			console.log(this);
		}
	}
}
obj.fn(); // 虽然f在obj.fn中定义,但仍然是个普通函数,所以this => Window
