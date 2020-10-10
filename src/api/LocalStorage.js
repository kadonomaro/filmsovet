export class LocalStorage {
	constructor(name) {
		this.name = name;
	}

	load() {
		if (!localStorage.getItem(this.name)) {
			return [];
		}
		return JSON.parse(localStorage.getItem(this.name));
	}

	save(data) {
		localStorage.setItem(this.name, JSON.stringify(data));
	}

	clear() {
		localStorage.removeItem(this.name);
	}
}
