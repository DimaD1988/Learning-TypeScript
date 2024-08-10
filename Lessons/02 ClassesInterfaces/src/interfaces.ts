// type AddFn = (a: number, b: number) => number;
interface AddFn {
	(a: number, b: number): number;
}

let add: AddFn;

add = (n1: number, n2: number) => {
	return n1 + n2;
};

interface Named {
	readonly name?: string;
	outputName?: string;
}

interface Greetable extends Named {
	greet(phrase: string): void;
}

class Person implements Greetable, Named {
	name?: string;
	age: number = 35;

	constructor(name?: string) {
		if (name) this.name = name;
	}

	greet(phrase?: string) {
		if (this.name) console.log(`${phrase} ${this.name}`);
		else console.log('Hello. How are you?');
	}
}

let user1: Person;
let user2: Person;
user1 = new Person('Dima');
user2 = new Person();

user1.greet('Hi there - I am');
user2.greet('Hello');
