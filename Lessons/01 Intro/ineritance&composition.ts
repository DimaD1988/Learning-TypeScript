class User {
	name: string;

	constructor(name: string) {
		this.name = name;
	}
}

/////////////////////////////
// Inheritance
// Not Good
class Users extends Array<User> {
	searshByName(name: string) {
		return this.filter((u) => u.name === name);
	}

	override toString(): string {
		return this.map((u) => u.name).join(', ');
	}
}

const users = new Users();
users.push(new User('John'));
users.push(new User('Alex'));
console.log(users.toString());

// Good
class UsersList {
	users: User[];

	push(u: User) {
		this.users.push(u);
	}
}
/////////////////////////////

// Composition
class Payment {
	date: Date;
}
/* WRONG
class UserWithPayment extends Payment{
  name: string;
}
*/

// CORRECT
class UserWithPayment {
	user: User;
	payment: Payment;

	constructor(user: User, payment: Payment) {
		this.user = user;
		this.payment = payment;
	}
}
