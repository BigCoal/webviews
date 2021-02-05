
### ES6(ES 2015)

## 一、let 和const
变量声明

```
let a;
let b,c,d ;
let e=100;
let f=521,g="12334",h=[];
```

let的三大特性：
             1)变量不能重复声明
             2）块级作用域
             3)不存在变量提升
             4)不影响作用域链
             
```
console.log(song)
let song="123"
```

```
{
    let a="123"
    function fn(){
        console.log(a)
    }
}



```
const的三大特点：
              1）一定要赋值初始值
              2）一般常量是大写的
              3）常量不可以修改
              4）块级作用域
              5）对于数组和对象的元素修改，不算对常量的修改
              
              
              
```
const ARR=['1','1']
ARR.push("2")
const OBJ={
    name:"z张三"
}
OBJ.a="123"

```
# 总结引用类型相关
对于简单类型的数据（数值、字符串、布尔值），值就保存在变量指向的那个内存地址，因此等同于常量。但对于复合类型的数据（主要是对象和数组），变量指向的内存地址，保存的只是一个指向实际数据的指针，const只能保证这个指针是固定的（即总是指向另一个固定的地址
## 二、解构赋值

1.数组的解构赋值

```
 const ARR=['张三','李四']
let [a,b]=ARR
``` 

对象的解构赋值

```
const obj={
    name:"小明",
    age：12，
    play：function(){
        console.log("玩滑板")
    }
}

let {name,age,play}=obj
play()//直接调用

```

## 三、模版字符串


```
let str=`马冬梅啊`
typeof(str)==string

let strs=`${name}`
```

1）可以换行
2）可以拼接变量

## 四、箭头函数
1）this是静态的，this始终指向函数声明是所在作用域
   
```
function getName(){
    console.log(this.name);
}
function getName1()=>{
    console.log(this.name);
}

windows.name="马冬梅"
const makeName={
    name:"麻小"
}

直接调用
getName()//"马冬梅"
getName1()//"马冬梅"


call方法改变this的值
getName.call(makeName)//"麻小"
getName1.call(makeName)//"马冬梅"


```
2）不能作为构造函数实例化对象

```
let person=(name,age)=>{
    this.name=name;
    this.age=age;
}
let student=new person("马冬梅"，11)
console.log(student)//报错
```
3）不能使用arguments变量

```
let fn=()=>{
    console.log(arguments)
}

fn(1,2)//报错
```
4）尖头函数的简写
省略小括号：形参有且只有一个
省略大括号：代码只有一条语句的时候，可以将花括号和return去掉

```
const result=arr.filter(item=>item%2===0)
```

适用于与this无关的回调

# 总结this的相关

1.普通函数调用

这个情况没特殊意外，就是指向全局对象-window。

```
/*普通函数调用*/
var name = "张三";
function fn(){
    console.log(this.name);//张三
}
fn();
```


1. 对象函数调用

哪个函数调用，this指向哪里。

```
/*对象函数调用*/
let name='程新松';
let obj={
    id:1,
    fn:function(){
        console.log(this.name);  //undefined
        console.log(this.id);   //1
    }
}
obj.fn();

/**因为 this 指向 obj */
```

```
/*需要注意的情况*/
let obj1={
    a:111
}
let obj2={
    a:222,
    fn:function(){
        console.log(this.a);
    }
}
obj1.fn=obj2.fn;
obj1.fn();  //111
```
3. 构造函数调用

```
let structureClass=function(){
    this.name='111';
}
let subClass1=new structureClass();
console.log(subClass1.name);//111

let subClass=new structureClass();
subClass.name='222';
console.log(subClass.name);//222
```
4.apply和call调用

```
改变了this的指向
/*apply和call调用*/
let obj1={
    name:'obj1111'
};
let obj2={
    name:'obj2222',
    fn:function(){
        console.log(this.name);
    }
}
obj2.fn.call(obj1);//obj1111
/**此时虽然是 obj2 调用方法，但是使用 了 call ，动态的把 this 指向到 obj1 。相当于这个 obj2.fn 这个执行环境是 obj1 。*/

/**call 和 apply 两个主要用途：

1.改变 this 的指向（把 this 从 obj2 指向到 obj1 ）

2.方法借用（ obj1 没有 fn ，只是借用 obj2 方法）*/
```


