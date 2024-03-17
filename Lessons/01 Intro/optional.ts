interface User {
	login: string;
	password?: string;
}

const user: User = {
	login: '12345',
	password: '1111', // Optional
};

function multiply(first: number, second?: number): number {
	if (!second) return first * first;
	return first * second;
}

multiply(5);
multiply(3, 4);

interface UserPro {
	login: string;
	password?: {
		type: 'primary' | 'secondary';
	};
}

function testPass(user: UserPro) {
	const t = user.password?.type;
}

function test(param?: string) {
	const t = param ?? multiply(5);
}
