// Intersection
type User = {
	name: string;
	age: number;
	skills: string[];
};

type Role = {
	id: number;
};

type UserWithRole = User & Role;

let user: UserWithRole = {
	name: 'Dima',
	age: 34,
	skills: ['Programming', 'Sawing'],
	id: 1,
};

// Extends
interface User1 {
	name: string;
	age: number;
	skills: string[];
}

interface Role1 {
	roleId: number;
}

interface UserWithRole1 extends User1, Role1 {
	createAt: Date;
}

let user1: UserWithRole1 = {
	name: 'Dima',
	age: 34,
	skills: ['Programming', 'Sawing'],
	roleId: 1,
	createAt: new Date(),
};
