# setter-getterify

> generates setters and getters for an object

## Syntax

```javascript
setterGetterify(object, properties, callbacks);
```

## Example

```javascript
var setterGetterify = require('setter-getterify');

var thing = { some: 'properties' };
var coords = { x: 0, y: 0 };

setterGetterify(thing, coords, {
	afterSetting: function(property, value) {
		console.log(property, 'was set to', value);
	}
});

console.log(thing);
console.log(thing.x);

thing.x = 123;

console.log(thing);
console.log(coords);
```

```bash
{ some: 'properties', x: [Getter/Setter], y: [Getter/Setter] }
0
x was set to 123
{ some: 'properties', x: [Getter/Setter], y: [Getter/Setter] }
{ x: 123, y: 0 }
```

The values are not stored on the `object` but in the `properties` object. This can be used to keep them private and make sure they are only accessed with said setters/getters.

This is useful if you only care about that data when storing/retrieving the object for example.

The `callbacks` parameter is entirely optional. Currently only `afterGetting` is implemented.
