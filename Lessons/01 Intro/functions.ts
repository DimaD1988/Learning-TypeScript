const add = (a: number, b: number): number => a + b;

const subtract = (a: number, b: number): number => a - b;

function divide(a: number, b: number): number {
	return a / b;
}

function multiply(a: number, b: number): number {
	return a * b;
}

//Return void but still can return NULL & undefined
const logger = (message: string): void => console.log(message);

// never or void
const throwError = (message: string): never => {
	throw new Error(message);
};

const throwErrorV2 = (message: string): string => {
	if (!message) throw new Error(message);
	return message;
};

const todaysWeather = {
	date: new Date(),
	weather: 'sunny',
};
/*
const logWeather = (forecast: { date: Date; weather: string }): void => {
	console.log(forecast.date);
	console.log(forecast.weather);
};*/
const logWeather = ({
	date,
	weather,
}: {
	date: Date;
	weather: string;
}): void => {
	console.log(date);
	console.log(weather);
};

logWeather(todaysWeather);
