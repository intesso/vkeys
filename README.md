# vkeys
map e.keyCode to vkey string

# problem
some browsers have got an e.key attribute that is submitted with `keydown` and `keyup` events.
chrome (and other browsers) does not have a e.key attribute.
there are also inconsistencies between different browsers.

# solution

@chrisdickinson initiated a project to collect the different definitions and `merge` them into a unified definition.
for code that can not handle `spaces`, or wants less clutter, this transformation might be useful.

this module transforms the [vkey](https://github.com/chrisdickinson/vkey) definition, and removes the following clutter:
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

document.body.addEventListener('keydown', function(e) {
  console.log(vkeys[e.keyCode])
});
```


# build

 1. `npm install --save-dev vkey`
 2. `npm run build`

# license

MIT