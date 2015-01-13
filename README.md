# regex-oib

Regular expression for [OIB](http://en.wikipedia.org/wiki/Personal_identification_number_(Croatia)).

## Installation

```sh
npm install regex-oib --save
```

## Examples

```js
var oib = require('regex-oib');

oib().test('12345678901'); // => true
oib().test('HR12345678901'); // => true
oib().test('123456789011'); // => false

oib().exec('HR12345678901');
// => [0] 'HR12345678901'
// => [1] '12345678901'
// => [2] '1'
```

### Match groups

* `[0]`: full OIB, with leading international symbol (if provided)
* `[1]`: full OIB, without leading international symbols
* `[2]`: control number

## License

MIT © [Ivan Nikolić](http://ivannikolic.com)
