interface User {
	name: string;
}

const object = {};

assertUser(object);
object.name = 'John';

function assertUser(obj: unknown): asserts obj is User {
	if (typeof obj === 'object' && !!obj && 'name' in obj) return;
	throw new Error('Not an user');
}
