var fs = require('fs');
var vkey = require('vkey');
var convert = require('./convert');
var inverted = {};

Object.keys(vkey).forEach(function(key) {
  var value = vkey[key];
  inverted[value] = parseInt(key);
});

fs.writeFileSync('vkeys-inverted.js', toString(inverted) ,'utf-8');

function toString(obj) {
  var buff, prop;
  buff = [];
  for (prop in obj) {
    buff.push("'" + convert(prop) + "'" + ': ' + obj[prop])
  }
  return 'module.exports = {\n  ' + buff.join(',\n  ') + '\n};';
}