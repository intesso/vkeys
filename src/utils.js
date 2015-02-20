

exports.findCode = function findCode(key) {
  for (var k in vkeys) {
    if(vkeys.hasOwnProperty(k)) {
      if (key == vkeys[k]) return parseInt(k);
    }
  }
  return null;
};

exports.findAllCodes = function findAllCodes(key) {
  var codes = Object.keys(vkeys).filter(function (k) {
    return (key == vkeys[k]);
  });
  return codes.map(function(code) {
    return parseInt(code);
  })
};

exports.getKey = function getKey(code) {
  return vkeys[code];
};
