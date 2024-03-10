let a = 5;
let b: string = a.toString();

let c = 'abc';
let d: number = parseInt(c);

/////////////////////////////
let e: string = new String(a).valueOf();
let f: boolean = new Boolean(a).valueOf();
/////////////////////////////

interface User {
	name: string;
	email: string;
	login: string;
}

const user1: User = {
	name: 'John',
	email: 'john@gmail.com',
	login: '1111',
};

interface Admin {
	name: string;
	role: number;
}

// Wrong way
/*
const admin: Admin = {
  ...user,
  role: 1,
}
*/

// Right way
function userToAdmin(user: User): Admin {
	return {
		name: user1.name,
		role: 1,
	};
}
