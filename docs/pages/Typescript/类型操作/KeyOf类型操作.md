# KeyOf类型操作
> Using the keyof operator in type contexts.

Keyof Type Operator
-------------------

[](#the-keyof-type-operator)The `keyof` type operator
-----------------------------------------------------

The `keyof` operator takes an object type and produces a string or numeric literal union of its keys. The following type P is the same type as “x” | “y”:

`keyof`操作符接收一个对象类型，并产生其键的字符串或数字字面联合。下面的类型P与 "x"|"y "是同一类型:

```ts

type Point = { x: number; y: number };

type P = keyof Point;

 type P = keyof Point

[Try](https://www.typescriptlang.org/play/#code/C4TwDgpgBACg9gSwHbCgXigbygDwFxRICuAtgEYQBOA3FCAceVVAL7UBQoks6UA1hBBwAZrEQoOAeklRZAPQD8QA)


```

If the type has a `string` or `number` index signature, `keyof` will return those types instead:

如果类型有`string`或`number`索引签名，`keyof`将返回这些类型:

```ts

type Arrayish = { [n: number]: unknown };

type A = keyof Arrayish;

 type A = number

type Mapish = { [k: string]: boolean };

type M = keyof Mapish;

 type M = string | number

[Try](https://www.typescriptlang.org/play/#code/C4TwDgpgBAggTnAhiAlgZwBZQLxQN5QDaAdgFxTECuAtgEYRwC65lxA1sQPYDuxUAvgG4AUKEiwcUNhBCcAZrATJ0GEQHo1ULQD0A-MNHhoAWURgVkgoTbk0wOCmIBzZlFqdOAGwiI+Qw+LGktKyCqbmmOqaOrpAA)


```

Note that in this example, `M` is `string | number` — this is because JavaScript object keys are always coerced to a string, so `obj[0]` is always the same as `obj["0"]`.

注意，在这个例子中，`M`是`字符串|数字`--这是因为JavaScript对象的键总是被强制为字符串，所以`obj[0]`总是与`obj["0"]`相同。

keyof` types become especially useful when combined with mapped types, which we’ll learn more about later.

keyof`类型在与映射类型结合时变得特别有用，我们将在后面进一步了解。


The TypeScript docs are an open source project. Help us improve these pages [by sending a Pull Request](https://github.com/microsoft/TypeScript-Website/blob/v2/packages/documentation/copy/en/handbook-v2/Type%20Manipulation/Keyof%20Type%20Operator.md) ❤

TypeScript文档是一个开源项目。帮助我们改进这些页面[通过发送Pull Request](https://github.com/microsoft/TypeScript-Website/blob/v2/packages/documentation/copy/en/handbook-v2/Type%20Manipulation/Keyof%20Type%20Operator.md) ❤