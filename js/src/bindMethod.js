module.exports = function(obj, key) {
  var method;
  method = obj[key];
  if (typeof method !== "function") {
    throw TypeError("Expected a kind of Function!");
  }
  return function() {
    return method.apply(obj, arguments);
  };
};

//# sourceMappingURL=../../map/src/bindMethod.map
