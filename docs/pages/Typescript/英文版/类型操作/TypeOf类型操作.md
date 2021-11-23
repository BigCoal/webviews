# TypeOf类型操作
> Using the typeof operator in type contexts.

[](#the-typeof-type-operator)The `typeof` type operator
-------------------------------------------------------

JavaScript already has a `typeof` operator you can use in an _expression_ context:

JavaScript已经有一个`typeof`操作符，你可以在_表达式_上下文中使用:

```ts

// Prints "string"

console.log(typeof "Hello world");

[Try](https://www.typescriptlang.org/play/#code/PTAEAUCcEsDsBcDOoBEj41gcxQKAMYD2sihANgKYB0ZhWAFPAJ4AOFhAZqgBIVm2gA7oUhkAJigCUAbiA)


```

TypeScript adds a `typeof` operator you can use in a _type_ context to refer to the _type_ of a variable or property:

TypeScript增加了一个`typeof`操作符，你可以在一个_type_上下文中使用，指代一个变量或属性的_type_:

```ts

let s = "hello";

let n: typeof s;

 let n: string

[Try](https://www.typescriptlang.org/play/#code/DYUwLgBAzhC8ECIAWJjAPYINwChSQDsAuCMATwAcR0AzaXAegYggD0B+IA)


```

This isn’t very useful for basic types, but combined with other type operators, you can use `typeof` to conveniently express many patterns. For an example, let’s start by looking at the predefined type `ReturnType<T>`. It takes a _function type_ and produces its return type:

这对基本类型来说不是很有用，但结合其他类型操作符，你可以使用`typeof`来方便地表达许多模式。举个例子，让我们先看一下预定义的类型`ReturnType<T>`。它接收一个_函数类型_并产生其返回类型:

```ts

type Predicate = (x: unknown) => boolean;

type K = ReturnType<Predicate>;

 type K = boolean

[Try](https://www.typescriptlang.org/play/#code/C4TwDgpgBACgThAJgSwMYENjQLxQBQAeAXFAK4B2A1uQPYDu5AlFNgHxQBGNNANhOuQDcAKFCQoAaRZQAShGCk45ACrgIAHnhI0mCKxEB6A1BMA9APxA)


```

If we try to use `ReturnType` on a function name, we see an instructive error:

如果我们试图在一个函数名上使用`ReturnType'，我们会看到一个指示性的错误:

```ts

function f() {

 return { x: 10, y: 3 };

}

type P = ReturnType<f>;

'f' refers to a value, but is being used as a type here. Did you mean 'typeof f'?2749'f' refers to a value, but is being used as a type here. Did you mean 'typeof f'?`[Try](https://www.typescriptlang.org/play/#code/PTAEAEFMCdoe2gZwFygEwHYAsBOAUAGYCuAdgMYAuAlnCaAQBQCUoA3nqKNJBUdHa1AAPVAEYADABpQAT1QBmUAF8A3HiV4KMgA6RQABVABeUACUefEgBUdkADwEAfCqA)


```

Remember that _values_ and _types_ aren’t the same thing. To refer to the _type_ that the _value `f`_ has, we use `typeof`:

记住，_values_和_types_不是一回事。要提到_value `f`_所具有的_类型，我们使用`typeof`:

```ts

function f() {

 return { x: 10, y: 3 };

}

type P = ReturnType<typeof f>;

 type P = {
    x: number;
    y: number;
}

[Try](https://www.typescriptlang.org/play/#code/GYVwdgxgLglg9mABMAFASkQbwFCMQJwFMoR8lNEAPALkQEYAGAGkQE9aBmRAXwG5tu2KKwAOhRAAVEAXkQAlYqTAAVUYQA8wsXGDIAfPwD0hvIgB6AfiA)


```

### [](#limitations)Limitations

TypeScript intentionally limits the sorts of expressions you can use `typeof` on.

TypeScript有意限制了你可以使用`typeof`的表达式种类

Specifically, it’s only legal to use `typeof` on identifiers (i.e. variable names) or their properties. This helps avoid the confusing trap of writing code you think is executing, but isn’t:

具体来说，只有在标识符（即变量名）或其属性上使用`typeof`才是合法的。这有助于避免混乱的陷阱，即编写你认为正在执行的代码，但不是:

```ts

// Meant to use = ReturnType<typeof msgbox>

let shouldContinue: typeof msgbox("Are you sure you want to continue?");

',' expected.1005',' expected.`[Try](https://www.typescriptlang.org/play/#code/PTAEAEFMCdoe2gZwFygIwAYMFYBQATSAYwBsBDaSUIuAO0QBdQBbRAcwCM4APVACgCUoALwA+UFzglIZWgG5cIUAwCeAByqtOPEaFkqFSgLQmiAVwYmjisAFkZtJgzigziKsNAAlSAzPRaABV1SAAeVQ04ADMWdi5uUVxpJkQACzgzEnwAYToGAEtaM0hUCMho2O1uPgAiAEFKUBUM0ER-KmazUAB3WScXGkdC4oB+GoE5IA)


```