```
2、call与apply区别

 call 和 apply 的作用，完全一样，唯一的区别就是在参数上面。

call 接收的参数不固定，第一个参数是函数体内 this 的指向，第二个参数以下是依次传入的参数。

apply接收两个参数，第一个参数也是函数体内 this 的指向。第二个参数是一个集合对象（数组或者类数组）

/*apply和call区别*/
let fn2=function(a,b,c){
    console.log(a,b,c);
}
let arrArray=[1,2,3];
fn2.call(window,arrArray);//[1, 2, 3] undefined undefined
fn2.apply(window,arrArray);//1,2,3
```

## 五、参数默认值问题
形参初始值(具有默认值的一般位置放在后面‘潜规则’)

```
function add(a,b,c=10){
    return a+b+c
}

```

## 六、引入 rest参数，用于获取函数的实参

```
function data(...args){
console.log(args)//是个数组可以使用数组方法
}
data(1,2,3)
```
//语法限制必须使用在最后一位不然报错

```
function data (a,b,...args){
    
}
data(1,2,3,4)
```
## 七、扩展运算符
[...]可以讲数组转换成用逗号隔开的参数序列

```
const movie=['史密斯夫妇'，'无间道'，'无间道2']；// =>'史密斯夫妇'，'无间道','无间道2'



function play(){
    console.log(arguments);
}

play(...movie)
```
1)数组合并

```
const arr1=[1,2,3]
cosnt arr2=[4,5,6]
const arr3=arr1.concat(arr2)
const arr4=[...arr1,...arr2]


```
2)数组的克隆

```
const arr1=[1,2,3]
cosnt arr2=[...arr1]

```
3)伪数组变成真数组

```
<div></div>
<div></div>
<div></div>


const divs=document.queryselectorAll('div')
cosnt divArr=[...divs]
```
## 八、symbol
引入的一种新的原始数据类型,表示独一无二的值
- 特点:
1)symbol的值是唯一的,解决命名冲突
2)不可以与其他数据进行运算
3)不能用for...in循环遍历,但可以使用reflect.ownkeys来获取所有键名
```
//创建symbol
let s1=Symbol()
console.log(s1,typeof s1)
//添加标识的symbol
let s2=Symbol('张三');
let s3=Symbol('张三');

console.log(s2===s3) //false

//使用Symbol.for创建,函数对象,
let s4=Symbol.for("张三")
let s5=Symbol.for("张三")

console.log(s4===s5)//true 
```



```
<!--所有数据类型有-->

USONB
U//undefind
s//string symbol
o//object
n//null number
b//boolean

```



实际操作

```
要给对象添加方法up 和down

let game ={
    up:"向上",
    down:"向下"
}

let methods={
    up:Symbol(),
    down:Symbol(),
}

game[methods.up]=function(){
    console.log("上升")
}
game[methods.down]=function(){
    console.log("下降")
}
console.log (game)

```
关于symbol的调用问题


```

let game={
    name:"狼人杀",
    [Symbol('say')]:function(){
        console.log("可以发言")
    },
     [Symbol('kill')]:function(){
        console.log("可以杀人")
    }
}
game[(Object.getOwnPropertySymbols(game)[0])]();

/**不建议这样写*/
```
```

  let say = Symbol('say')
        let game = {
            [say]:function(){
                console.log( "我可以发言")
            }
        }
        game[say]()
```
并且 当使用了Symbol作为对象的属性key后不能使用枚举方法
```
   const name=Symbol();
    const age=Symbol();
    const obj={
        [name]:"张三",
        [age]:18,
        sex:"女"
    }
    console.log(obj)
    console.log(Object.keys(obj));//["sex"]  使用symbol定义的属性，不能使用枚举遍历
    for(let p in obj){
        console.log(p); // sex
    }
    // 使用Object的API
    console.log(Object.getOwnPropertyNames(obj));// ["sex"] 得到符号类型代替的属性名，并且为数组

    console.log(Object.getOwnPropertySymbols(obj));// [Symbol(), Symbol()]
    const sybs=Object.getOwnPropertySymbols(obj);
    console.log(sybs[0]===name) //true 引用会相等
    
    //补充：
	1.Object.getOwnPropertyNames()方法返回一个由指定对象的所有自身属性的属性名（包括不可枚举属性但不包括Symbol值作为名称的属性）组成的数组。
    2.Object.getOwnPropertySymbols()方法返回一个给定对象自身的所有 Symbol 属性的数组
```
部分方法(了解)
- Symbol.for()
Symbol.for(key) 会根据给定的键 key，来从运行时的 symbol 注册表中找到对应的 symbol，如果找到了，则返回它，否则，新建一个与该键关联的 symbol，并放入全局 symbol 注册表中。

