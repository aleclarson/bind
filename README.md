
# bindMethod 1.0.0 ![stable](https://img.shields.io/badge/stability-stable-4EBA0F.svg?style=flat)

```coffee
bindMethod = require "bindMethod"

obj =
  foo: 1
  method: -> @foo

method = obj.method
method() # => undefined

method = bindMethod obj, "method"
method() # => 1
```

- Most useful when `obj` is actually `some.nested.obj`!

- Binding arguments is not supported.
