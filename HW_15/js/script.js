function padString(string, length, symbol, boolean = true) {
  if (string === undefined) {
    return "did not add a string";
  } else if (length === undefined) {
    return "did not add a Length";
  } else if (symbol === undefined) {
    return "did not add a symbol";
  } else if (boolean === undefined) {
    return "did not add a boolean";
  }

  if (length > string.length) {
    if (boolean === true) {
      for (i = string.length; i < length; i++) {
        string += symbol;
      }
    } else {
      for (a = string.length; a < length; a++) {
        string = symbol + string;
      }
    }
  } else {
    string = string.substr(0, length);
  }
  return string;
}

console.log(padString("hello", 8, "*"));
console.log(padString("hello", 6, "*", false));
console.log(padString("hello", 2));