```
示例：
	Symbol.for("foo"); // 创建一个 symbol 并放入 symbol 注册表中，键为 "foo"
	Symbol.for("foo"); // 从 symbol 注册表中读取键为"foo"的 symbol

	Symbol.for("bar") === Symbol.for("bar"); // true，证明了上面说的
	Symbol("bar") === Symbol("bar"); // false，Symbol() 函数每次都会返回新的一个 symbol

	var sym = Symbol.for("mario");
	sym.toString(); 
	// "Symbol(mario)"，mario 既是该 symbol 在 symbol 注册表中的键名，又是该 symbol 自身的描述字符串

```
- Symbol.keyFor()
Symbol.keyFor(sym) 方法用来获取 symbol 注册表中与某个 symbol 关联的键。
```
示例：
	// 创建一个 symbol 并放入 Symbol 注册表，key 为 "foo"
	var globalSym = Symbol.for("foo"); 
	Symbol.keyFor(globalSym); // "foo"
	
	// 创建一个 symbol，但不放入 symbol 注册表中
	var localSym = Symbol(); 
	Symbol.keyFor(localSym); // undefined，所以是找不到 key 的
	
	// well-known symbol 们并不在 symbol 注册表中
	Symbol.keyFor(Symbol.iterator) // undefined
```
- Symbol.toString()
返回当前 symbol 对象的字符串表示。

symbol 原始值不能转换为字符串，所以只能先转换成它的包装对象，再调用 toString() 方法：

```
Symbol("foo") + "bar";      
	// TypeError: Can't convert symbol to string
	Symbol("foo").toString() + "bar"
	// "Symbol(foo)bar"，就相当于下面的:
	Object(Symbol("foo")).toString() + "bar"
	// "Symbol(foo)bar"
```
- .Symbol.valueOf()
 方法返回当前 symbol 对象所包含的 symbol 原始值。
  在 JavaScript 中，虽然大多数类型的对象在某些操作下都会自动的隐式调用自身的 valueOf() 方法或者 toString() 方法来将自己转换成一个原始值，但 symbol 对象不会这么干，symbol 对象无法隐式转换成对应的原始值

```
Object(Symbol("foo")) + "bar";
	// TypeError: can't convert symbol object to primitive
	// 无法隐式的调用 valueOf() 方法
	
	Object(Symbol("foo")).valueOf() + "bar";
	// TypeError:  can't convert symbol to string
	// 手动调用 valueOf() 方法，虽然转换成了原始值，但 symbol 原始值不能转换为字符串
	
	Object(Symbol("foo")).toString() + "bar";
	// "Symbol(foo)bar"，需要手动调用 toString() 方法才行
```


## 九、迭代器(iterator)
迭代器是一个接口为不同数据结构提供访问机制,任何数据结构使用迭代器都可以使用遍历

1)创造了新的遍历命令for...of循环,iterator主要提供 for...of 消费

2)原生具备iterator接口的数据(可以用for...of遍历)

-    Array
-    Arguments
-    Set
-    Map
-    String
-    TypeArray
-    NodeList
-    
js里面interator接口就是，对象里面的一个属性，属性名叫做，symbol.interator


```
<script>
//声明一个数组
const xiyou=['唐僧'，'猪八戒'，'孙悟空'，'沙僧']
 
 for (let v of xiyou){
     console.log(v)
 }
 
 console.log(xiyou)
 let interator=xiyou[symbol.iterator]()
 console.log (interator)
 console.log (interator.next())
 

工作原理
- 创建一个指针对象，指向当前数据结构的起始位置
- 第一次调用next方法，指针自动窒息那个数据结构的第一个成员
- 接下来不断调用next方法，指针一直往后移动，知道指向最后一个成员
- 每次调用next方法都会返回一个包含done 和done 属性的对象


</script>
```

