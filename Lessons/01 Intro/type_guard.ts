interface User {
	name: string;
	email: string;
	login: string;
}

const user: User = {
	name: 'John',
	email: 'john@gmail.com',
	login: '1111',
};

interface Admin {
	name: string;
	role: number;
}

function lodId(id: string | number) {
	if (isString(id)) console.log(id);
	else console.log(id);
}

function isString(x: string | number): x is string {
	return typeof x === 'string';
}

///////////////////////////////

function isAdmin(user: User | Admin): user is Admin {
	return 'role' in user;
}

function setRoleZero(user: User | Admin) {
	if (isAdmin(user)) user.role = 0;
	else throw new Error('user is not an Admin');
}
