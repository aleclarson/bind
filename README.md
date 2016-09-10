
# bind 1.0.0 ![stable](https://img.shields.io/badge/stability-stable-4EBA0F.svg?style=flat)

When in `__DEV__` mode, `toString` is overridden to use the wrapped function's `toString`.

You can optionally bind the `arguments`, but that results in the arguments passed to the bound function being ignored.

```coffee
bind = require "bind"

fn = (b, c) -> [ @a, b, c ]
bound = bind.func fn, { a: 1 }, [ 2, 3 ]
bound() # => [ 1, 2, 3 ]

obj = a: 1, fn: (b, c) -> [ @a, b, c ]
bound = bind.method obj, "fn", [ 2, 3 ]
bound() # => [ 1, 2, 3 ]

orig = -> "orig"
wrapped = bind.toString orig, -> "wrapped"
wrapped.toString() # => 'function() { return "orig"; }'
```
