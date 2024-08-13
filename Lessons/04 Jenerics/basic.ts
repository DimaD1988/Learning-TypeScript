const num: Array<number> = [1, 2, 3];

async function test() {
	const a = await new Promise<number>((resolve, reject) => {
		resolve(1);
	});
}

const check: Record<string, boolean> = {
	drive: true,
	autogear: false,
};

function logMiddleware<T>(data: T): T {
	console.log(data);
	return data;
}
const res = logMiddleware<number>(10);

function getSpliteHalf<T>(data: Array<T>): Array<T> {
	const l = data.length / 2;
	return data.splice(0, 1);
}
getSpliteHalf<number>([1, 2, 3, 4]);

const split: <T>(data: Array<T>) => Array<T> = getSpliteHalf;
const split2: <Y>(data: Array<Y>) => Array<Y> = getSpliteHalf;

interface ILogLine<T> {
	timeStamp: Date;
	data: T;
}

type LOgLineType<T> = {
	timeStamp: Date;
	data: T;
};

const logLine: ILogLine<{ a: number }> = {
	timeStamp: new Date(),
	data: {
		a: 1,
	},
};
