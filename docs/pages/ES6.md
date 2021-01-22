
### ES6(ES 2015)

### 1.let 和const
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
### 2.解构赋值

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

### 3.模版字符串


```
let str=`马冬梅啊`
typeof(str)==string

let strs=`${name}`
```

1）可以换行
2）可以拼接变量

### 4.箭头函数
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



