class UserService {
	private static db: any;

	static getUser(id: number) {
		return UserService.db.findById(id);
	}

	// EXIST in INSTANCE ONLY
	constructor(id: number) {}

	create() {
		UserService.db;
	}

	// Execute when start code
	static {
		UserService.db = 'abc';
	}
}

UserService.getUser(1);
const inst = new UserService(1);
inst.create();
