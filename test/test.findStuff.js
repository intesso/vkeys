var test = require('tape');
var vkeys = require('../vkeys');


test('should find code 32', function (t) {
  t.plan(1);
  var code = vkeys.findCode('space');
  t.equal(code, 32, 'key space should have code 32');
});

test('should find codes [91,92,223,224]', function (t) {
  t.plan(2);
  var codes = vkeys.findAllCodes('meta');
  console.log('codes', codes);
  t.equal(codes.length, 4);
  var arr = [91, 92, 223, 224];
  t.true(arrayEqual(codes, arr));
});

test('should get key "<"', function (t) {
  t.plan(1);
  var key = vkeys.getKey(60);
  t.equal(key, '<', 'key space should have key "<"');
});


function arrayEqual(actual, expected) {
  var equal = true;
  actual.forEach(function (k) {
    if (actual[k] != expected[k]) equal = false;
  });
  return equal;
}
