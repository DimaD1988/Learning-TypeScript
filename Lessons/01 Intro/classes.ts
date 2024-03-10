class Venicle {
	constructor(public color: string) {
		this.color = color;
	}

	// Protected method can be called by OTHER METHODS in THIS class, or by OTHER METHODS in CHILD classes
	protected honk(): void {
		console.log('beep');
	}
}
const venicle = new Venicle('red');
console.log(venicle.color);

class Car extends Venicle {
	constructor(public wheels: number, color: string) {
		super(color);
	}
	// Public method can be called any where, any time
	public startDriveProcess(): void {
		this.drive();
		this.honk();
		this.sayColor();
	}

	public sayColor(): void {
		console.log(this.color);
	}

	// Private method can only be called by OTHER METHODS in THIS class
	private drive(): void {
		console.log('vroom');
	}
}
const car = new Car(4, 'green');
//////////////////////////
car.startDriveProcess();
