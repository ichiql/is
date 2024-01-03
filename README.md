# Deprecated

このパッケージは非推奨となりました
今後は [anoare](https://github.com/ichiql/anoare) をご使用ください :)

This package has been deprecated.
Use https://github.com/ichiql/anoare instead.

---

# @ichiql/is

```shell
pnpm add @ichiql/is
npm install @ichiql/is
yarn add @ichiql/is
```

数値かどうかを判定する(use zod)

Use Zod to determine if XXX

```js
import { is~~~, is~~~s } from '@ichiql/is'

isNumber(1) // true
isNumber('ABC') // false
isNumber({}) // false
isNumber(undefined) // false
isNumbers([1, 2]) // true
isNumbers([]) // true
isNumbers(['A', 'B', 'C']) // false

isString('ABC') // true
isString(1) // false
isString({}) // false
isString(undefined) // false
isStrings(['A', 'B', 'C']) // true
isStrings([]) // true
isStrings([1, 2]) // false
```
