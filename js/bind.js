var assertType, bindArgs, bindFunc, bindMethod, bindToString, emptyFunction, shiftArray;

require("isDev");

emptyFunction = require("emptyFunction");

assertType = require("assertType");

shiftArray = Function.prototype.call.bind(Array.prototype.shift);

bindArgs = function() {
  var args, func, offset;
  args = arguments;
  func = shiftArray(args);
  assertType(func, Function);
  offset = args.length;
  return bindToString(func, function() {
    var arg, i, index, len;
    for (index = i = 0, len = arguments.length; i < len; index = ++i) {
      arg = arguments[index];
      args[offset + index] = arg;
    }
    return func.apply(this, args);
  });
};

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
  args: bindArgs,
  func: bindFunc,
  method: bindMethod,
  toString: bindToString
};

//# sourceMappingURL=map/bind.map
