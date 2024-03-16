const n: null = null;
const n1: any = null;
////////////////////
interface User {
	name: string;
}

function getUser() {
	if (Math.random() > 0.5) return null;
	else return { name: 'John' } as User;
}
const user = getUser();

if (user) {
	const n2 = user.name;
}
