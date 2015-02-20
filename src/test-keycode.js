// event comparison (outdated): http://unixpapa.com/js/key.html
var events = ['keydown', 'keyup', 'keypress', 'textInput'];
events.forEach(function (event) {
  window.addEventListener(event, function (e) {
    e.preventDefault();
    e.stopPropagation();
    console.log('Event: ', event, ': keyCode', e.keyCode, ', which', e.which, ', charCode', e.charCode);
    console.log('EventObject:', e);
    return false;
  });
});


// event comparison (outdated): http://unixpapa.com/js/key.html
var events = ['keydown'];
events.forEach(function (event) {
  window.addEventListener(event, function (e) {
    e.preventDefault();
    e.stopPropagation();
    console.log('Event: ', event, ': keyCode', e.keyCode, ', which', e.which, ', charCode', e.charCode, ' ,object', e, JSON.stringify(e));
    return false;
  });
});

// firefox has got e.key which is the name of the key. so creating a logger would be helpful.
// e.keyCode is available in firefox and chrome


// so let's create a logger:
var vkey = window.vkey = {};
var events = ['keydown'];
events.forEach(function (event) {
  window.addEventListener(event, function (e) {
    e.preventDefault();
    e.stopPropagation();
    if (!e.key) return console.log('please try with firefox, event.key is not available in your browser');
    vkey[e.keyCode] = e.key;
    console.log('added: ', 'keyCode', e.keyCode, ', key', e.key);
    return false;
  });
});

// let's move on and create a project to collect the keys from different keyboards with different OS around the world.
// https://developer.mozilla.org/en-US/docs/Web/API/KeyboardEvent.key#Key_values
// https://developer.mozilla.org/en-US/docs/Web/API/KeyboardEvent.key#Browser_compatibility


var vkey = window.vkey = {};
var events = ['keydown', 'appcommand'];
events.forEach(function (event) {
  window.addEventListener(event, function (e) {
    e.preventDefault();
    e.stopPropagation();
    if (!e.key) return console.log('please try with firefox, event.key is not available in your browser');
    if (!vkey[e.keyCode]) {
      console.log('yay, you found a new keyCode!');
      vkey[e.keyCode] = {};
    }

    if (!vkey[e.keyCode][e.key]) {
      console.log('ueee, you found a new key for a keyCode!');
      vkey[e.keyCode][e.key] = getContext(e);
      console.log('added: ', 'keyCode', e.keyCode, ', key', e.key);
    }
    return false;
  });
});

function getContext(e) {
  var obj = {};
  obj.keys = getKeys(e);
  obj.userInfo = getUserInfo();
  obj.date = new Date;
  return obj;
}

function getKeys(e) {
  return copy(e, ['ctrlKey', 'altKey', 'metaKey', 'shiftKey']);
}

function getUserInfo() {
  return copy(navigator, ['platform', 'languages', 'userAgent']);
}

function copy(obj, attributes) {
  var copy = {};
  attributes.forEach(function (attribute) {
    copy[attribute] = obj[attribute];
  });
  return copy;
}


// next attempt, only store keys when no other key is pressed ['ctrlKey', 'altKey', 'metaKey', 'shiftKey']
var vkey = window.vkey = {};
var events = ['keydown', 'appcommand'];
events.forEach(function (event) {
  window.addEventListener(event, function (e) {
    e.preventDefault();
    e.stopPropagation();
    if (!e.key) return console.log('please try with firefox, event.key is not available in your browser');
    var other = otherKeyPressed(e);
    if (other) return console.log('only press one key at a time', other, e);

    if (!vkey[e.keyCode]) {
      vkey[e.keyCode] = e.key;
      console.log('added: ', 'keyCode', e.keyCode, ', key', e.key);
    }
    return false;
  });
});

function otherKeyPressed(e) {
  return hasOne(e, ['ctrlKey', 'altKey', 'metaKey', 'shiftKey']);
}

function hasOne(obj, attributes) {
  return attributes.some(function (attribute) {
    return obj[attribute];
  });
}
