module.exports = function(obj, key) {
  var method;
  method = obj[key];
  return function() {
    return method.apply(obj, arguments);
  };
};

//# sourceMappingURL=../../map/src/bindMethod.map
