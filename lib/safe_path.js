module.exports = safePath;

var MAX_LEN = 100;

function safePath(string) {
  string = string.replace(/[<>:"\/\\|?*%]/g, "_");
  string = string.substring(0, MAX_LEN);
  return string;
}
