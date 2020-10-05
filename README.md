# xprezzo-setprototypeof

Polyfill for `Object.setPrototypeOf`

## Usage:

```
$ npm install --save xprezzo-setprototypeof
```

```javascript
var setPrototypeOf = require('setprototypeof')

var obj = {}
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

Xprezzo and related projects are maintained by [Ben Ajenoui](mailto:info@seohero.io) and sponsored by [SEO Hero](https://www.seohero.io).

# License

[MIT](LICENSE)
