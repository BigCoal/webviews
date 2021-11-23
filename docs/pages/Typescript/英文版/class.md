# class

TypeScript offers full support for the `class` keyword introduced in ES2015.

TypeScript 提供了对 es2015 中引入的 class 关键字的完全支持。

TypeScript 提供了对 es2015 中引入的 class 关键字的完全支持。

TypeScript 提供了对 es2015 中引入的 class 关键字的完全支持。

As with other JavaScript language features, TypeScript adds type annotations and other syntax to allow you to express relationships between classes and other types.

与其他 JavaScript 语言特性一样，TypeScript 添加了类型注释和其他语法，允许您表达类和其他类型之间的关系。

与其他 JavaScript 语言特性一样，TypeScript 添加了类型注释和其他语法，允许您表达类和其他类型之间的关系。

与其他 JavaScript 语言特性一样，TypeScript 添加了类型注释和其他语法，允许您表达类和其他类型之间的关系。

[](#class-members)Class Members 班级成员

Class Members 班级成员


----------------------------------------------------------

Here’s the most basic class - an empty one:

下面是最基本的类 —— 一个空类:

下面是最基本的类——一个空类:

下面是最基本的类 —— 一个空类:

```ts

class Point {}

[Try](https://www.typescriptlang.org/play/#code/MYGwhgzhAEAKD2BLAdgF2gbwL5A)

尝试


```

This class isn’t very useful yet, so let’s start adding some members.

这个类还不是很有用，所以让我们开始添加一些成员。

这个类还不是很有用，所以让我们开始添加一些成员。

这个类还不是很有用，所以让我们开始添加一些成员。

### [](#fields)Fields 田野

Fields 田野

A field declaration creates a public writeable property on a class:

字段声明在类上创建一个公共可写属性:

字段声明在类上创建一个公共可写属性:

字段声明在类上创建一个公共可写属性:

```ts

class Point {

 x: number;

 y: number;

}

const pt = new Point();

pt.x = 0;

pt.y = 0;

[Try](https://www.typescriptlang.org/play/#code/PTAEAEGcBcCcEsDG0AKsD2AHApraBPASQDt5p4BDAG3gC8Lz1iAuUAM2smwFgAoRKhUiRQKdPGLRQAbz6hQAD1bEArgFsARrgDcc0PmXqtsXbwC+fPoiYxQmKQF5QxbAHdR4yQAoAlKfsAdAqgTgAM-tAB+CGg4UA)

点 {x: number; y: number;} const pt = new Point () ; pt.x = 0; ptey = 0; Try


```

As with other locations, the type annotation is optional, but will be an implicit `any` if not specified.

与其他位置一样，类型注释是可选的，但如果没有指定，则为隐式注释。

与其他位置一样，类型注释是可选的，但如果没有指定，则为隐式注释。

与其他位置一样，类型注释是可选的，但如果没有指定，则为隐式注释。

Fields can also have _initializers_; these will run automatically when the class is instantiated:

字段也可以有初始化器；当类被实例化时，这些会自动运行:

```ts

class Point {

 x = 0;

 y = 0;

}

const pt = new Point();

// Prints 0, 0

``console.log(`${pt.x}, ${pt.y}`);``

[Try](https://www.typescriptlang.org/play/#code/MYGwhgzhAEAKD2BLAdgF2gbwLAChrQA9oBeaABgG5d8BPE8qnAX112HmQnQAd1TkApgHc4SNAAoAlIwD0MuACcUqGGQA05NhwjwQAgHQh4Ac3EADACQZe+gkw1WbNJmelA)

Tsclass Point { x = 0; y = 0; } const pt = new Point () ;//Prints 0,0console. log (‘ ${ pt.x } ，${ ptey }’) ; Try


```

Just like with `const`, `let`, and `var`, the initializer of a class property will be used to infer its type:

就像使用 const、 let 和 var 一样，class 属性的初始化器将用于推断其类型:

```ts

const pt = new Point();

pt.x = "0";

Type 'string' is not assignable to type 'number'.2322Type 'string' is not assignable to type 'number'.`[Try](https://www.typescriptlang.org/play/#code/PTAEAEFMCdoe2gZwFygEwGY1oLACgBjAGwENFFQAFOASwDsAXUAb31FAA9QBeUABgDcbUAE8e-IXgC++EKAC0iggFcGi+fgJw6iJgAcmvOpADuVWowAUASkkGAdF14AiPs4FA)

Tsconst pt = new Point () ; pt.x = “0”; 类型‘ string’不可分配给类型‘ number’。类型‘ string’不可分配给类型‘ number’。试试


```

#### [](#--strictpropertyinitialization)`--strictPropertyInitialization

-- strictPropertyInitialization

The [`strictPropertyInitialization`](https://www.typescriptlang.org/tsconfig#strictPropertyInitialization) setting controls whether class fields need to be initialized in the constructor.

strictPropertyInitialization 设置控制是否需要在构造函数中初始化类字段。

```ts

class BadGreeter {

 name: string;

Property 'name' has no initializer and is not definitely assigned in the constructor.2564Property 'name' has no initializer and is not definitely assigned in the constructor.

}

[Try](https://www.typescriptlang.org/play/#code/PTAEAEFMCdoe2gZwFygEwFYBsAWAsAFADGANgIaKKgBCZAJgOLSSQAuMoA3oaKAHZkAtpFSJW0AJZ8A5gG5CAXyA)

类 BadGreeter { name: string; Property‘ name’没有初始化器，也没有明确地在构造函数中赋值试试


```

```ts

class GoodGreeter {

 name: string;

 constructor() {

 this.name = "hello";

 }

}

[Try](https://www.typescriptlang.org/play/#code/MYGwhgzhAEDiD28AmsBOBTdAXdroG8BYAKGmgDswBbdALmgi1QEtyBzAbhJLOHnMaoArsCzxUACgCUBHmWhYAFswgA6SjWgBeaACJF6ECHi6upaAF8SFoA)

{ name: string; constructor (){ this.name = “ hello”; } Try


```

Note that the field needs to be initialized _in the constructor itself_. TypeScript does not analyze methods you invoke from the constructor to detect initializations, because a derived class might override those methods and fail to initialize the members.

注意，需要在构造函数本身中初始化字段。不会分析您从构造函数中调用的方法来检测初始化，因为派生类可能会覆盖这些方法并且无法初始化成员。

If you intend to definitely initialize a field through means other than the constructor (for example, maybe an external library is filling in part of your class for you), you can use the _definite assignment assertion operator_, `!`:

如果您打算通过构造函数以外的方法 (例如，可能有一个外部库为您填充了类的一部分) 确切地初始化字段，那么您可以使用确定的赋值断言运算符，！:

```ts

class OKGreeter {

 // Not initialized, but no error

 name!: string;

}

[Try](https://www.typescriptlang.org/play/#code/MYGwhgzhAEDyDSBxATgU1QF1c6BvAsAFDTQD0p0AcgPYbQCWAdvRvWCPQF6oAmANNABGAVzqNq0bMmrIiJRmAC2qAIQAuaBAzImAcwDcRAL5A)

没有初始化，但是没有错误名称！: string; } 请尝试


```

### [](#readonly)`readonly

只读的

Fields may be prefixed with the `readonly` modifier. This prevents assignments to the field outside of the constructor.

字段可以用 readonly 修饰符作为前缀。这样可以防止赋值到构造函数之外的字段。

```ts

class Greeter {

 readonly name: string = "world";

 constructor(otherName?: string) {

 if (otherName !== undefined) {

 this.name = otherName;

 }

 }

 err() {

 this.name = "not ok";

Cannot assign to 'name' because it is a read-only property.2540Cannot assign to 'name' because it is a read-only property.

  }

}

const g = new Greeter();

g.name = "also not ok";

Cannot assign to 'name' because it is a read-only property.2540Cannot assign to 'name' because it is a read-only property.`[Try](https://www.typescriptlang.org/play/#code/PTAEAEFMCdoe2gZwFygEwFYAsAGd2cBYAKAGMAbAQ0UVAHFpJIAXGUAbxNFEcoBM4AO3IBPUIMoBbSKkTNoAS0EBzUAF5QAIgDuCcn00BuEl1Ckhc6AFdSzBAAo4zABYwAclMgB+WfKXKASg5TbgUAM1BHF3dPUABCNQ0rQT5IMKVIPiDOYm480BcFRAA6CWl1UCdXaA9pY1y8gF9TZuJTGGh7bJCC5yLS2I1NQSdKgGsjFpJW80E5UFUNQUhtekYWGC765QHyocpyRDhxUbgJwyA)

类 Greeter {readonly name: string = “ world”; constructor (otherName？: string){ if (otherName！{ this.name = otherName; } err (){ this.name = “ not ok”; 不能分配给‘ name’，因为它是只读属性。2540 不能分配给‘ name’，因为它是只读属性。} Const g = new Greeter () ; g.name = “ also not ok”; 不能分配给‘ name’，因为它是只读属性。2540 不能分配给‘ name’，因为它是只读属性。试试


```

### [](#constructors)Constructors

建造者

> Background Reading:  
> [Constructor (MDN)](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes/constructor)  
> 
> 背景阅读：构造函数 (MDN)

Class constructors are very similar to functions. You can add parameters with type annotations, default values, and overloads:

类构造函数与函数非常相似。你可以添加带有类型注释、默认值和重载的参数:

```ts

class Point {

 x: number;

 y: number;

 // Normal signature with defaults

 constructor(x = 0, y = 0) {

 this.x = x;

 this.y = y;

 }

}

[Try](https://www.typescriptlang.org/play/#code/MYGwhgzhAEAKD2BLAdgF2gbwLAChrQA8AuaZAVwFsAjAUwCcBuXfATxPOvqZ2egHo+0AHLw6FMCGgREAc2RhUZOjWgB3RKgAW0ACY0AZmDIhUEXsHjIIqOmWCpRACgLQAvNAAMAGmgs3ngEpMXnwtRAgAOhd3Am58UM1wiL93FjjoAF9cDKA)

{ x: number; y: number;//Normal signature with defaults constructor (x = 0，y = 0){ this.x = x; this.y = y; }


```

```ts

class Point {

 // Overloads

 constructor(x: number, y: string);

 constructor(s: string);

 constructor(xs: any, y?: any) {

 // TBD

 }

}

[Try](https://www.typescriptlang.org/play/#code/MYGwhgzhAEAKD2BLAdgF2gbwLAChrQHoDoB5ANwFMAnEeMAEwl32HmQlSoFdhV4qAFAA8AXNGRcAtgCNqAGmgBPMRyooA5gEoA3M2it2nHn0EQVnDTr0HVx-sLPQwyRQsUB+Mc8WbMe-ETQACoAQgAiegC+uJFAA)

重载 constructor (x: number，y: string) ; constructor (s: string) ; constructor (xs: any，y？: any){//TBD }} Try


```

There are just a few differences between class constructor signatures and function signatures:

类构造函数签名和函数签名只有一些区别:

*   Constructors can’t have type parameters - these belong on the outer class declaration, which we’ll learn about later
*   Constructors can’t have return type annotations - the class instance type is always what’s returned

构造函数不能有类型参数 —— 这些属于外部类声明，我们将了解 laterConstructors 不能有返回类型注释 —— 返回的总是类实例类型

#### [](#super-calls)Super Calls

超级电话

Just as in JavaScript, if you have a base class, you’ll need to call `super();` in your constructor body before using any `this.` members:

就像在 JavaScript 中一样，如果您有一个基类，那么在使用这个类之前，您需要在构造函数体中调用 super ()。委员:

```ts

class Base {

 k = 4;

}

class Derived extends Base {

 constructor() {

 // Prints a wrong value in ES5; throws exception in ES6

 console.log(this.k);

'super' must be called before accessing 'this' in the constructor of a derived class.17009'super' must be called before accessing 'this' in the constructor of a derived class.

    super();

  }

}

[Try](https://www.typescriptlang.org/play/#code/PTAEAEFMCdoe2gZwFygIwHYAMWCcBYAKAGMAbAQ0UVACFLJQBvI0UAa1AF5QAWAbiIBfIkTKVqAERgBLAG6QAJqEgAPAC6QAdgup1EDZoVbE4mxGugBXYmoQAKAJRMWrUCFAAFaNM1rq5UAB3eE0Ac1BZclJLBh9QAFEAZQBWPlA1AAt4QOpVYkgABzVpU1A4pIA2F2NTRDhSSAA6UjhQu0zpREa2BwEjV0RLAphHPtZhQkEgA)

类派生类扩展 Base {constructor (){//print a wrong value in ES5; 抛出 console.log (this.k) 中的异常；在派生类的构造函数中访问‘ this’之前必须调用‘ super’。Super () ; }}


```

Forgetting to call `super` is an easy mistake to make in JavaScript, but TypeScript will tell you when it’s necessary.

在 JavaScript 中，忘记调用 super 是一个很容易犯的错误，但是 TypeScript 会告诉你什么时候需要调用。

### [](#methods)Methods

方法

> Background Reading:  
> [Method definitions](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Method_definitions)  
> 
> 背景阅读：方法定义

A function property on a class is called a _method_. Methods can use all the same type annotations as functions and constructors:

类上的函数属性称为方法。方法可以使用与函数和构造函数相同的所有类型注释:

```ts

class Point {

 x = 10;

 y = 10;

 scale(n: number): void {

 this.x *= n;

 this.y *= n;

 }

}

[Try](https://www.typescriptlang.org/play/#code/MYGwhgzhAEAKD2BLAdgF2gbwLAChrQA9oBeaARgAYBuXfATxPOt1ugmDBAFMAKZALmjIArgFsARlwBOASkEA3JABNMrfKgAWiCADoiAKlLIaefNE3adDQ0JP4AvrntA)

10; y = 10; scale (n: number) : void { this.x * = n; this.y * = n; }


```

Other than the standard type annotations, TypeScript doesn’t add anything else new to methods.

除了标准的类型注释，TypeScript 没有给方法添加任何新的内容。

Note that inside a method body, it is still mandatory to access fields and other methods via `this.`. An unqualified name in a method body will always refer to something in the enclosing scope:

注意，在方法体内部，仍然必须通过以下命令访问字段和其他方法。. 方法体中未限定的名称总是指封闭范围中的某些内容:

```ts

let x: number = 0;

class C {

 x: string = "hello";

 m() {

 // This is trying to modify 'x' from line 1, not the class property

 x = "world";

Type 'string' is not assignable to type 'number'.2322Type 'string' is not assignable to type 'number'.

  }

}

[Try](https://www.typescriptlang.org/play/#code/PTAEAEFMCdoe2gZwFygEwGY1oLACgAbSAF1AA9UA7AVwFsAjGUAXlAAYBuffAYwIENEiUAGFQAb3yhyqRMWgBLSgHMWoAEQALSAQJx1XPFNC0AFAEoJx6SFAAVTQuFPQ8gJ5LVxOCbgATBQAzN1AAcjJQ0ED4WlACJUhQAEYAGlBKOFJibVA+QWEAB3gCmGI3a3I1dQB3BAI-A2MAX3wmoA)

Tslet x: number = 0; class c {x: string = “ hello”; m (){/// 这是试图从第 1 行修改‘ x’，而不是类属性 x = “ world”; 类型‘ string’不能分配给类型‘ number’。2322 Type‘ string’不能分配给类型‘ number’。} 试试


```

### [](#getters--setters)Getters / Setters

Getters/Setters

Classes can also have _accessors_:

类也可以有访问器:

```ts

class C {

 _length = 0;

 get length() {

 return this._length;

 }

 set length(value) {

 this._length = value;

 }

}

[Try](https://www.typescriptlang.org/play/#code/MYGwhgzhAEDC0G8CwAoa0D6ICmA7A5gC4AW0AvNAAwDcq6+2h0OBJAFAJSJ3rQBOjAK59c0EgEsIAOix4ixWmmgBfHhEbM57AG5gQg7F2RL0E6bNakKu-dkXpVKZUA)

{return this.length;} set length (value){ this.length = value; } 请尝试


```

> Note that a field-backed get/set pair with no extra logic is very rarely useful in JavaScript. It’s fine to expose public fields if you don’t need to add additional logic during the get/set operations.
> 
> 注意，有字段支持且没有额外逻辑的 get/set 对在 JavaScript 中很少有用。如果在 get/set 操作期间不需要添加额外的逻辑，那么可以公开公共字段。

TypeScript has some special inference rules for accessors:

对访问器有一些特殊的推理规则:

*   If `get` exists but no `set`, the property is automatically `readonly
*   If the type of the setter parameter is not specified, it is inferred from the return type of the getter
*   Getters and setters must have the same [Member Visibility](#member-visibility)

如果 get 存在但没有设置，则属性自动为 readonly 如果没有指定 setter 参数的类型，则从 getterGetters 的返回类型推断该属性，而 setter 必须具有相同的成员可见性

Since [TypeScript 4.3](https://devblogs.microsoft.com/typescript/announcing-typescript-4-3/), it is possible to have accessors with different types for getting and setting.

自从 TypeScript 4.3 以来，可以使用不同类型的访问器来获取和设置。

```ts

class Thing {

 _size = 0;

 get size(): number {

 return this._size;

 }

 set size(value: string | number | boolean) {

 let num = Number(value);

 // Don't allow NaN, Infinity, etc

 if (!Number.isFinite(num)) {

 this._size = 0;

 return;

 }

 this._size = num;

 }

}

[Try](https://www.typescriptlang.org/play/#code/MYGwhgzhAEAqAWBLAdgc2gbwLAChrQH0JEAvAU2gF5oAGAbl131TIBdpjyAKASgC5oyAK4BbAEZkATpib5oktkMnJorJBAB0RUmQZ5oAX0b6IbDjq4A3MCCFkBEVpJToAPoNETp7sQHtfIGRgyDwy+viB7MIiVNAAcp5SVjZ2PHqy+AD0mdAAIr7IAOTsNiC+AO7xYHEANNAAksgAZiiIrACedWzAxnLQiE3QXACECeJSGogQAGKtrGRc0Tyh2OFyalNanBTU9BlyCqxKyHp9Rjj7G5ra5LHRp4a4BkA)

设置大小 (value: string | Number | boolean){ let num = Number (value) ;//don’t allow NaN，Infinity，etc if (！0; return; } this.size = num; }


```

### [](#index-signatures)Index Signatures

索引签名

Classes can declare index signatures; these work the same as [Index Signatures for other object types](https://www.typescriptlang.org/docs/handbook/2/objects.html#index-signatures):

类可以声明索引签名；它们的工作方式与其他对象类型的索引签名相同:

```ts

class MyClass {

 [s: string]: boolean | ((s: string) => boolean);

 check(s: string) {

 return this[s] as boolean;

 }

}

[Try](https://www.typescriptlang.org/play/#code/MYGwhgzhAECyCeBhcVoG8CwAoa0DaEAXNBAC4BOAlgHYDmAusQEYD2LIApmNdAD7QAKAURIUatAJTQAvAD5ordl2oSA3Nmy5gACw7AA1sOJkqdKZhy5o5DqQCu5HqW2UIBetEgK2nbussAvtgBQA)

[ s: string ] : boolean | ((s: string) = > boolean) ; check (s: string){ return this [ s ] as boolean; } Try


```

Because the index signature type needs to also capture the types of methods, it’s not easy to usefully use these types. Generally it’s better to store indexed data in another place instead of on the class instance itself.

因为索引签名类型还需要捕获方法的类型，所以很难有效地使用这些类型。一般来说，最好将索引数据存储在另一个位置，而不是存储在类实例本身。

[](#class-heritage)Class Heritage

班级文物


-----------------------------------------

Like other languages with object-oriented features, classes in JavaScript can inherit from base classes.

与其他具有面向对象特性的语言一样，JavaScript 中的类可以从基类继承。

### [](#implements-clauses)`implements` Clauses

执行条款

You can use an `implements` clause to check that a class satisfies a particular `interface`. An error will be issued if a class fails to correctly implement it:

您可以使用 implements 子句来检查类是否满足特定的接口。如果类未能正确实现，将发出一个错误:

```ts

interface Pingable {

 ping(): void;

}

class Sonar implements Pingable {

 ping() {

 console.log("ping!");

 }

}

class Ball implements Pingable {

Class 'Ball' incorrectly implements interface 'Pingable'.
  Property 'ping' is missing in type 'Ball' but required in type 'Pingable'.2420Class 'Ball' incorrectly implements interface 'Pingable'.
  Property 'ping' is missing in type 'Ball' but required in type 'Pingable'.

  pong() {

    console.log("pong!");

  }

}

[Try](https://www.typescriptlang.org/play/#code/PTAEAEFMCdoe2gZwFygEwBY0AYCwAoASwDsAXGAMwEMBjSUABRIHMqAjAG3oG8DRQADiwAUASlQA3OIQAmAbgIBfAgRocqiRKADKcYlWihCAWwFdjkMlqbFWnHn0EjRoXvn78aexHC4A6DjhmYQAiIVsAQhDRBXdQZXwE1XVNUAAhKg4OI1NzS1JrFnYuV0cBPWCXNw9QL2Iff0DgsIqomMcExSA)

Tsinterface Pingable {ping () : void; } class Sonar 实现 Pingable { ping (){ console.log (“ ping!”) 实现 Pingable { Class‘ Ball’错误地实现了接口 Pingable。属性‘ ping’在类型‘ Ball’中缺失，但在类型‘ Pingable’中需要。2420 Class‘ Ball’错误地实现了接口‘ Pingable’。属性 “ ping” 在类型 “ Ball” 中缺少，但在类型 “ Pingable” 中需要。Pong (){ console.log (“ pong!”) 尝试一下


```

Classes may also implement multiple interfaces, e.g. `class C implements A, B {`.

类也可以实现多个接口，例如 c 类实现 a，b {。

#### [](#cautions)Cautions

警告

It’s important to understand that an `implements` clause is only a check that the class can be treated as the interface type. It doesn’t change the type of the class or its methods _at all_. A common source of error is to assume that an `implements` clause will change the class type - it doesn’t!

一定要理解 implements 子句只是检查类是否可以被视为接口类型。它根本不会改变类的类型或者它的方法。一个常见的错误来源是假设 implements 子句将改变类类型 —— 它不会！

```ts

interface Checkable {

 check(name: string): boolean;

}

class NameChecker implements Checkable {

 check(s) {

Parameter 's' implicitly has an 'any' type.7006Parameter 's' implicitly has an 'any' type.

    // Notice no error here

    return s.toLowercse() === "ok";

                 any

  }

}

[Try](https://www.typescriptlang.org/play/#code/PTAEAEFMCdoe2gZwFygOwAYMDYCwAoASwDsAXGAMwEMBjSUAYQAtIaBrKgIwBt6BvAqFA0W7ABTEqAW0ipEpaCQDmASlSc4cXlWIBuAgF8CBGtyqJEoAHLTIzVmxihCUgA68ZZS-fZdeoAXwhEQcxRBUAwSFQEGs4UkI6UGI4UBh4aFAWaEgooRzSAFdoYlBEADpSOAAZOAB3GBpESDEIgF4O0AAiODYu-SDo2OiR0AA9AH4oo3wDIA)

接口 Checkable {check (name: string) : boolean; } class NameChecker implements Checkable { check (s){ Parameter‘ s’隐式具有‘ any’类型。// 注意这里没有错误返回 s.toLowercse () = = “ ok”; any }} Try


```

In this example, we perhaps expected that `s`’s type would be influenced by the `name: string` parameter of `check`. It is not - `implements` clauses don’t change how the class body is checked or its type inferred.

在本例中，我们可能预期 s 的类型会受到 check 的 name: string 参数的影响。它不是 - implements 子句不会改变类体的检查方式或者推断出的类型。

Similarly, implementing an interface with an optional property doesn’t create that property:

类似地，实现一个带有可选属性的接口并不会创建该属性:

```ts

interface A {

 x: number;

 y?: number;

}

class C implements A {

 x = 0;

}

const c = new C();

c.y = 10;

Property 'y' does not exist on type 'C'.2339Property 'y' does not exist on type 'C'.`[Try](https://www.typescriptlang.org/play/#code/PTAEAEFMCdoe2gZwFygEwGYME4CwAoASwDsAXGAMwEMBjSUAQVAG8DRQAPVYgVwFsARjADcbUAE8A-N35Doo-AF8CNADZVEiUAGFQhPgAdVkPpDJamrfOw6gAvKAAMC5fhpxiiUqBr3QxSAB3HQAKAEoFGgA6cT8ARmcgA)

接口 a {x: number; y？: number;} class c implements a { x = 0; } const c = new c () ; c.y = 10; Property‘ y’不存在于类型‘ c’。试试


```

### [](#extends-clauses)`extends` Clauses

扩展条款

> Background Reading:  
> [extends keyword (MDN)](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes/extends)  
> 
> 背景阅读：扩展关键字 (MDN)

Classes may `extend` from a base class. A derived class has all the properties and methods of its base class, and also define additional members.

类可以从基类扩展。派生类具有其基类的所有属性和方法，并定义其他成员。

```ts

class Animal {

 move() {

 console.log("Moving along!");

 }

}

class Dog extends Animal {

 woof(times: number) {

 for (let i = 0; i < times; i++) {

 console.log("woof!");

 }

 }

}

const d = new Dog();

// Base class method

d.move();

// Derived class method

d.woof(3);

[Try](https://www.typescriptlang.org/play/#code/MYGwhgzhAECCB2BLAtmE0DeBYAUNayA9gG4CmAFAJSa777CHwSEikB0IhA5uQEQCyJRPC7Q0jLgEJelANy1oAX1zKcuUJBgARbtFIAPAC6l4AExgIUaGnmgB3QoQBm5QylIQAXNHgBXZABGpABO1Ni2+E6EwdDkrIbQiNAAvNAADLKJ0AA80G7IHpmIANTFYQp00AxMLOycPLwOztJyFUoKqqrqjBAJpik+pHbQOjytOAD0E9AAQpCkVeBQBKSGABaEprimbERkVPKT01ohiGT9GssF65vbbE0uAMxyQA)

动物 {move (){ console.log (“ Moving along!”){} class Dog extends Animal { woof (times: number){ for (let i = 0; i < times; i + +){ console.log (“ woof!”)}} const d = new Dog () ;//Base class methodd.move () ;//Derived class methodd.woof (3) ; Try


```

#### [](#overriding-methods)Overriding Methods

覆盖方法

> Background Reading:  
> [super keyword (MDN)](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/super)  
> 
> 背景阅读: super keyword (MDN)

A derived class can also override a base class field or property. You can use the `super.` syntax to access base class methods. Note that because JavaScript classes are a simple lookup object, there is no notion of a “super field”.

派生类还可以重写基类字段或属性。你可以使用管理员。语法来访问基类方法。请注意，由于 JavaScript 类是一个简单的查找对象，因此不存在 “超级字段” 的概念。

TypeScript enforces that a derived class is always a subtype of its base class.

强制派生类始终是其基类的子类型。

For example, here’s a legal way to override a method:

例如，这里有一个合法的方法来覆盖一个方法:

```ts

class Base {

 greet() {

 console.log("Hello, world!");

 }

}

class Derived extends Base {

 greet(name?: string) {

 if (name === undefined) {

 super.greet();

 } else {

 ``console.log(`Hello, ${name.toUpperCase()}`);``

 }

 }

}

const d = new Derived();

d.greet();

d.greet("reader");

[Try](https://www.typescriptlang.org/play/#code/MYGwhgzhAEBCkFNoG8CwAoa0DmAnBCALgBQCUKGWWwA9gHYQ0gIB0IN2xARABIIjsANNADuNXCAAmAQi6kA3JWgBfDKvQZQkGABEEuAJYA3BJOgIAHoQR1JMeBCRpMOfEWJ0wAWwQB+AFzQEISGdNjkzlTQBgBm0B7eSAC8KdAArrYIMQZ0phFKURBpAA76LHgEJAoFKuYgjhQuUbQMTKzsnAAGfAI0wgAkyJ4+LIQ0AKrFpbgAwohkyp3VTSpK6uqa9MHQZknQuSLQeoYmkmSK6JLlblUXVxXuXPhgkvpy8kA)

{greet (){ console.log (“ Hello，world!”)} 类派生扩展基 { greet (名称？: string){ if (name = = = undefined){ super.greet () ; } else { console.log (‘ Hello，${ name.toUpperCase ()}‘ ; }}} const d = new Derived () ; d。问候；问候。问候 (“读者”) ;


```

It’s important that a derived class follow its base class contract. Remember that it’s very common (and always legal!) to refer to a derived class instance through a base class reference:

派生类遵循其基类契约非常重要。请记住，这是非常普遍的 (并且总是合法的！) 通过基类引用来引用派生类实例:

```ts

// Alias the derived instance through a base class reference

const b: Base = d;

// No problem

b.greet();

[Try](https://www.typescriptlang.org/play/#code/MYGwhgzhAEBCkFNoG8CwAoa0DmAnBCALgBQCUKGWWwA9gHYQ0gIB0IN2xARABIIjsANNADuNXCAAmAQi6kA3JWgBfDKvSSEoMPmi0GhaJIBccRIvQB6S9AC094AFdC92xmvQAgiACWkaIQAFkiauD4AbgiS0D4GYHTASEG4NI7YgdBg0ABGiHrgUND4AGYI+AkIGPoQhtmm8BBIALxGFh4AcjTQAA4p2cwAthjZLHgEJApAA)

Ts//Alias 通过基类引用控件 b: Base = d;//No problems. greet () ; Try


```

What if `Derived` didn’t follow `Base`’s contract?

如果派生没有遵循贝斯的合同怎么办？

```ts

class Base {

 greet() {

 console.log("Hello, world!");

 }

}

class Derived extends Base {

 // Make this parameter required

 greet(name: string) {

``Property 'greet' in type 'Derived' is not assignable to the same property in base type 'Base'.
  Type '(name: string) => void' is not assignable to type '() => void'.2416Property 'greet' in type 'Derived' is not assignable to the same property in base type 'Base'.
  Type '(name: string) => void' is not assignable to type '() => void'.

    console.log(`Hello, ${name.toUpperCase()}`);

  }

}

``[Try](https://www.typescriptlang.org/play/#code/PTAEAEFMCdoe2gZwFygEwBYCMA2AsAFADGANgIaKKgBCFkoA3oaKAObSSQAuAFAJSNmLUETgA7RHBKQAdCTiseAIgASkEvIA0oAO4ISAEwCESvgG4hAX0LWChUhSoARGAEsAbpAOhIADy6QYgZUtIj0TAQsIKAAsmQA1vRcABauVAAOZNBkALbcMKAcAI4Arq4cBkLsnLxiuZCoiFzQrmKsAhHCIuKS0nIKPAAGahpw2gAkDHV5MlxwAKrp6TAAwnT8loPmVjZAA)

{greet (){ console.log (“ Hello，world!”){} 类 Derived extends Base {//Make this parameter required greet (name: string){ Property‘ greet’in type‘ Derived’is not able to the same Property in Base type‘ Base’。Type’(name: string) = > void’不能分配给 Type’() = > void’。类型‘ Derived’中的 Property‘ greet’不能分配给基类型‘ Base’中的相同属性。类型’(name: string) = > void’不能分配给 Type’() = > void’。Log (‘ Hello，${ name.toUpperCase ()}‘) ; }}


```

If we compiled this code despite the error, this sample would then crash:

如果我们不顾错误编译了这段代码，这个示例就会崩溃:

```ts

const b: Base = new Derived();

// Crashes because "name" will be undefined

b.greet();

[Try](https://www.typescriptlang.org/play/#code/CYUwxgNghgTiAEkoGdnwEIoQbwLACh54BzOEAFwAoBKALngDcB7AS2AG4CBfA0JORNFTwAIiBgsGIYPBAAPciAB2wNJmQ4e+APTb4AWkNgAruUP6CYJkuTl4AI3rqEAXnhKQAd1HjJ0mpw6egDCMCgAFiBo9uBQxhrwAERKUAC2IInwniwQEA4IxiogAGYsHsAE9gB0pCAUAUA)

Tsconst b: Base = new Derived () ;//crash，因为 “ name” 将无法定义


```

#### [](#initialization-order)Initialization Order

初始化顺序

The order that JavaScript classes initialize can be surprising in some cases. Let’s consider this code:

在某些情况下，JavaScript 类初始化的顺序可能会令人惊讶:

```ts

class Base {

 name = "base";

 constructor() {

 console.log("My name is " + this.name);

 }

}

class Derived extends Base {

 name = "derived";

}

// Prints "base", not "derived"

const d = new Derived();

[Try](https://www.typescriptlang.org/play/#code/MYGwhgzhAEBCkFNoG8CwAoa0B2YC2SAvNAEQBGiJA3BlsAPbYQAuATgK7DP2sAUAlClpZoDJvRAIAdCHoBzXiQCyATxz4kASxgloAamjMAFtqm4C-GpmgBfDHfQZQkGABEErTQDcEAE2gIAB7MCNi+MPAQSGjW5kSkvh7eftT2GBgA9BnQAAqe2Mw6FFEkADQ49MwJST6+JE6MLND+xNgIAO7Q7p61AlRAA)

{name = “ Base”; constructor (){ console.log (“ My name is”+ this.name) ; }} class Derived extends Base { name = “ Derived”; }//Prints “ Base”，而不是 “ Derived“ const d = new Derived () ; Try


```

What happened here?

这里发生了什么？

The order of class initialization, as defined by JavaScript, is:

由 JavaScript 定义的类初始化顺序是:

*   The base class fields are initialized
*   The base class constructor runs
*   The derived class fields are initialized
*   The derived class constructor runs

基类字段初始化基类构造函数运行派生类字段初始化派生类构造函数运行

This means that the base class constructor saw its own value for `name` during its own constructor, because the derived class field initializations hadn’t run yet.

这意味着基类构造函数在自己的构造函数中看到了自己的 name 值，因为派生类字段初始化还没有运行。

#### [](#inheriting-built-in-types)Inheriting Built-in Types

继承内置类型

> Note: If you don’t plan to inherit from built-in types like `Array`, `Error`, `Map`, etc. or your compilation target is explicitely set to `ES6`/`ES2015` or above, you may skip this section
> 
> 注意：如果您不打算继承数组、错误、映射等内置类型，或者您的编译目标明确地设置为 ES6/es2015 或更高，那么您可以跳过这一部分

In ES2015, constructors which return an object implicitly substitute the value of `this` for any callers of `super(...)`. It is necessary for generated constructor code to capture any potential return value of `super(...)` and replace it with `this`.

在 es2015 中，返回对象的构造函数隐式地用这个值替换任何 super (...) 调用方。生成的构造函数代码必须捕获 super (...) 的任何潜在返回值，并将其替换为这个返回值。

As a result, subclassing `Error`, `Array`, and others may no longer work as expected. This is due to the fact that constructor functions for `Error`, `Array`, and the like use ECMAScript 6’s `new.target` to adjust the prototype chain; however, there is no way to ensure a value for `new.target` when invoking a constructor in ECMAScript 5. Other downlevel compilers generally have the same limitation by default.

因此，子类化 Error、 Array 和其他元素可能无法正常工作。这是因为 Error，Array 和类似的构造函数使用 ECMAScript 6 的 new.target 来调整原型链；然而，当调用 ECMAScript 5 中的构造函数时，无法确保 new.target 的值。默认情况下，其他底层编译器通常具有相同的限制。

For a subclass like the following:

对于下面这样的子类:

```ts

class MsgError extends Error {

 constructor(m: string) {

 super(m);

 }

 sayHello() {

 return "hello " + this.message;

 }

}

[Try](https://www.typescriptlang.org/play/#code/MYGwhgzhAECyEHMCiAnFB7F0CmAPALtgHYAmMqGWA3gLABQ00w6RE+KArsPpgBQC2ALmhsUASyIIAlNFoNGIjgAdsKAVIDc9RgF9tIsAE8AEthAh0vGXIXQU2fBxRFoAIgAWZi2+gBqaPjuYhAAdPzYUGAI2FryenQ6QA)

类 MsgError 扩展了 Error {constructor (m: string){ super (m) ; } sayHello (){ return “ hello”+ this.message; } Try


```

you may find that:

你可能会发现:

*   methods may be `undefined` on objects returned by constructing these subclasses, so calling `sayHello` will result in an error.
*   `instanceof` will be broken between instances of the subclass and their instances, so `(new MsgError()) instanceof MsgError` will return `false`.

对于通过构造这些子类返回的对象，方法可能没有定义，因此调用 sayHello 将导致 error.instanceof 在子类的实例和它们的实例之间被中断，因此 (new MsgError ()) instanceof MsgError 将返回 false。

As a recommendation, you can manually adjust the prototype immediately after any `super(...)` calls.

作为建议，您可以在任何 super (...) 调用之后立即手动调整原型。

```ts

class MsgError extends Error {

 constructor(m: string) {

 super(m);

 // Set the prototype explicitly.

 Object.setPrototypeOf(this, MsgError.prototype);

 }

 sayHello() {

 return "hello " + this.message;

 }

}

[Try](https://www.typescriptlang.org/play/#code/MYGwhgzhAECyEHMCiAnFB7F0CmAPALtgHYAmMqGWA3gLABQ00w6RE+KArsPpgBQC2ALmhsUASyIIAlNFoNGIjgAdsKAVIDc9egugB6PdADK2fNHwALbNCUYe+AJ4qcuJSDHAx+EA4B0OhQB5ACMAK2xuXwhTAAU7dEcVQIAzXksxCAAaOEQKTF9bBISnbE0AgF9teQgwBwAJbBAQdF4ZOV0UUw4UImgAIism9H7oAGpzCwzffmwoMARsLXlKunKgA)

Tsclass MsgError 扩展了 Error {constructor (m: string){ super (m) ;// 设置原型。(this，MsgError.prototype) ; } sayHello (){ return “ hello”+ this.message; }


```

However, any subclass of `MsgError` will have to manually set the prototype as well. For runtimes that don’t support [`Object.setPrototypeOf`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/setPrototypeOf), you may instead be able to use [`__proto__`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/proto).

但是，MsgError 的任何子类都必须手动设置原型。对于不支持 Object.setPrototypeOf 的运行时，您可以使用 _ proto _。

Unfortunately, [these workarounds will not work on Internet Explorer 10 and prior](https://msdn.microsoft.com/en-us/library/s4esdbwz(v=vs.94).aspx). One can manually copy methods from the prototype onto the instance itself (i.e. `MsgError.prototype` onto `this`), but the prototype chain itself cannot be fixed.

不幸的是，这些变通方法不会在 Internet Explorer 10 和之前起作用。人们可以手动地将方法从原型复制到实例本身 (例如，MsgError.prototype 复制到实例本身) ，但是原型链本身不能修复。

[](#member-visibility)Member Visibility

会员能见度


------------------------------------------------

You can use TypeScript to control whether certain methods or properties are visible to code outside the class.

您可以使用 TypeScript 来控制类以外的代码是否可以看到某些方法或属性。

### [](#public)`public

公众

The default visibility of class members is `public`. A `public` member can be accessed anywhere:

类成员的默认可见性是 public。 public 成员可以在任何地方访问:

```ts

class Greeter {

 public greet() {

 console.log("hi!");

 }

}

const g = new Greeter();

g.greet();

[Try](https://www.typescriptlang.org/play/#code/MYGwhgzhAEDiBOBTRAXR9oG8CwAoa0ADgK4BGIAlsNAOZKoAUAlFngQcAPYB2EnIiAHQhONBgCIAFhQCE4pgG420AL541uLrxS1oAXmjdEAdzj008Zktw1BdZCitA)

{ public Greeter (){ console.log (“ hi!”) ; } const g = new Greeter () ; g.greet () ; Try


```

Because `public` is already the default visibility modifier, you don’t ever _need_ to write it on a class member, but might choose to do so for style/readability reasons.

因为 public 已经是默认的可见性修饰符，所以您不需要在类成员上编写它，但是可能出于样式 / 可读性的原因选择这样做。

### [](#protected)`protected

保护

protected` members are only visible to subclasses of the class they’re declared in.

受保护成员只对它们在其中声明的类的子类可见。

```ts

class Greeter {

 public greet() {

 console.log("Hello, " + this.getName());

 }

 protected getName() {

 return "hi";

 }

}

class SpecialGreeter extends Greeter {

 public howdy() {

 // OK to access protected member here

 console.log("Howdy, " + this.getName());

 }

}

const g = new SpecialGreeter();

g.greet(); // OK

g.getName();

Property 'getName' is protected and only accessible within class 'Greeter' and its subclasses.2445Property 'getName' is protected and only accessible within class 'Greeter' and its subclasses.`[Try](https://www.typescriptlang.org/play/#code/PTAEAEFMCdoe2gZwFygEwBYMFYCwAoAYwBsBDRRUAcWkkgBcZQBvA0UABwFcAjYgS0KgA5rQYAKAJQs27UITgA7RHGKQAdMTjDxAIgASkYloA0oXaADUoegAt+idcIYA5UgFtIUyQG5ZAX1kOeEZCRgATEVcPL2lWfDlQWnouaEVze10-BNBA-DyCEnJKAGUOSEJ+UmIaOkZoUEgAD0ZFcMpahiZ49m4+QVBbOAB3cIBPKRkc9hBQAHkAaRs4UFJCQkgKThCKiNBPdx4mWxhIWXYFZVUNLR0DEfGzC2s7Bydoz29sxNnEv-+AXIAHog0FgsEBAh5S6IegiUAAXlAikgw1AZQqVRqYnqUmywicOLxoFmiwIBOc9Dcn18QA)

{public Greeter (){ public greet (){ console.log (“ Hello”+ this.getName ()) ; } protected getName (){ return “ hi”; }(“ Hello,”+ this.getName () ; } protected getName (){ return “ hi”; } class SpecialGreeter extends Greeter { public Howdy (){//OK 访问受保护成员 console.log (“ Howdy,”+ this.getName () ; } const g = new SpecialGreeter () ; g.greet () ;//okg.getName () 属性‘ getName’受到保护，只能在类‘ Greeter’及其子类中访问。2445 属性‘ getName’受到保护，并且只能在‘ Greeter’类及其子类中访问。试试


```

#### [](#exposure-of-protected-members)Exposure of `protected` members

受保护成员的暴露

Derived classes need to follow their base class contracts, but may choose to expose a subtype of base class with more capabilities. This includes making `protected` members `public`:

派生类需要遵循其基类契约，但可以选择公开具有更多功能的基类的子类型。这包括使受保护成员公开:

```ts

class Base {

 protected m = 10;

}

class Derived extends Base {

 // No modifier, so default is 'public'

 m = 15;

}

const d = new Derived();

console.log(d.m); // OK

[Try](https://www.typescriptlang.org/play/#code/MYGwhgzhAEBCkFNoG8CwAoa0AOAnA9gC4LDEAm0AttALzQCMADANwYC+GokMAIgrgEsAbggoIAHsQB2ZGPAhI0maAHoV0AHL4q+MgIBmA-gBpoEbWQT6wAVxCFoAmAHJsNgEYgBwZxizU6egBWVnQOdGB8KQgHCjopBAB3aD5BETIACgBKUMjo-BAEADoQfABzDLIiyhzVdQB5AGkgA)

{protected m = 10;} class Derived extends Base {///No modifier，因此默认值是‘ public’m = 15; } const d = new Derived () ; console.log (d.m) ;//OKTry


```

Note that `Derived` was already able to freely read and write `m`, so this doesn’t meaningfully alter the “security” of this situation. The main thing to note here is that in the derived class, we need to be careful to repeat the `protected` modifier if this exposure isn’t intentional.

请注意，Derived 已经能够自由读写 m，因此这并不会有意义地改变这种情况的 “安全性”。这里需要注意的主要事情是，在派生类中，如果这种暴露不是有意的，那么我们需要小心重复 protected 修饰符。

#### [](#cross-hierarchy-protected-access)Cross-hierarchy `protected` access

跨层次保护访问

Different OOP languages disagree about whether it’s legal to access a `protected` member through a base class reference:

不同的 OOP 语言对于通过基类引用访问受保护成员是否合法存在分歧:

```ts

class Base {

 protected x: number = 1;

}

class Derived1 extends Base {

 protected x: number = 5;

}

class Derived2 extends Base {

 f1(other: Derived2) {

 other.x = 10;

 }

 f2(other: Base) {

 other.x = 10;

Property 'x' is protected and only accessible through an instance of class 'Derived2'. This is an instance of class 'Base'.2446Property 'x' is protected and only accessible through an instance of class 'Derived2'. This is an instance of class 'Base'.

  }

}

[Try](https://www.typescriptlang.org/play/#code/PTAEAEFMCdoe2gZwFygEwBYMDYCwAoAYwBsBDRRUAIXMlAG8DRQAHeAF0kM4BNQAPVADsArgFsARjFABeUAEYA3AQC+BEuUoARGAEsAbpB7zQkfpyE9KNRHUb5mbOJ25GBw8VOizQAVmX4akRkFKA60AZGaKbmkJbWtAxMoABm8gAUzgAWMKjhkTxoAJRJDsyg2TAAdPw+8gAMAcxBzClomew50Kg2kCX25RWd1bVyDU2gQSpAA)

1 extends Base {protected x: number = 5;} class Derived2 extends Base { f1 (other: Derived2){ other.x = 10; } f2 (other: Base){ other.x = 10; Property‘ x’是受保护的，只能通过类 derived2 的实例访问。这是一个类‘ Base’的实例。2446 Property‘ x’受保护，只能通过类‘ Derived2’的实例访问。这是类 “ Base” 的一个实例。} 试试


```

Java, for example, considers this to be legal. On the other hand, C# and C++ chose that this code should be illegal.

例如，Java 认为这是合法的。另一方面，c # 和 c + + 选择这段代码应该是非法的。

TypeScript sides with C# and C++ here, because accessing `x` in `Derived2` should only be legal from `Derived2`’s subclasses, and `Derived1` isn’t one of them. Moreover, if accessing `x` through a `Derived1` reference is illegal (which it certainly should be!), then accessing it through a base class reference should never improve the situation.

在这里输入 c # 和 c + + ，因为访问 derived2 中的 x 只能从 derived2 的子类中合法访问，derived1 不是其中之一。此外，如果通过 derived1 引用访问 x 是非法的 (当然应该是非法的！)，然后通过基类引用访问它不应该改善这种情况。

See also [Why Can’t I Access A Protected Member From A Derived Class?](https://blogs.msdn.microsoft.com/ericlippert/2005/11/09/why-cant-i-access-a-protected-member-from-a-derived-class/) which explains more of C#‘s reasoning.

参见为什么我不能从派生类访问受保护的成员？这解释了更多的 c # 的推理。

### [](#private)`private

私人的

private` is like `protected`, but doesn’t allow access to the member even from subclasses:

Private 类似于 protected，但是不允许访问成员，即使是来自子类:

```ts

class Base {

 private x = 0;

}

const b = new Base();

// Can't access from outside the class

console.log(b.x);

Property 'x' is private and only accessible within class 'Base'.2341Property 'x' is private and only accessible within class 'Base'.`[Try](https://www.typescriptlang.org/play/#code/PTAEAEFMCdoe2gZwFygEwGYAsBGAsAFADGANgIaKKgBCFkoA3oaKAA7QCWAbmQC70APUAF5QABgDchAL6EicAHaJeoAEYjQCyAHcadABQBKKQRCgAwmQUByFWSJFIlUADN4AW1BwArr0QcAE3peAAt6UgpEOUVEOBJIADoSOABzfVUEgWMgA)

Tsclass Base {private x = 0;} const b = new Base () ;//can’t access from outside the classconsole.log (b.x) ; Property‘ x’是私有的，只能在类‘ Base’中访问。2341 Property‘ x 是私有的，只能在类‘ Base’中访问。试试


```

```ts

class Derived extends Base {

 showX() {

 // Can't access in subclasses

 console.log(this.x);

Property 'x' is private and only accessible within class 'Base'.2341Property 'x' is private and only accessible within class 'Base'.

  }

}

[Try](https://www.typescriptlang.org/play/#code/PTAEAEFMCdoe2gZwFygEwGYAsBGAsAFADGANgIaKKgBCFkoA3oaKAA7QCWAbmQC70APUAF5QABgDchAL6EQoALRKiAV15KFhUhSoARGN0gATUJAH8Adkaq1E9JgRaIAFnADuADQAUASkbMWUHkAYTILAHJeUDIiIkhKUA4LUEQVACNtSniAliI4C0Q4EkgAOhI4AHMvXmcORBKBHylHUFkCaSA)

Tsclass Derived extends Base {showX (){//can’t access in subclasses console.log (this.x) ; Property‘ x’是私有的，只能在类‘ Base’中访问。2341 Property‘ x’是私有的，只能在类‘ Base’中访问。} 试试


```

Because `private` members aren’t visible to derived classes, a derived class can’t increase its visibility:

因为私有成员对于派生类是不可见的，派生类不能增加它的可见性:

```ts

class Base {

 private x = 0;

}

class Derived extends Base {

Class 'Derived' incorrectly extends base class 'Base'.
  Property 'x' is private in type 'Base' but not in type 'Derived'.2415Class 'Derived' incorrectly extends base class 'Base'.
  Property 'x' is private in type 'Base' but not in type 'Derived'.

  x = 1;

}

[Try](https://www.typescriptlang.org/play/#code/PTAEAEFMCdoe2gZwFygEwBYCMBWAsAFADGANgIaKKgBCFkoA3oaKAA7QCWAbmQC70APUAF5QABgDchAL6FSFKgBEY3SABNQkAfwB2aqrUT0mBFkNFYpBaUA)

派生类派生扩展基类派生类不正确地扩展基类 “基类”。属性 “ x” 在类型 “ Base” 中是私有的，但在类型 “ Derived” 中不是。2415 类 “ Derived” 错误地扩展了基类 “ Base”。属性 “ x” 在类型 “ Base” 中为 private，但在类型 “ Derived” 中不为 private。1; } Try


```

#### [](#cross-instance-private-access)Cross-instance `private` access

跨实例专用访问

Different OOP languages disagree about whether different instances of the same class may access each others’ `private` members. While languages like Java, C#, C++, Swift, and PHP allow this, Ruby does not.

不同的 OOP 语言对同一类的不同实例是否可以访问彼此的私有成员存在分歧。尽管 Java、 c # 、 c + + 、 Swift 和 PHP 等语言允许这样做，但 Ruby 不允许。

TypeScript does allow cross-instance `private` access:

TypeScript 允许跨实例的私有访问:

```ts

class A {

 private x = 10;

 public sameAs(other: A) {

 // No error

 return other.x === this.x;

 }

}

[Try](https://www.typescriptlang.org/play/#code/MYGwhgzhAECC0G8CwAoa0AOAnAlgNzABcBTaAD2gF5oBGABgG5VV0MBXAIxB2GgjAC2xWBAAUAe0IALYlgBccAJSIW6aAHp10AHLjosrOKyr0WYoTZYAdtEkysAOgqUX0aTghOmaaAF9UvkA)

Tsclass a {private x = 10; public sameAs (other: a){//No error return other. x = = this.x; }} 请尝试


```

#### [](#caveats)Caveats

注意事项

Like other aspects of TypeScript’s type system, `private` and `protected` [are only enforced during type checking](https://www.typescriptlang.org/play?removeComments=true&target=99&ts=4.3.4#code/PTAEGMBsEMGddAEQPYHNQBMCmVoCcsEAHPASwDdoAXLUAM1K0gwQFdZSA7dAKWkoDK4MkSoByBAGJQJLAwAeAWABQIUH0HDSoiTLKUaoUggAW+DHorUsAOlABJcQlhUy4KpACeoLJzrI8cCwMGxU1ABVPIiwhESpMZEJQTmR4lxFQaQxWMm4IZABbIlIYKlJkTlDlXHgkNFAAbxVQTIAjfABrAEEC5FZOeIBeUAAGAG5mmSw8WAroSFIqb2GAIjMiIk8VieVJ8Ar01ncAgAoASkaAXxVr3dUwGoQAYWpMHBgCYn1rekZmNg4eUi0Vi2icoBWJCsNBWoA6WE8AHcAiEwmBgTEtDovtDaMZQLM6PEoQZbA5wSk0q5SO4vD4-AEghZoJwLGYEIRwNBoqAzFRwCZCFUIlFMXECdSiAhId8YZgclx0PsiiVqOVOAAaUAFLAsxWgKiC35MFigfC0FKgSAVVDTSyk+W5dB4fplHVVR6gF7xJrKFotEk-HXIRE9PoDUDDcaTAPTWaceaLZYQlmoPBbHYx-KcQ7HPDnK43FQqfY5+IMDDISPJLCIuqoc47UsuUCofAME3Vzi1r3URvF5QV5A2STtPDdXqunZDgDaYlHnTDrrEAF0dm28B3mDZg6HJwN1+2-hg57ulwNV2NQGoZbjYfNrYiENBwEFaojFiZQK08C-4fFKTVCozWfTgfFgLkeT5AUqiAA).

和 TypeScript 类型系统的其他方面一样，private 和 protected 只在类型检查期间强制执行。

This means that JavaScript runtime constructs like `in` or simple property lookup can still access a `private` or `protected` member:

这意味着 JavaScript 运行时构造，比如 in 或者简单的属性查找，仍然可以访问一个私有或受保护的成员:

```ts

class MySafe {

 private secretKey = 12345;

}

[Try](https://www.typescriptlang.org/play/#code/MYGwhgzhAECyCeBlMAzAptA3gWAFDWgAcAnASwDcwAXDCNYYtKgaTXmgF5oBGAJgGYALAFYA3HgC+QA)

12345; }


```

```


js

// In a JavaScript file...

const s = new MySafe();

// Will print 12345

console.log(s.secretKey);

Js// 在 JavaScript 文件中... const s = new MySafe () ;// 将打印 12345console. log (s.secretKey) ;


```

private` also allows access using bracket notation during type checking. This makes `private`-declared fields potentially easier to access for things like unit tests, with the drawback that these fields are _soft private_ and don’t strictly enforce privacy.

Private 还允许在类型检查期间使用括号表示法访问。这使得私有声明的字段可能更容易访问像单元测试这样的东西，但缺点是这些字段是软私有的，并不严格执行隐私。

```ts

class MySafe {

 private secretKey = 12345;

}

const s = new MySafe();

// Not allowed during type checking

console.log(s.secretKey);

Property 'secretKey' is private and only accessible within class 'MySafe'.2341Property 'secretKey' is private and only accessible within class 'MySafe'.

// OK

console.log(s["secretKey"]);

[Try](https://www.typescriptlang.org/play/#code/PTAEAEFMCdoe2gZwFygEwGYAsBGAsAFADGANgIaKKgCyAngMpkBmkoA3oaKAA7QCWANzIAXVokhFokYQGlItUAF5QOTFgCsAbkIBfQoSJwAdomGgqyo5ADuNBs0gAKAJTaChEKABycM2RIkcNaQACagIQCu-EYA5qDCtNysRAAWEgDWfLEGxohwJJAAdIExjoiF4pLScrSu+gSeAPIyOSb5RSVlANoARJVSsvI9ALquQA)

属性‘ secretKey’是私有的，只能在类‘ MySafe’中访问。2341 属性‘ secretKey’是私有的，只能在类‘ MySafe’中访问。//OKconsole.log (s [“ secretKey”]) ; 尝试


```

Unlike TypeScripts’s `private`, JavaScript’s [private fields](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes/Private_class_fields) (`#`) remain private after compilation and do not provide the previously mentioned escape hatches like bracket notation access, making them _hard private_.

与 TypeScripts 的 private 不同，JavaScript 的 private 字段 (#) 在编译之后仍然是私有的，并且不提供前面提到的逃生口，比如括号表示法访问，这使得它们很难被私有化。

```ts

class Dog {

 #barkAmount = 0;

 personality = "happy";

 constructor() {}

}

[Try](https://www.typescriptlang.org/play/#code/MYGwhgzhAEAiD2BzaBvAsAKGtAxAIzACcBrAQQFt4BXAOwBdoBeaABgG5NsAHAU0Ing0wIAJZ0Ank2gAiABZguXcdI4ZO0YIIh1CVYHXiEAFAEpUAX0zmgA)

0; personality = “ happy”; constructor (){} Try


```

```ts

"use strict";

class Dog {

 #barkAmount = 0;

 personality = "happy";

 constructor() { }

}

[Try](https://www.typescriptlang.org/play/#code/PTAEAEBcEMCcHMCmkBcpEGcB2iAekBYAKBAgwAsB7AdwFEBbAS0KIGMAbaDDUAEUvigA3sVCgAxACM4AawCC9SgFcskUAF5QABgDco0AAdEsDJSzR2zAJ4bQAInLQDBq3b1F9rMxkiwlrSEpYAAoASmEAX2IIoA)

Ts“ use strict”; class Dog { # barkamount = 0; personality = “ happy”; constructor (){} Try


```

When compiling to ES2021 or less, TypeScript will use WeakMaps in place of `#`.

当编译成 es2021 或更少时，打字稿将使用 WeakMaps 来代替 # 。

```ts

"use strict";

var _Dog_barkAmount;

class Dog {

 constructor() {

 _Dog_barkAmount.set(this, 0);

 this.personality = "happy";

 }

}

_Dog_barkAmount = new WeakMap();

[Try](https://www.typescriptlang.org/play/#code/PTAEAEBcEMCcHMCmkBcpEGcBMAGAjAKwCwAUCBBgBYD2A7gKIC2AlpKQMYA20GGoAItXigA3qVCgAxACM4AawCCjagFcAdpFABeUDgDc40AAdEsDNTXROrAJ7bQAIkrQjRmw4MlD7CxkiwVdkhqWAAKAEpRAF9SKKA)

Ts “use strict”; var _ Dog _ barkamount; class Dog { constructor (){ _ Dog _ barkamount。设置 (this，0) ; this.personality = “ happy”; } _ Dog _ barkamount = new WeakMap () ; Try


```

If you need to protect values in your class from malicious actors, you should use mechanisms that offer hard runtime privacy, such as closures, WeakMaps, or private fields. Note that these added privacy checks during runtime could affect performance.

如果需要保护类中的值不受恶意操作者的攻击，应该使用提供硬运行时隐私的机制，如闭包、 WeakMaps 或私有字段。请注意，运行时期间这些添加的隐私检查可能会影响性能。

[](#static-members)Static Members

固定成员


-----------------------------------------

> Background Reading:  
> [Static Members (MDN)](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes/static)  
> 
> 背景阅读：静态成员 (MDN)

Classes may have `static` members. These members aren’t associated with a particular instance of the class. They can be accessed through the class constructor object itself:

类可以有静态成员。这些成员不与类的特定实例关联。它们可以通过类构造函数对象本身访问:

```ts

class MyClass {

 static x = 0;

 static printX() {

 console.log(MyClass.x);

 }

}

console.log(MyClass.x);

MyClass.printX();

[Try](https://www.typescriptlang.org/play/#code/MYGwhgzhAECyCeBhcVoG8CwAoa0IBcx8BLYaAD2gF5oAGAbm1wKNOgAcAnYgO3wA0AFAEp0TXNGAB7HhCkgApgDoQUgOaCEySBCXlhjHNAC+2U1mmz5y1Rq0pd+w-Z1KuvASPpA)

{ static x = 0; static printX (){ console.log (MyClass.x) ; } console.log (MyClass.x) ; MyClass.printX () ; Try


```

Static members can also use the same `public`, `protected`, and `private` visibility modifiers:

静态成员还可以使用相同的 public、 protected 和 private 可见性修饰符:

```ts

class MyClass {

 private static x = 0;

}

console.log(MyClass.x);

Property 'x' is private and only accessible within class 'MyClass'.2341Property 'x' is private and only accessible within class 'MyClass'.`[Try](https://www.typescriptlang.org/play/#code/PTAEAEFMCdoe2gZwFygEwGYAsBGAsAFADGANgIaKKgCyAngMLmWgDehooADtAJYBuZAC6RQiQUJ5FQAD1ABeUAAYA3IQC+hInAB2iOCUgA6EnADmACjqMKiQ9ICUyoA)

属性‘ x’是私有的，只能在类‘ MyClass’中访问。2341 Property‘ x 是私有的，只能在类‘ MyClass’中访问。试试


```

Static members are also inherited:

静态成员也可以继承:

```ts

class Base {

 static getGreeting() {

 return "Hello world";

 }

}

class Derived extends Base {

 myGreeting = Derived.getGreeting();

}

[Try](https://www.typescriptlang.org/play/#code/MYGwhgzhAEBCkFNoG8CwAoa0IBcw4EthoBzBHAcQCcFyCA7EgCgEoUMssacBXK+6ACIAEghAgA9tADuEqiAAmggNwdoAXwyb0oSDAAiCKgQBuCBdAQAPHAnoKY8CEjSZoAWwCe1WoUbQAXmhDYzMFADoySho6RlZVdHUgA)

{ static getGreeting (){ return“ Hello world”; } class Derived extends Base { myGreeting = Derived.getGreeting () ; } Try


```

### [](#special-static-names)Special Static Names

特殊静态名称

It’s generally not safe/possible to overwrite properties from the `Function` prototype. Because classes are themselves functions that can be invoked with `new`, certain `static` names can’t be used. Function properties like `name`, `length`, and `call` aren’t valid to define as `static` members:

从函数原型中覆盖属性通常是不安全的 / 不可能的。因为类本身是可以用新名称调用的函数，所以某些静态名称不能使用。函数属性，如名称、长度和调用，无法定义为静态成员:

```ts

class S {

 static name = "S!";

Static property 'name' conflicts with built-in property 'Function.name' of constructor function 'S'.2699Static property 'name' conflicts with built-in property 'Function.name' of constructor function 'S'.

}

[Try](https://www.typescriptlang.org/play/#code/PTAEAEFMCdoe2gZwFygEwDYCcWCwAoAYwBsBDRRUAZVAG8DRREAXU5gS0NADtSBbSKAC8oAERUAhKIDcBAL5A)

{static name = “ s!” 静态属性‘ name’与构造函数‘ s’的内置属性‘ Function.name’冲突。2699 静态属性‘ name’与构造函数‘ s’的内置属性‘ Function.name’冲突试试


```

### [](#why-no-static-classes)Why No Static Classes?

为什么没有静态类？

TypeScript (and JavaScript) don’t have a construct called `static class` the same way C# and Java do.

和 JavaScript 不像 c # 和 Java 那样有一个称为静态类的构造。

Those constructs _only_ exist because those languages force all data and functions to be inside a class; because that restriction doesn’t exist in TypeScript, there’s no need for them. A class with only a single instance is typically just represented as a normal _object_ in JavaScript/TypeScript.

这些结构之所以存在，是因为这些语言强制所有数据和函数都在一个类中；因为在打字稿中不存在这种限制，所以不需要它们。只有一个实例的类通常只在 JavaScript/TypeScript 中表示为普通对象。

For example, we don’t need a “static class” syntax in TypeScript because a regular object (or even top-level function) will do the job just as well:

例如，我们不需要打字稿中的 “静态类” 语法，因为一个常规对象 (甚至是顶级函数) 也可以很好地完成这项工作:

```ts

// Unnecessary "static" class

class MyStaticClass {

 static doSomething() {}

}

// Preferred (alternative 1)

function doSomething() {}

// Preferred (alternative 2)

const MyHelperObject = {

 dosomething() {},

};

[Try](https://www.typescriptlang.org/play/#code/PTAEFUDtIUwYxgZ0QQwE4E9QCJEBcU8BLObUOAGxWQFgAoS6xUAWQwGUDi4BhK5UAG96oUPkIlQAEwD27GQFsYeABZFIAcwAUASiEBfeobr0QoAApoYAMxhorU0FpQU8dyBIBuMUAEYd9NYArpBwxDKQ0nKKymqaugb0pmCWNnYOTi5uaB7E3qAATAEMEfisGAASMBQADnYA8gBGAFbweKAAvEIiUYgxquraeoL6ADRGANxAA)

Ts//Unnecessary“ static”classclass MyStaticClass { static doSomething (){}/Preferred (alternative 1) function doSomething (){}//Preferred (alternative 2) const MyHelperObject = { doSomething (){} ，} ; Try


```

[](#static-blocks-in-classes)`static` Blocks in Classes

类中的静态块


-----------------------------------------------------------------

Static blocks allow you to write a sequence of statements with their own scope that can access private fields within the containing class. This means that we can write initialization code with all the capabilities of writing statements, no leakage of variables, and full access to our class’s internals.

静态块允许您编写具有自己作用域的语句序列，该语句序列可以访问包含类中的私有字段。这意味着我们可以使用编写语句的所有功能来编写初始化代码，不泄露变量，并且可以完全访问类的内部。

```ts

class Foo {

 static #count = 0;

 get count() {

 return Foo.#count;

 }

 static {

 try {

 const lastInstances = loadLastInstances();

 Foo.#count += lastInstances.length;

 }

 catch {}

 }

}

[Try](https://www.typescriptlang.org/play/#code/CYUwxgNghgTiAEAzArgOzAFwJYHtXwhymABkoBnDASVUqnRHIAoBKALnnoE8BtAXQCwAKAD0I+AFopYZBikThkCuXgAxHDngBvYfD3w62MPADEYHGgzwAvPAAMAbmG79AcxBXzl1tpf79cBjIMPjqOAB0ZhaoGE5C-gC+zvH6hljGOin+ehgwXL5Z2f7mtFbQlDR0DCq2hMRkFaX0YIyscUVFYZFeMfAA1LUU1E3V4RAgqK4YABbtHUmFxVAYYNPaC4nCCUA)

0; get count (){ return Foo.# count; } static { try { const lastInstances = loadLastInstances () ; Foo.# count + = lastInstances.length; } catch {}}


```

[](#generic-classes)Generic Classes

通用类


------------------------------------------

Classes, much like interfaces, can be generic. When a generic class is instantiated with `new`, its type parameters are inferred the same way as in a function call:

类，就像接口一样，可以是泛型的。当一个泛型类用 new 实例化时，它的类型参数被推断出来的方式与函数调用相同:

```ts

class Box<Type> {

 contents: Type;

 constructor(value: Type) {

 this.contents = value;

 }

}

const b = new Box("hello!");

 const b: Box<string>

[Try](https://www.typescriptlang.org/play/#code/MYGwhgzhAEBCD2APAPAFQJ4AcCmA+aA3gLABQ00w8AdgC7a0QBc0GOA3KeZVRDQE4BXYDXh8AFADcwIAdmatsASkKdy0GgAsAlhAB03Og2gBeaFJnYOZaAF9SdkqW69oAIxPQq2AO5wkYgCINbBAQeABCAMUrAHoYtWgAPQB+IA)

Tsclass Box < Type > { contents: Type; constructor (value: Type){ this.contents = value; } const b = new Box (“ hello!”); const b: Box


```

Classes can use generic constraints and defaults the same way as interfaces.

类可以像使用接口一样使用泛型约束和默认值。

### [](#type-parameters-in-static-members)Type Parameters in Static Members

静态成员中的类型参数

This code isn’t legal, and it may not be obvious why:

这个代码不合法，原因也不明显:

```ts

class Box<Type> {

 static defaultValue: Type;

Static members cannot reference class type parameters.2302Static members cannot reference class type parameters.

}

[Try](https://www.typescriptlang.org/play/#code/PTAEAEFMCdoe2gZwFygEwGYAMaCwAoAYwBsBDRRUAITgA8AeAFQE8AHSAPlAG8DRREAF1KCAloVAATSADNSAV2KCAaqWLzIqFuwDcBAL5A)

Tsclass Box  { Static defaultValue: Type; Static members can not reference class Type parameters. 2302 Static members can not reference class Type parameters. } 试试


```

Remember that types are always fully erased! At runtime, there’s only _one_ `Box.defaultValue` property slot. This means that setting `Box<string>.defaultValue` (if that were possible) would _also_ change `Box<number>.defaultValue` - not good. The `static` members of a generic class can never refer to the class’s type parameters.

请记住，类型总是被完全擦除！在运行时，只有一个 Box.defaultValue 属性插槽。这意味着设置 Box 。defaultValue (如果可能的话) 也会改变 Box < number > 。默认值 - 不好。泛型类的静态成员永远不能引用类的类型参数。

[](#this-at-runtime-in-classes)`this` at Runtime in Classes

在类中的运行时


----------------------------------------------------------------------

> Background Reading:  
> [this keyword (MDN)](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/this)  
> 
> 背景阅读：这个关键词 (MDN)

It’s important to remember that TypeScript doesn’t change the runtime behavior of JavaScript, and that JavaScript is somewhat famous for having some peculiar runtime behaviors.

重要的是要记住，TypeScript 不会改变 JavaScript 的运行时行为，而且 JavaScript 在某种程度上以具有一些特殊的运行时行为而闻名。

JavaScript’s handling of `this` is indeed unusual:

的处理方式确实不同寻常:

```ts

class MyClass {

 name = "MyClass";

 getName() {

 return this.name;

 }

}

const c = new MyClass();

const obj = {

 name: "obj",

 getName: c.getName,

};

// Prints "obj", not "MyClass"

console.log(obj.getName());

[Try](https://www.typescriptlang.org/play/#code/MYGwhgzhAECyCeBhcVoG8CwAoa0B2YAtgKbQC80ARAspBJQNza4DmxALgHJHEAUAlOma5oAJw4BXUXmjsAFgEsIAOgIkmOaAF9sOrMAD2eCO2jBy+YgHc4SFBAEbDx0wYBGAKwuZNa4gC4qdw9KABphNi4eQOBlSO4ScKwtDWwAejToAAVRBTx2GEpgsPwDU2o7OkpsZwgDEGJlEAMWXmC4jgS+fn4GIA)

{name = “ MyClass”; getName (){ return this.name; } const c = new MyClass () ; const obj = { name: “ obj”，getName: c.getName，} ;//Prints “ obj”，而不是 “ MyClass” console.log (obj.getName ()) ; Try


```

Long story short, by default, the value of `this` inside a function depends on _how the function was called_. In this example, because the function was called through the `obj` reference, its value of `this` was `obj` rather than the class instance.

长话短说，默认情况下，这个函数在函数内部的值取决于函数的调用方式。在这个例子中，因为函数是通过 obj 引用调用的，所以它的值是 obj 而不是类实例。

This is rarely what you want to happen! TypeScript provides some ways to mitigate or prevent this kind of error.

这很少是你想要发生的！打字稿提供了一些方法来减轻或防止这种错误。

### [](#arrow-functions)Arrow Functions

箭头函数

> Background Reading:  
> [Arrow functions (MDN)](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions)  
> 
> 背景阅读：箭头函数 (MDN)

If you have a function that will often be called in a way that loses its `this` context, it can make sense to use an arrow function property instead of a method definition:

如果你有一个函数被调用的方式会失去它的上下文，那么使用箭头函数属性来代替方法定义是有意义的:

```ts

class MyClass {

 name = "MyClass";

 getName = () => {

 return this.name;

 };

}

const c = new MyClass();

const g = c.getName;

// Prints "MyClass" instead of crashing

console.log(g());

[Try](https://www.typescriptlang.org/play/#code/MYGwhgzhAECyCeBhcVoG8CwAoa0B2YAtgKbQC80ARAspBJQNza4DmxALgHJGkUAUASnIA+dM1zQAThwCukvNHYALAJYQAdARJMc0AL4692YAHs8EdtGDl8xAO5wkKCIJ2nzlljeDq2XHjoA9IHQAAqSKnjsMNROdJTQkRbEYAAm0CYAZlaSkKp4LMZmECYgxOogJix81QICDEA)

{name = “ MyClass”; getName = = > { return this.name; } ; } const c = new MyClass () ; const g = c.getName;//print “ MyClass” 而不是 crashingconsole.log (g ()) ; Try


```

This has some trade-offs:

这有一些取舍:

*   The `this` value is guaranteed to be correct at runtime, even for code not checked with TypeScript
*   This will use more memory, because each class instance will have its own copy of each function defined this way
*   You can’t use `super.getName` in a derived class, because there’s no entry in the prototype chain to fetch the base class method from

这个值在运行时保证是正确的，即使代码没有通过 TypeScriptThis 检查也是如此。这将使用更多的内存，因为每个类实例都有自己的副本，每个函数都是这样定义的

### [](#this-parameters)`this` parameters

这个参数

In a method or function definition, an initial parameter named `this` has special meaning in TypeScript. These parameters are erased during compilation:

在方法或函数定义中，名为 this 的初始参数在打字稿中具有特殊意义。这些参数在编译过程中被删除:

```ts

// TypeScript input with 'this' parameter

function fn(this: SomeType, x: number) {

 /* ... */

}

[Try](https://www.typescriptlang.org/play/#code/C4TwDgpgBAyg9gWwgFXNAvFAhgOxAbgFgAoAelKgFpqBjAV2GspPKlUhhoCcBLMYKDxxgGUAO49gACygByaTwDOsqGCxcsSYBC4kAZnRw1gPODih6cACgWKAXLEQo0AGigAPBzjoIARjoBKKABvEigoUgAqKAA6OKhI0hIAXyA)

使用‘ this’参数函数 fn (this: SomeType，x: number){/* ... */} 尝试输入 ts///TypeScript


```

```


js

// JavaScript output

function fn(x) {

 /* ... */

}

Js//JavaScript outputfunction fn (x){/* ... */}


```

TypeScript checks that calling a function with a `this` parameter is done so with a correct context. Instead of using an arrow function, we can add a `this` parameter to method definitions to statically enforce that the method is called correctly:

打字稿检查使用 this 参数调用函数是否使用了正确的上下文。与使用箭头函数不同，我们可以在方法定义中添加 this 参数来静态地强制方法被正确调用:

```ts

class MyClass {

 name = "MyClass";

 getName(this: MyClass) {

 return this.name;

 }

}

const c = new MyClass();

// OK

c.getName();

// Error, would crash

const g = c.getName;

console.log(g());

The 'this' context of type 'void' is not assignable to method's 'this' of type 'MyClass'.2684The 'this' context of type 'void' is not assignable to method's 'this' of type 'MyClass'.`[Try](https://www.typescriptlang.org/play/#code/PTAEAEFMCdoe2gZwFygEwDYAcAWAsAFADGANgIaKKgCyAngMLmWgDehooAdmQLaSgBeUACI6jComEBudqADmkAC4A5XpAAUigBYBLFDQZNEASlayO0JQFdonUNr0A6bnxkEOAX0JficTokVQIkEuSAB3A3FKdWM3EFAAeQBpQiJHBRU1GLdCeIBRWAQAGlAwuCsSABMg6AotVL8A+RC0jNVXBv84EkhHEjg5dUHjWKA)

{name = “ MyClass”; getName (this: MyClass){ return this.name; } const c = new MyClass () ;//okc.getName () ;//Error，would crashconst g = c.getName; console.log (g () ; ‘ this’context of type‘ void’不能分配给‘ MyClass’类型的‘ this’方法。试试


```

This method makes the opposite trade-offs of the arrow function approach:

这个方法使得箭头函数的取舍相反:

*   JavaScript callers might still use the class method incorrectly without realizing it
*   Only one function per class definition gets allocated, rather than one per class instance
*   Base method definitions can still be called via `super`.

调用者可能仍然不正确地使用类方法，而没有实现它。只有每个类定义分配一个函数，而不是每个类分配一个 instanceBase 方法定义，仍然可以通过 super 调用。

[](#this-types)`this` Types

这种类型


-----------------------------------

In classes, a special type called `this` refers _dynamically_ to the type of the current class. Let’s see how this is useful:

在类中，一个名为 this 的特殊类型动态地引用当前类的类型。让我们看看这有什么用:

```ts

class Box {

 contents: string = "";

 set(value: string) {

 (method) Box.set(value: string): this

 this.contents = value;

 return this;

 }

}

[Try](https://www.typescriptlang.org/play/#code/MYGwhgzhAEBCD2APaBvAsAKGtY8B2ALgKaEQBc0EBATgJZ4Dm0AvNAERsDcm2ERBACgBuYEAFciFKnUYBKVJgD0i7AD0A-D2zQCAC1oQAdLkIkCMViPFFuWbdX5jqeHfoi3sAX0yegA)

{ contents: string =””; set (value: string){(method) Box.set (value: string) : this. contents = value; return this; } Try


```

Here, TypeScript inferred the return type of `set` to be `this`, rather than `Box`. Now let’s make a subclass of `Box`:

在这里，TypeScript 推断返回类型设置为 this，而不是 Box。现在让我们为 Box 创建一个子类:

```ts

class ClearableBox extends Box {

 clear() {

 this.contents = "";

 }

}

const a = new ClearableBox();

const b = a.set("hello");

 const b: ClearableBox

[Try](https://www.typescriptlang.org/play/#code/MYGwhgzhAEBCD2APaBvAsAKGtY8B2ALgKaEQBc0EBATgJZ4Dm0AvNAERsDcm2ERBACgBuYEAFciFKnUYBKVD2zQCAC1oQAdLkIkCMViPFFuWJdX5jqeZWognsAX0xOMAelfQAtN+BiC3z0xQSBgAYRAiMGowACMIhGQiRGI8ABMYBIVTUEjqAXl0U2xVdS18FL0Wdi5FFxcg-CpoMCq8IgB3aHDc2PikfJNtJpiqsA0+QTYVIhAQeDZZE3claAA9AH4gA)

扩展 Box {clear (){ this.contents =”; } const a = new ClearableBox () ; const b = a.set (“ hello”) ; const b: ClearableBoxTry


```

You can also use `this` in a parameter type annotation:

你也可以在参数类型注释中使用它:

```ts

class Box {

 content: string = "";

 sameAs(other: this) {

 return other.content === this.content;

 }

}

[Try](https://www.typescriptlang.org/play/#code/MYGwhgzhAEBCD2APaBvAsAKGtY8B2ALgKaEBc0EBATgJZ4Dm0AvNAESsDcm2EYAtkQCCEABTwCACyJVykmhACUqbtmhUiBAK5U80cVKoA6XIRIFmTFnIjH8xQlyzQAvpmdA)

{content: string =””; sameAs (other: this){ return other.content = = this.content; }} 请尝试


```

This is different from writing `other: Box` — if you have a derived class, its `sameAs` method will now only accept other instances of that same derived class:

这不同于编写 other: Box ー如果你有一个派生类，它的 sameAs 方法现在只接受同一个派生类的其他实例:

```ts

class Box {

 content: string = "";

 sameAs(other: this) {

 return other.content === this.content;

 }

}

class DerivedBox extends Box {

 otherContent: string = "?";

}

const base = new Box();

const derived = new DerivedBox();

derived.sameAs(base);

Argument of type 'Box' is not assignable to parameter of type 'DerivedBox'.
  Property 'otherContent' is missing in type 'Box' but required in type 'DerivedBox'.2345Argument of type 'Box' is not assignable to parameter of type 'DerivedBox'.
  Property 'otherContent' is missing in type 'Box' but required in type 'DerivedBox'.`[Try](https://www.typescriptlang.org/play/#code/PTAEAEFMCdoe2gZwFygEwGYAsBWAsAFADGANgIaKKgBCcAHqAN6GihFwB2ALpN6ol2gBLDgHNQAXlAAiaQG4WoRGQC2kAIKIAFHC4ALGKn1DEASiaLW0SFwCu0DqF0HoAOnbdeXSRKnHE7pw83AoErAC+hJEEhKQUVAAiMEIAbpAAJrQMkHTB6VRZFmFO+jAAwkFe-IIi4lLSAPzyUYSxnAKgAEYUkJKgHJAA7jT0WqahHh3pyWnpfQPDScKzWWOh08sZrspqmlrdiJDjQA)

返回 other.content = = this.content; }}} class DerivedBox extends Box {otherContent: string =”} const base = new Box () ; const derived = new DerivedBox () ; derived.sameAs (base) ; ‘ Box’类型的参数不能分配给‘ DerivedBox’类型的参数。属性‘ otherContent’在类型‘ Box’中缺失，但在类型‘ DerivedBox’中需要。类型‘ Box’的 2345 个参数不能分配给类型‘ DerivedBox’的参数。属性 “ otherContent” 在类型 “ Box” 中缺少，但在类型 “ DerivedBox” 中需要。试试


```

### [](#this-based-type-guards)`this`-based type guards

这种类型的警卫

You can use `this is Type` in the return position for methods in classes and interfaces. When mixed with a type narrowing (e.g. `if` statements) the type of the target object would be narrowed to the specified `Type`.

您可以在类和接口中的方法的返回位置中使用这个是 Type。当与类型收缩 (例如 if 语句) 混合时，目标对象的类型将收缩到指定的 Type。

```ts

class FileSystemObject {

 isFile(): this is FileRep {

 return this instanceof FileRep;

 }

 isDirectory(): this is Directory {

 return this instanceof Directory;

 }

 isNetworked(): this is Networked & this {

 return this.networked;

 }

 constructor(public path: string, private networked: boolean) {}

}

class FileRep extends FileSystemObject {

 constructor(path: string, public content: string) {

 super(path, false);

 }

}

class Directory extends FileSystemObject {

 children: FileSystemObject[];

}

interface Networked {

 host: string;

}

const fso: FileSystemObject = new FileRep("foo/bar.txt", "foo");

if (fso.isFile()) {

 fso.content;

 const fso: FileRep

} else if (fso.isDirectory()) {

 fso.children;

 const fso: Directory

} else if (fso.isNetworked()) {

 fso.host;

 const fso: Networked & FileSystemObject

}

[Try](https://www.typescriptlang.org/play/#code/PTAEAEGcBcCcEsDG0AKsD2AHApraBPASQDt5p4BDAG3gC8Lz1iAuUAM2smwFgAoRKhUiRQAMXhVsAZXwxsAWwDyAIwBW2ZKADefUKHiRxkgBQBKVtAAWB-SKPYAStkzbde0LGzQArrGKgrG3hiGApiRGx0NjEJR2cAbjcAXzcDABF4T2R0WHwzC2sRGwys6Bz8V153Dy9ff0CikOgwiKjQEo0y3MSq0BTegwA5LwB3HIBrbAATfIDC21Bh6DHYSanQADI5mx1evU8fP23IADpiUYnpnr1+vUQmGFhvbNhjTG9lGkRQTAZLVkewQA5gAaH4IABuDGwoHOy0uU1YynQ6EkYVM2n6-T4AiEdliThc2AAHtBsMQpvjJDI5Eo1J1KncHnBnl03n8AXBgWD3p8kKB7sQyULOQhiECMbtqpBvDhXr8rGCOFQuKZrn0+Nj+IJhO1Mp1yqAScLKTFqbIyXT1JopQLrFQpp4WGbpBaFCprdAANoAXR6WuCZNgHAiiwuq2mjNAlnQMFFwP9fBxzPYkHQrHsNMtHoZAF5YdgRi7CcYAERsFHAZQUWAnaCk0tg8so0tqpO8eDRYxsNMnAz2MyStw99AnQXC6A9ECgAB6AH5NUaVTDO6Bu730vqXnlTEPeiOx-bHeSp2B54vsMv9F2D0Nw2tB1GDzGYKfZwveEkgA)

{isFile () : this is fileep { return this instanceof FileRep; } isDirectory () : this is Directory { return this instanceof Directory; }{ return this instanceof Directory; } isNetworked () : this is Networked & this { return this.net worked; } constructor (public path: string，private Networked: boolean){} class filerstemep extends FileSystemObject { constructor (path: string，public content: string){ super (path，false) ; } class Directory extends FileSystem 对象 { children: FileSystemObject [] ; } interface Networked { host: string; } const fso: FileSystemObject = new fileerep (“ foo/bar.txt”，“ foo”) ;If (fso.isFile ()){ fso.content; const fso: FileRep } else if (fso.isDirectory ()){ fso.children; const fso: Directory } else if (fso.isNetworked ()){ fso.host; const fso: Networked & ystemobject } Try


```

A common use-case for a this-based type guard is to allow for lazy validation of a particular field. For example, this case removes an `undefined` from the value held inside box when `hasValue` has been verified to be true:

此类型保护的一个常见用例是允许对特定字段进行延迟验证。例如，当 hasValue 被验证为真时，这个例子从框中保存的值中移除了一个未定义的值:

```ts

class Box<T> {

 value?: T;

 hasValue(): this is { value: T } {

 return this.value !== undefined;

 }

}

const box = new Box();

box.value = "Gameboy";

box.value;

 (property) Box<unknown>.value?: unknown

if (box.hasValue()) {

 box.value;

 (property) value: unknown

}

[Try](https://www.typescriptlang.org/play/#code/MYGwhgzhAEBCD2APAPAFQHzQN4FgBQ00AbmCAK4CmA-AFzSoDc++hAFpAGqmUAUAlHQAurAJYwx2Ytwp1U0AL7YWhaACcKgsqoB20YWIB0JchWgBCALwXoZbQBMKAMxHaKdpgQX55zPMHjaEILQAEZI0NauAO5wSPweYYhG0hHQAEQA4mAAthRhAJ5pHviJySYeAPQVhAB6VL4ijtA8pewQXCb8fEqepcaUHoRVtfV48kA)

盒子  {值？: t; hasValue () : 这是 { value: t }{ return this.value！= = undefined; } const Box = new Box () ; Box.value = “ Gameboy”; Box.value; (property) Box < unknown > 。价值？: unknownif (box.hasValue ()){ box.value; (property) value: unknown } 请尝试


```

[](#parameter-properties)Parameter Properties

参数属性


-----------------------------------------------------

TypeScript offers special syntax for turning a constructor parameter into a class property with the same name and value. These are called _parameter properties_ and are created by prefixing a constructor argument with one of the visibility modifiers `public`, `private`, `protected`, or `readonly`. The resulting field gets those modifier(s):

打字稿提供了特殊的语法，可以将构造函数参数转换为具有相同名称和值的类属性。这些属性称为参数属性，通过在构造函数参数前加上一个可见性修饰符 public、 private、 protected 或 readonly 来创建。结果字段得到这些修饰符:

```ts

class Params {

 constructor(

 public readonly x: number,

 protected y: number,

 private z: number

 ) {

 // No body necessary

 }

}

const a = new Params(1, 2, 3);

console.log(a.x);

 (property) Params.x: number

console.log(a.z);

Property 'z' is private and only accessible within class 'Params'.2341Property 'z' is private and only accessible within class 'Params'.`[Try](https://www.typescriptlang.org/play/#code/PTAEAEFMCdoe2gZwFygEwGYAsBGAsAFADGANgIaKKgAKZ0ZAtlQN6GihFwB2iALtAFcivBAAo27UAAcBAIxIBLIqGiQyAE24kAnqAAeqLgIayYAGgnsp8XpGGR1obYeOnoFgpOnQFANzK2oABeLiYwEgCUoKyekiCgAHJwoLJw6rpcdpCUdNoSAL6EhcTcfKBkoAC8oJkA7jR0jIiiOGbobRgRANyEnDxwJJAAdCRwAOaiZEN63YTxXgvsAHoA-L2lA8OjE1NB3UA)

Tsclass Params {constructor (public readonly x: number，protected y: number，private z: number){///No body necessary } const a = new Params (1,2,3) ; console.log (a.x) ; (Property) Params.x: numberconsole.log (a.z) ; Property‘ z’是私有的，只能在类‘ Params’中访问。2341 Property‘ z’是私有的，只能在类‘ Params’中访问。试试


```

[](#class-expressions)Class Expressions

类别表达式


------------------------------------------------

> Background Reading:  
> [Class expressions (MDN)](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/class)  
> 
> 背景阅读：类表达式 (MDN)

Class expressions are very similar to class declarations. The only real difference is that class expressions don’t need a name, though we can refer to them via whatever identifier they ended up bound to:

类表达式与类声明非常相似。唯一真正的区别是类表达式不需要名称，尽管我们可以通过它们最终绑定到的任何标识符引用它们:

```ts

const someClass = class<Type> {

 content: Type;

 constructor(value: Type) {

 this.content = value;

 }

};

const m = new someClass("Hello, world");

 const m: someClass<string>

[Try](https://www.typescriptlang.org/play/#code/MYewdgzgLgBBIFsCmBhANgQwhGBeGwm2APACoCeADkgHwwDeAsAFAwHhRJhQBcMF1ANws2oSFABOAV2BQQEgBQA3DGilI+ApAEoGItjCgALAJYQAdGM7c8MFWqTDWMAL4sXTlmOgwEtsEgA7nCIqEQQCgBEABJIaGggADQwgfJoACaR2k4A9DkGMAB6APxAA)

{ content: Type; constructor (value: Type){ this.content = value; } ; const m = new someClass (“ Hello，world”) ; const m: someClass < string > Try


```

[](#abstract-classes-and-members)`abstract` Classes and Members

抽象类和成员


-------------------------------------------------------------------------

Classes, methods, and fields in TypeScript may be _abstract_.

打字稿中的类、方法和字段可能是抽象的。

An _abstract method_ or _abstract field_ is one that hasn’t had an implementation provided. These members must exist inside an _abstract class_, which cannot be directly instantiated.

抽象方法或抽象字段是没有提供实现的方法。这些成员必须存在于抽象类中，而抽象类不能直接实例化。

The role of abstract classes is to serve as a base class for subclasses which do implement all the abstract members. When a class doesn’t have any abstract members, it is said to be _concrete_.

抽象类的作用是作为实现所有抽象成员的子类的基类。当一个类没有任何抽象成员时，它被称为具体的。

Let’s look at an example:

让我们来看一个例子:

```ts

abstract class Base {

 abstract getName(): string;

 printName() {

 console.log("Hello, " + this.getName());

 }

}

const b = new Base();

Cannot create an instance of an abstract class.2511Cannot create an instance of an abstract class.`[Try](https://www.typescriptlang.org/play/#code/PTAEAEFMCdoe2gZwFygEwFYCMWCwAoAQwCNEAXaQgYzNCoBtDFFQAhJyUAbwNFBPKUaoAOaQyAOUIBbSAAoAlKkEBLAHYiA3AV6gADtHWSZ8hd118qcNYjj1IAOnpwRcgEQAJSPWcAaUG6gANSgZAAWKogOYsayigra+HwAvgSp+ARWNrTEoAC8oGqQAO5sHIqaQA)

抽象类 Base {abstract getName () : string; printName (){ console.log (“ Hello,”+ this.getName () ; }} const b = new Base () ; Can not create an instance of an abstract class. 2511 Can not create an instance of an abstract class。试试


```

We can’t instantiate `Base` with `new` because it’s abstract. Instead, we need to make a derived class and implement the abstract members:

我们不能用 new 实例化 Base，因为它是抽象的。相反，我们需要创建一个派生类并实现抽象成员:

```ts

class Derived extends Base {

 getName() {

 return "world";

 }

}

const d = new Derived();

d.printName();

[Try](https://www.typescriptlang.org/play/#code/IYIwzgLgTsDGEAJYBthjAgQmgpgg3gLABQCCokM8CA5jhAHLAC2OAFAJQBcClAlgDsaAbhJkADlEGMW7DgQC+JJcQD0qhAFptsAK4RtmkijQYAIjikA3HABMEOAB4QcA2xmxg8RUrXpNWTgIxMgQoel0oAQQAIgB3AHsoZFsY0V8VFWMEgUgEewBeBAEcOIQLaztOdNsAOklpALlhIA)

Tsclass Derived extends Base { getName (){ return“ world”; } const d = new Derived () ; d. printName () ; Try


```

Notice that if we forget to implement the base class’s abstract members, we’ll get an error:

注意，如果我们忘记实现基类的抽象成员，我们会得到一个错误:

```ts

class Derived extends Base {

Non-abstract class 'Derived' does not implement inherited abstract member 'getName' from class 'Base'.2515Non-abstract class 'Derived' does not implement inherited abstract member 'getName' from class 'Base'.

  // forgot to do anything

}

[Try](https://www.typescriptlang.org/play/#code/PTAEAEFMCdoe2gZwFygEwFYCMGCwAoAQwCNEAXaQgYzNCoBtDFFQAhJyUAbwNFBPKUaoAOaQyAOUIBbSAAoAlKkEBLAHYiA3L1AAHaOskz5C7gF8CF-CFABae1QCuZe7YIMmLACIwVAN0gAE1BIAA8ySDVAlnZETh58PhsAMwQROFoyOFBA7MI1AE8yAAt1EUsgA)

派生类扩展基类 {非抽象类‘ Derived’不实现从类‘ Base’继承的抽象成员‘ getName’。2515 非抽象类‘ Derived’不实现从类‘ Base’继承的抽象成员‘ getName’。// 忘记做任何事情


```

### [](#abstract-construct-signatures)Abstract Construct Signatures

抽象构造签名

Sometimes you want to accept some class constructor function that produces an instance of a class which derives from some abstract class.

有时，您希望接受某个类构造函数，该函数生成从某个抽象类派生的类的实例。

For example, you might want to write this code:

例如，你可能需要编写下面的代码:

```ts

function greet(ctor: typeof Base) {

 const instance = new ctor();

Cannot create an instance of an abstract class.2511Cannot create an instance of an abstract class.

  instance.printName();

}

[Try](https://www.typescriptlang.org/play/#code/PTAEAEFMCdoe2gZwFygEwFYCMWCwAoAQwCNEAXaQgYzNCoBtDFFQAhJyUAbwNFBPKUaoAOaQyAOUIBbSAAoAlKkEBLAHYiA3L1AAHaOskz5C7gF8CF-AyYsAIjBUA3SABNQkAB5lIa1y3ZETh58PjEjWUVuHT5ocQBXaDVQACIU7VDQKysQUABaAqp4sgK8ggAzeLUaFThkkTjxORoEVDIAT11IOHK2DlMQvio68lB1ckJqzgBeUDVIAHc6MgRFDL5xskmqSAA6fUMpSIUMsyA)

Tsfunction greet (ctor: typeof Base){ const instance = new ctor () ; Can not create an instance of an abstract class. 2511 Can not create an instance of an abstract class.() ; } Try


```

TypeScript is correctly telling you that you’re trying to instantiate an abstract class. After all, given the definition of `greet`, it’s perfectly legal to write this code, which would end up constructing an abstract class:

正确地告诉您您正在尝试实例化一个抽象类。毕竟，根据 greet 的定义，编写这样的代码是完全合法的，它最终会构建一个抽象类:

```ts

// Bad!

greet(Base);

[Try](https://www.typescriptlang.org/play/#code/CYUwxgNghgTiAEYD2A7AzgF3gcziDAXPFCgJ4A08AQlGiESaQNwCwAUAPQfwC0fYAVwx8e7LtSjAAhO1wh8AChp0AlEyA)

Ts//bad! greet (Base) ; Try


```

Instead, you want to write a function that accepts something with a construct signature:

相反，你需要写一个函数来接受带有构造签名的东西:

```ts

function greet(ctor: new () => Base) {

 const instance = new ctor();

 instance.printName();

}

greet(Derived);

greet(Base);

Argument of type 'typeof Base' is not assignable to parameter of type 'new () => Base'.
  Cannot assign an abstract constructor type to a non-abstract constructor type.2345Argument of type 'typeof Base' is not assignable to parameter of type 'new () => Base'.
  Cannot assign an abstract constructor type to a non-abstract constructor type.`[Try](https://www.typescriptlang.org/play/#code/PTAEAEFMCdoe2gZwFygEwGYAsBWAsAFACGARogC7REDG5o1ANkYoqAELOSgDehoopClVqgA5pHIA5IgFtIACgCUqIQEsAdqIDcfUAAdoGqbIWKeAX0KWCjZqwAiMVQDdIAE1CQAHuUjq3rByIXLwE-OLGcko8uvzQEgCu0OqgAESpOmGg1tYgoAC0hdQJ5IX5hABmCeq0qnApovES8rQIqOqQAO6g0QC8AHzsnGah-NT1FKAaFEQ1XL2gHd2t0EqZ-NPks9SQAHQGRtJRipnWjZDNjoaubieE581BkCdAA)

Tsfunction greet (ctor: new () = > Base){ const instance = new ctor () ; instance.printName () ; } greet (Derived) ; greet (Base) ; type‘ typeof Base’的参数不能分配给类型‘ new () = > Base’的参数。不能将抽象构造函数类型分配给非抽象构造函数类型。类型 “ typeof Base” 的 2345 参数不能分配给类型 “ new () = > Base” 的参数。无法将抽象构造函数类型分配给非抽象构造函数类型。试试


```

Now TypeScript correctly tells you about which class constructor functions can be invoked - `Derived` can because it’s concrete, but `Base` cannot.

现在，TypeScript 正确地告诉您可以调用哪个类构造函数 —— Derived 可以，因为它是具体的，但 Base 不能。

[](#relationships-between-classes)Relationships Between Classes

阶级之间的关系


--------------------------------------------------------------------------

In most cases, classes in TypeScript are compared structurally, the same as other types.

在大多数情况下，TypeScript 中的类在结构上进行比较，与其他类型相同。

For example, these two classes can be used in place of each other because they’re identical:

例如，这两个类可以互相替换使用，因为它们是相同的:

```ts

class Point1 {

 x = 0;

 y = 0;

}

class Point2 {

 x = 0;

 y = 0;

}

// OK

const p: Point1 = new Point2();

[Try](https://www.typescriptlang.org/play/#code/MYGwhgzhAEAKD2BLAdgFwIzQN4FgBQ00AHtALzQAMA3PoQJ5mU14C+++okMCKqATNlrFG1IQ3KjW7PAHoZ0APIBpDvGQRU0AA4AuOEjSZyyAKYB3fbz4AKAJRUgA)

1{ x = 0; y = 0; } class Point2{ x = 0; y = 0; }//OKconst p: Point1 = new Point2() ; Try


```

Similarly, subtype relationships between classes exist even if there’s no explicit inheritance:

类似地，即使没有明确的继承，类之间也存在子类型关系:

```ts

class Person {

 name: string;

 age: number;

}

class Employee {

 name: string;

 age: number;

 salary: number;

}

// OK

const p: Person = new Employee();

[Try](https://www.typescriptlang.org/play/#code/PTAEAEGcBcCcEsDG0BcoBmBDANpApgLABQi2mkkoACnrJAPYB2oA3saKI5gLZ5owJGAcwDc7UJiF9OAV24AjWmKIBfYsVLlKAUW4AHbPQCeePK3Fde-OPGHKOk6YzmLY90JByZYRtM4VKxGpExCCgAPIA0hpMMKB6aDR0TKAAvJx4AO6gugbGpgAUAJQiQA)

{ name: string; age: number; } class Employee { name: string; age: number; salary: number; }///OKconst p: Person = new Employee () ; Try


```

This sounds straightforward, but there are a few cases that seem stranger than others.

这听起来很简单，但也有一些案例看起来比其他案例更奇怪。

Empty classes have no members. In a structural type system, a type with no members is generally a supertype of anything else. So if you write an empty class (don’t!), anything can be used in place of it:

空类没有成员。在结构类型系统中，没有成员的类型通常是其他任何类型的超类型。因此，如果您编写了一个空类 (不要！) 任何东西都可以代替它:

```ts

class Empty {}

function fn(x: Empty) {

 // can't do anything with 'x', so I won't

}

// All OK!

fn(window);

fn({});

fn(fn);

[Try](https://www.typescriptlang.org/play/#code/MYGwhgzhAECiC2AHALgT2gbwL4FgBQ+AZgK4B2wyAlgPanSGkAUAHgFxxJoCUm+00AegHRgYUgHJk0ACbVoY1MgAWlUgHNoAd0rLo45uIA00CHICSW2pPy4CeIdACCIENADyAaQCERJttKymlwA3L6M2CFhDCFAA)

Tsclass Empty {} function fn (x: Empty){///can’t do anything with‘ x’，so i won’t }/All ok! fn (window) ; fn ({}) ; fn (fn) ; Try


```