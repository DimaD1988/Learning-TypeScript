const drink = {
	color: 'brown',
	carbonated: true,
	sugar: 40,
};

// 1) Declarate typle manually
const cocaCola: [string, boolean, number] = ['brown', true, 40];
cocaCola[0] = 40; // Error

// 2) Use TYPE notation
// Type alias
type Drink = [string, boolean, number];
const sprite: Drink = ['clear', true, 40];
const orangeJuice: Drink = ['orange', false, 2];

//////////////////////////////
// Typles vs Objects
const carSpecs: [number, number] = [400, 3354];

const carStats = {
	horsepower: 400,
	weight: 3354,
};
