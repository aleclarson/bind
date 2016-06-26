var assertType, bindFunc, bindMethod, bindToString, emptyFunction;

require("isDev");

emptyFunction = require("emptyFunction");

assertType = require("assertType");

bindFunc = function(func, context, args) {
  assertType(func, Function);
  return bindToString(func, function() {
    return func.apply(context, args || arguments);
  });
};

bindMethod = function(obj, key, args) {
  var method;
  assertType(key, String);
  method = obj[key];
  assertType(method, Function);
  return bindToString(method, function() {
    return method.apply(obj, args || arguments);
  });
};

bindToString = emptyFunction;

isDev && (bindToString = function(orig, func) {
  func.toString = function() {
    return orig.toString();
  };
  return func;
});

module.exports = {
  func: bindFunc,
  method: bindMethod,
  toString: bindToString
};

//# sourceMappingURL=../../map/src/bind.map
