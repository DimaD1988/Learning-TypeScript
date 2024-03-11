type PaymentStatus = 'new' | 'paid';

class Payment {
	id: number;
	status: PaymentStatus;

	constructor(id: number) {
		this.id = id;
	}

	pay() {
		this.status = 'paid';
	}
}

class PersistedPayment extends Payment {
	databaseId: number;
	paidAt: Date;

	constructor() {
		const id = Math.random();
		super(id);
	}

	save() {
		// Save Data
	}

	// Must use Override
	override pay(date?: Date) {
		super.pay();
		if (date) this.paidAt = date;
	}
}

new PersistedPayment();
