type Admin = {
	name: string;
	privileges: string[];
};

type Employee = {
	name: string;
	startDate: Date;
};

type ElevatedEmployee = Admin & Employee;
// interface ElevatedEmployee = Admin, Employee;

const e1: ElevatedEmployee = {
	name: 'Dima',
	privileges: ['create-server'],
	startDate: new Date(),
};

type Combinable = string | number;
type Numeric = boolean | number;
type Universal = Combinable & Numeric;

// Type Guard
function add(a: number, b: number): number;
function add(a: string, b: string): string;
function add(a: Combinable, b: Combinable) {
	if (typeof a === 'string' || typeof b === 'string')
		return a.toString() + b.toString();
	return a + b;
}

const result = add('Max', 'Schwarz') as string;
result.split(' ');
console.log(result);

const fetchedUserData = {
	id: 'u1',
	name: 'Max',
	job: { title: 'CEO', description: 'My own company' },
};

console.log(fetchedUserData?.job?.title);

const userInput = '';
const storedDate = userInput ?? 'DEFAULT';
console.log(storedDate);

/*
type UnknownEmployee = Employee | Admin;

function printEmployeeInformation(emp: UnknownEmployee) {
	console.log(`Name: ${emp.name}`);
	if ('privileges' in emp) console.log(`Privileges: ${emp.privileges}`);
	if ('startDate' in emp) console.log(`Start Date: ${emp.startDate}`);
}

printEmployeeInformation(e1);
printEmployeeInformation({ name: 'Anna', startDate: new Date() });

class Car {
	drive() {
		console.log('Driving...');
	}
}

class Truck {
	drive() {
		console.log('Driving a Truck...');
	}
	loadCargo(amount: number) {
		console.log(`Loading cargo ... ${amount}`);
	}
}

type Vehicle = Car | Truck;
const v1 = new Car();
const v2 = new Truck();

function useVehicle(vehicle: Vehicle) {
	vehicle.drive();
	// FOR INTERFACES
	// if ('loadCargo' in vehicle) vehicle.loadCargo(1000);

	//FOR CLASSES / INSTANCES
	if (vehicle instanceof Truck) vehicle.loadCargo(1000);
}

useVehicle(v1);
useVehicle(v2);

interface Bird {
	type: 'bird';
	flyingSpeed: number;
}

interface Horse {
	type: 'horse';
	runningSpeed: number;
}

type Animal = Bird | Horse;

function moveAnimal(animal: Animal) {
	let speed: number;
	switch (animal.type) {
		case 'bird':
			speed = animal.flyingSpeed;
			break;
		case 'horse':
			speed = animal.runningSpeed;
			break;
	}
	console.log(`Moving with speed ${speed}`);
}

moveAnimal({ type: 'bird', flyingSpeed: 50 });
moveAnimal({ type: 'horse', runningSpeed: 15 });

// Variant 1
const userInputElement1 = <HTMLInputElement>(
	document.getElementById('user-input')!
);

// Variant 2
const userInputElement2 = document.getElementById(
	'user-input'
)! as HTMLInputElement;

if (userInputElement1) userInputElement1.value = 'Hi';


interface ErrorContainer {
  [prop: string]: string;
}

const errorBag: ErrorContainer = {
  email: 'Not a valid email!',
  username: 'Must start with a Capital character!'
}
*/
