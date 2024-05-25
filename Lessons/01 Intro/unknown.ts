let input: unknown;

input = 3;
input = ['sf', 'sdf'];

// Error detect - UNKNOWN vs ANY
// let res: string = input;

function run(i: unknown) {
	if (typeof i === 'number') i++; //Number
	else i; //Unknown
}
run(input);

async function getData() {
	try {
		await fetch('');
	} catch (err) {
		// if (err instanceof Error) console.log(err.message);

		const error = err as Error;
		console.log(error.message);
	}
}

type U1 = unknown | number; //Unknown
type U2 = unknown & string; //String
