var setterGetterify = require('./');

var thing = { some: 'properties' };
var coords = { x: 0, y: 0 };

setterGetterify(thing, coords, {
	afterSetting: function(property, value) {
		console.log('setting', property, 'to', value);
	}
});

console.log(thing);
console.log(thing.x);

thing.x = 123;

console.log(thing);
console.log(coords);
