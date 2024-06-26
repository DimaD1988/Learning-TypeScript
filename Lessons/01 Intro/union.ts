const logId = (id: string | number | boolean) => {
	if (typeof id === 'string') console.log(id);
	else if (typeof id === 'number') console.log(id);
	else console.log(id);
};

const logError = (err: string | string[]) => {
	if (Array.isArray(err)) console.log(err);
	else console.log(err);
};

const logObject = (obj: { a: number } | { b: number }) => {
	if ('a' in obj) console.log(obj.a);
	else console.log(obj.b);
};

const logMultipliesIds = (a: string | number, b: string | boolean) => {
	if (a === b) console.log(a, b); // string
};
