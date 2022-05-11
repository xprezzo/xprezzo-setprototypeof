# xprezzo-setprototypeof

Object.setPrototypeOf() is in the ECMAScript 2015 specification. NodeJS starts implement `Object.setPrototypeOf` since version 0.12.0. NodeJS starts from 0.10.0 before 0.12.0 was using `Object.prototype.__proto__`. 

`xprezzo-setprototypeof` is a polyfill for `Object.setPrototypeOf`.

The setprototypeof is extending directly on the [xprezzo-mixin](https://github.com/xprezzo/xprezzo-mixin)

## Usage:

For more ussages, please visit [xprezzo-mixin](https://github.com/xprezzo/xprezzo-mixin).

```
$ npm install --save xprezzo-setprototypeof
```

```javascript
const setPrototypeOf = require('setprototypeof')

let obj = {}
setPrototypeOf(obj, {
  foo: function () {
    return 'bar'
  }
})
obj.foo() // bar
```

TypeScript is also supported:

```typescript
import setPrototypeOf from 'setprototypeof'
```

## People

Xprezzo and related projects are maintained by [Cloudgen Wong](mailto:cloudgen.wong@gmail.com).

# License

[MIT](LICENSE)
