var setterGetterify = require('./');

var thing = { some: 'properties' };
var coords = { x: 0, y: 0 };

setterGetterify(thing, coords);

console.log(thing);
console.log(thing.x);

thing.x = 123;

console.log(thing);
console.log(coords);
