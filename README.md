# vkeys

## problem
some browsers have got an e.key attribute that is submitted with `keydown` and `keyup` events.
chrome (and other browsers) does not have a e.key attribute.
there are also inconsistencies between different browsers.

## solution

@chrisdickinson initiated a project [vkey](https://github.com/chrisdickinson/vkey) to collect the different definitions and `merge` them into a unified definition.
for code that can not handle `spaces`, or wants less clutter, this transformation might be useful.

this module transforms the [vkey](https://github.com/chrisdickinson/vkey) definition, and __removes__ the following __clutter__:
 - `spaces`
 - `<` and `>`
 - `-`
 - runs `toLowerCase()`

the output is a static key mapping file (without dynamic edge cases): [vkeys.js](vkeys.js)

# usage

## install
```bash
npm install vkeys
```

## use
```js
var vkeys = require('./vkeys');

window.addEventListener('keydown', function(e) {
  console.log(vkeys[e.keyCode])
});
```

# api

#### vkeys

Object with {`code` : `key`} pairs.
```js
{
  0: 'unk',
  ...
  8: 'backspace',
  9: 'tab',
  12: 'clear',
  13: 'enter',
  ...
  254: 'clear'
}
```
see: [vkeys.js](https://github.com/intesso/vkeys/blob/master/vkeys.js)

#### vkeys.getKey(code)

return the `key` for the given `code`.
```js
var key = vkeys.getKey(60);
assert.equal(key, '<');
```
#### vkeys.findCode(key)

returns the first `code` that matches the `key`.
```js
var code = vkeys.findCode('space');
assert.equal(code, 32);
```

#### vkeys.findAllCodes(key)

returns an Array of `code`'s that match the `key`.
```js
var code = vkeys.findAllCodes('meta');
// code equals [91, 92, 223, 224]
```


# build

 1. get the latest vkey module: `npm install --save-dev vkey`
 2. run the build: `npm run build`

# test

```bash
npm install -g browserify testling
npm run test
```

# license

MIT