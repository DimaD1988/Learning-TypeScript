interface Venicle {
	run: number;
}

function kmToMiles<T extends Venicle>(vehicle: T): T {
	vehicle.run = vehicle.run / 0.62;
	return vehicle;
}

interface LSV extends Venicle {
	capacity: number;
}

kmToMiles({ run: 1 });

function logId<T extends string | number, Y>(
	id: T,
	additionalData: Y
): { id: T; data: Y } {
	console.log(id);
	console.log(additionalData);
	return { id, data: additionalData };
}
