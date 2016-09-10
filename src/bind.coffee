
require "isDev"

emptyFunction = require "emptyFunction"
assertType = require "assertType"

shiftArray = Function::call.bind Array::shift

bindArgs = ->
  args = arguments
  func = shiftArray args
  assertType func, Function
  offset = args.length
  return bindToString func, ->
    for arg, index in arguments
      args[offset + index] = arg
    func.apply this, args

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
  args: bindArgs
  func: bindFunc
  method: bindMethod
  toString: bindToString
