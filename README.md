# one2extra
> GGet one and extra.

[![version][version-image]][version-url]
[![license][license-image]][license-url]
[![size][size-image]][size-url]
[![download][download-image]][download-url]

## installation
```shell
npm install @jswork/one2extra
```

## usage
```js
import one2extra from '@jswork/one2extra';

const arr = [ 1, 2, 3 ];
const fn3 = (list)=> list.findIndex(item => item === 3);

one2extra(0, arr); // [1,[2,3]]
one2extra(1, arr); // [2,[1,3]]
one2extra(fn3, arr); // [3,[1,2]]
```

## license
Code released under [the MIT license](https://github.com/afeiship/one2extra/blob/master/LICENSE.txt).

[version-image]: https://img.shields.io/npm/v/@jswork/one2extra
[version-url]: https://npmjs.org/package/@jswork/one2extra

[license-image]: https://img.shields.io/npm/l/@jswork/one2extra
[license-url]: https://github.com/afeiship/one2extra/blob/master/LICENSE.txt

[size-image]: https://img.shields.io/bundlephobia/minzip/@jswork/one2extra
[size-url]: https://github.com/afeiship/one2extra/blob/master/dist/one2extra.min.js

[download-image]: https://img.shields.io/npm/dm/@jswork/one2extra
[download-url]: https://www.npmjs.com/package/@jswork/one2extra
