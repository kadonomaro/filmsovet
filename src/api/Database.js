import { database } from '../main';

export class Database {

	async load() {
		try {
			const response = await database.ref('films/').once('value');
			return response.val();
		} catch (error) {
			console.error(error);
		}
	}

	async fill(films) {
		try {
			await database.ref('films/').set(films);
		} catch (error) {
			console.error(error);
		}
	}

	async add(film) {
		try {
			await database.ref('films/').push(film);
		} catch (error) {
			console.error(error);
		}
	}
}
