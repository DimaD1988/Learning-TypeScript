const carMakers: string[] = ['ford', 'toyota', 'chevy'];
const dates: Date[] = [new Date(), new Date()];
const carsByMake: string[][] = [['f150'], ['corolla'], ['comaro']];

// Help with inference when extracting values
const car = carMakers[0];
const myCar = carMakers.pop();

// Prevent incompatible value
carMakers.push(100); // Error

// help with 'map'
carMakers.map((car: string): string => {
	return car.toLocaleUpperCase();
});

// Flexible types
const inportantDates: (Date | string)[] = [new Date()];
inportantDates.push('2030-10-10');
inportantDates.push(new Date());
