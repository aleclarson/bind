var assertType, wrapValue;

require("isDev");

assertType = require("assertType");

wrapValue = isDev && require("wrapValue");

module.exports = function(obj, key) {
  var method;
  method = obj[key];
  assertType(method, Function);
  if (isDev) {
    return wrapValue(method, function(orig) {
      method = function() {
        return orig.apply(obj, arguments);
      };
      method.toString = function() {
        return orig.toString();
      };
      return method;
    });
  }
  return function() {
    return method.apply(obj, arguments);
  };
};

//# sourceMappingURL=../../map/src/bindMethod.map
