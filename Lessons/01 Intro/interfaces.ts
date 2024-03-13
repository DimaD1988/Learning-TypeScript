// 1) Not practic notation
/*
const oldCivic = {
	name: 'civic',
	year: 2000,
	broken: true,
};

const printVenicle = (venicle: {
  name: string;
	year: number;
	broken: boolean;
}): void => {
  console.log(`Name: ${venicle.name}`);
	console.log(`Year: ${venicle.year}`);
	console.log(`Broken: ${venicle.broken}`);
};
*/

// 2) good way by interface
interface Vehicle {
	name: string;
	year: number;
	broken: boolean;
	/////////////////////////
	summary(): string;
}

interface Reportable {
	summary(): string;
}

const oldCivic = {
	name: 'civic',
	year: 2000,
	broken: true,
	///////////////////////
	summary(): string {
		return `Name: ${this.name}`;
	},
};

const drink = {
	color: 'yellow',
	carbonated: true,
	sugar: 40,
	///////////////////////
	summary(): string {
		return `My drink has  ${this.sugar} grams of sugar`;
	},
};

// Work with values
const printVenicle = (venicle: Vehicle): void => {
	console.log(`Name: ${venicle.name}`);
	console.log(`Year: ${venicle.year}`);
	console.log(`Broken: ${venicle.broken}`);
};
printVenicle(oldCivic);

// More generic way
const printSummary = (item: Reportable): void => {
	console.log(item.summary());
};

// We can use a single interface to describe the shape or the different properties of objects
printSummary(oldCivic);
printSummary(drink);
