
module.exports = (obj, key) ->
  method = obj[key]
  return -> method.apply obj, arguments
