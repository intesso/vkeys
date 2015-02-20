module.exports = function convert(str) {
  str = str.toLowerCase();
  if (str != '-') str = str.replace(/-/g, "");
  str = str.replace(/ /g, "");
  if (str != '<') str = str.replace(/</g, "");
  if (str != '>') str = str.replace(/>/g, "");
  str = str.replace(/\\/g, "\\\\");
  str = str.replace(/\'/g, "\\'");
  str = str.replace('control', 'ctrl');
  if (str == 'num') str = 'num-';
  return str;
};