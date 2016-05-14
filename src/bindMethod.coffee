
module.exports = (obj, key) ->

  method = obj[key]

  if typeof method isnt "function"
    throw TypeError "Expected a kind of Function!"

  return -> method.apply obj, arguments
