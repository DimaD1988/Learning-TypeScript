function generateError(message: string): never {
	throw new Error(message);
}

function dumpError(): never {
	while (true) {}
}

function rec(): never {
	return rec();
}

function processAction(action: 'refund' | 'checkout') {
	switch (action) {
		case 'refund':
			// ...
			break;
		case 'checkout':
			// ...
			break;
		default:
			const _: never = action;
			throw new Error('No action like this');
	}
}

function isString(x: string | number): boolean {
	if (typeof x === 'string') return true;
	else if (typeof x === 'number') return false;
	generateError('Type not exist');
}
