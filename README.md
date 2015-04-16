# setterGetterify

> generates setters and getters for an object

```javascript
var setterGetterify = require('setterGetterify');

var thing = { some: 'properties' };
var coords = { x: 0, y: 0 };

setterGetterify(thing, coords);

console.log(thing);
console.log(thing.x);

thing.x = 123;

console.log(thing);
console.log(coords);
```

```bash
{ some: 'properties', x: [Getter/Setter], y: [Getter/Setter] }
0
{ some: 'properties', x: [Getter/Setter], y: [Getter/Setter] }
{ x: 123, y: 0 }
```

The values are not stored on the `object` but in the `properties` object. This can be used to keep them private and make sure they are only accessed with said setters/getters.

This is useful if you only care about that data when storing/retrieving the object for example.
