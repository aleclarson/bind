
require "isDev"

emptyFunction = require "emptyFunction"
assertType = require "assertType"

bindFunc = (func, context, args) ->
  assertType func, Function
  return bindToString func, ->
    func.apply context, args or arguments

bindMethod = (obj, key, args) ->
  assertType key, String
  method = obj[key]
  assertType method, Function
  return bindToString method, ->
    method.apply obj, args or arguments

bindToString = emptyFunction
isDev and bindToString = (orig, func) ->
  func.toString = -> orig.toString()
  return func

module.exports =
  func: bindFunc
  method: bindMethod
  toString: bindToString
