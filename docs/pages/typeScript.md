### TypeScript基础

### 1.安装
```
npm install -g typescript
```

### 2.将 TypeScript 转换为 JavaScript 代码
```
tsc test.ts
```

### 3.使用 node 命令来执行 test.js 文件
```
$ node test.js 
```

### 4.基础类型以及声明
1.任意类型	any	声明为 any 的变量可以赋予任意类型的值。
2.数字类型	number	双精度 64 位浮点值。它可以用来表示整数和分数。
```
let binaryLiteral: number = 0b1010; // 二进制
let octalLiteral: number = 0o744;    // 八进制
let decLiteral: number = 6;    // 十进制
let hexLiteral: number = 0xf00d;    // 十六进制
```
3.字符串类型	string	一个字符系列，使用单引号（'）或双引号（"）来表示字符串类型。反引号（`）来定义多行文本和内嵌表达式。
```
let name: string = "Runoob";
let years: number = 5;
let words: string = `您好，今年是 ${ name } 发布 ${ years + 1} 周年`;
```
4.布尔类型	boolean	表示逻辑值：true 和 false。
```
let flag: boolean = true;
```
5.数组类型	声明变量为数组。
```
// 在元素类型后面加上[]
let arr: number[] = [1, 2];// 或者使用数组泛型
let arr: Array<number> = [1, 2];
//元组	元组类型用来表示已知元素数量和类型的数组，各元素的类型不必相同，对应位置的类型需要相同。
let x: [string, number];x = ['Runoob', 1];    // 运行正常
x = [1, 'Runoob'];    // 报错console.log(x[0]);    // 输出 Runoob
```
6.枚举	enum	枚举类型用于定义数值集合。
```
enum Color {Red, Green, Blue};
let c: Color = Color.Blue;
console.log(c);    // 输出 2
```
7.void	用于标识方法返回值的类型，表示该方法没有返回值。
```
function hello(): void {  
  alert("Hello Runoob");
}
```
8.null  表示对象值缺失

9.undefined 	用于初始化变量为一个未定义的值

10.never  是其它类型（包括 null 和 undefined）的子类型，代表从不会出现的值


### 5.TypeScript 联合类型
格式：Type1|Type2|Type3 
```
var val:string|number 
```

### 6.TypeScript 接口
接口是一系列抽象方法的声明，是一些方法特征的集合，这些方法都应该是抽象的，需要由具体的类去实现，然后第三方就可以通过这组抽象方法调用，让具体的类执行具体的方法。

接口定义：interface interface_name { }

接口和数组：eg:
```
  interface namelist {    
  [index:number]:string 
  }  
  var list2:namelist = ["John",1,"Bran"] // 错误元素 1 不是 string 类型
  interface ages {    [index:string]:number }  
  var agelist:ages; agelist["John"] = 15   // 正确 agelist[2] = "nine"   // 错误
```

单接口继承语法格式：
Child_interface_name extends super_interface_name
```
  interface Person {   
    age:number
  }  
  interface Musician extends Person {   
    instrument:string 
  }  
  var drummer = <Musician>{}; 
  drummer.age = 27 drummer.instrument = "Drums" 
  console.log("年龄:  "+drummer.age)
  console.log("喜欢的乐器:  "+drummer.instrument)
```

多接口继承语法格式:
Child_interface_name extends super_interface1_name, super_interface2_name,…,super_interfaceN_name
```
  interface IParent1 {  
    v1:number 
  }  
  interface IParent2 {     
    v2:number 
  }  
  interface Child extends IParent1, IParent2 { } 
  var Iobj:Child = { v1:12, v2:23} 
  console.log("value 1: "+Iobj.v1+" value 2: "+Iobj.v2)
```









