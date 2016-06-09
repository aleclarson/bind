
require "isDev"

assertType = require "assertType"
wrapValue = isDev and require "wrapValue"

module.exports = (obj, key) ->

  method = obj[key]

  assertType method, Function

  if isDev
    return wrapValue method, (orig) ->
      method = -> orig.apply obj, arguments
      method.toString = -> orig.toString()
      return method

  return -> method.apply obj, arguments
