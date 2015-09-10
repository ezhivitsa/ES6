(function() {
	'use strict';

	let callbacks = [];
	var callbacks2 = [];
	for (let i = 0; i <= 2; i++) {
	    callbacks[i] = function () { return i * 2 };
	    callbacks2[i] = function () { return i * 2 };
	}

	console.log(callbacks[0](), ' ', callbacks2[0]());
	console.log(callbacks[1](), ' ', callbacks2[1]());
	console.log(callbacks[2](), ' ', callbacks2[2]());

	// block scoped functions
	{
		function foo () { return 2 }
        console.log(foo())
	}

	// arrow functions
	let array = [1, 2, 3, 4];
	let newArray = array.map(value => value + 1);
	console.log(newArray);

	let obj = {
		name: 'Evgeny',
		array: [1, 2, 3],
		func: function () {
			this.newArray = this.array.map(v => {
				return this.name + ' ' + v;
			});
		}
	};

	console.log(obj.newArray);
	obj.func();
	console.log(obj.newArray);

	// default parameters value
	// doest available in Chrome
	// function f (x, y = 7, z = 42) {
	//     return x + y + z;
	// }
	// console.log(f(1));
})();