```
其中 for in ，for of 的区别

1.推荐在循环对象属性的时候，使用for...in,在遍历数组的时候的时候使用for...of
2.for...in循环出的是key，for...of循环出的是value

let aArray = ['a',123,{a:'1',b:'2'}]

for(let index in aArray){
    console.log(`${aArray[index]}`);
}

for(var value of aArray){
    console.log(value);
}

<!--遍历对象-->
var student={
    name:'wujunchuan',
    age:22,
    locate:{
    country:'china',
    city:'xiamen',
    school:'XMUT'
    }
}
for(var key of Object.keys(student)){
    //使用Object.keys()方法获取对象key的数组
    console.log(key+": "+student[key]);
}

```




```


用处：需要自定义遍历数据

let banji={
    name:"一班",
    student:[
    "zhangsSan",
    "liMing",
    "liSi"],
    }
要求是用 for in 数组student里面的数据


for (let v of banji){
    console.log(v)
}
 let banji = {
            name: "一班",
            student: [
                "zhangsSan",
                "liMing",
                "liSi"
            ],
            [Symbol.iterator]() {
                let index = 0
                let _this = this
                return {
                    next: function () {
                        if (index < _this.student.length) {
                            const result = {
                                value: _this.student[index],
                                done: false
                            }
                            index++
                            return result
                        } else {
                            return {
                                value: undefined,
                                done: true
                            }
                        }

                    }
                }
            }
        }

```



## 十、生成器(generator)
生成器函数声明与调用

```

        //生成器是特殊的哈数
 
        // 写法:
        // function* gen() {
        //     console.log("hello")
        // }
        // let inter = gen()
        // console.log(inter) //迭代器对象
        // inter.next()

        /*yield可以理解为函数分隔符也可以简单理解return   执行的话用next()*/
        function* temp() {
            console.log("第1块")
            yield '第1句'
            console.log("第2块")

            yield '第2句'
            console.log("第3块")

            yield '第3句'
            console.log("第4块")

        }
        let inter1 = temp()
        inter1.next()
        inter1.next()
        inter1.next()

       /**也可以使用for of*/

        // for(let v of inter1){
        //     console.log (v)
        // }


```
   //异步编程 纯回调函数(一层调一层)
```
         //  生成器函数参数
        function* temp(arg) {
            console.log(arg)
            let y = yield 111
            console.log(y)
            let z = yield 2
            console.log(z)
            yield 3
        }
        let inter1 = temp(111)
        console.log(inter1.next())
        /**next 方法可以传入实参**/
        // 第二次调用next传入参数将成为第一个yield整体返回结果   
        console.log(inter1.next(222))
        console.log(inter1.next('第二个yield'))
        // inter1.next()
        // inter1.next()
```

```
//异步编程 文件操作 网络操作(ajax request) 数据库
//定时器案例
1s后输出111
2s以后输出222
3s之后执行333
之前定时器:
   setTimeout(() => {
            console.log('111')
            setTimeout(() => {
                console.log('222')
                setTimeout(() => {
                    console.log('333')
                }, 3000)
            }, 2000)

        }, 1000)
        这种如果很多的回调,回调地狱
        解决回到地狱
        function one() {
            setTimeout(() => {
                console.log("111")
                interat.next()
            }, 1000)
        }

        function two() {
            setTimeout(() => {
                console.log("222")
                interat.next()
            }, 2000)
        }

        function three() {
            setTimeout(() => {
                console.log("333")
                interat.next()
            }, 3000)
        }

        function* gen() {
            yield one() 
            yield two() 
            yield three()
        }
        /**调用*/
        let interat=gen()
        interat.next()

```

实例模拟 获取用户数据 订单数据 商品数据

```
  function getUser() {
            setTimeout(() => {
                let data = "用户数据"
                // 传参
                interator.next(data)
            }, 1000)
        }

        function getOrders() {
            setTimeout(() => {
                let data = "订单数据"
                interator.next(data)

            }, 1000)
        }

        function getGoods(e) {
            setTimeout(() => {
                console.log(e)
                let data = "商品数据"
                interator.next(data)

            }, 1000)
        }

        function* gen() {
            let user = yield getUser()
            console.log(user)
            let order = yield getOrders(user)
            console.log(order)
            let goods = yield getGoods(order)
            console.log(goods)

        }
        // 调用
        let interator = gen()
        interator.next()
```



