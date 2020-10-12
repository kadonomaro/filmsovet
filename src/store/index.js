import Vue from 'vue';
import Vuex from 'vuex';
import { Database } from '../api/Database';
import { LocalStorage } from '../api/LocalStorage';
import { uniqueArray } from '../helpers';

Vue.use(Vuex);

const db = new Database;
const expectedStorage = new LocalStorage('expected');
const viewedStorage = new LocalStorage('viewed');

export default new Vuex.Store({
  state: {
		films: [],
		expectedFilms: [],
		viewedFilms: [],
		options: {
			type: 'all'
		}
  },
  mutations: {
		INIT_FILMS(state, { films, expectedData, viewedData }) {
			state.films = films;
			state.expectedFilms = expectedData;
			state.viewedFilms = viewedData;
		},

		ADD_NEW_FILM(state, film) {
			state.films.push(film);
		},

		CHANGE_EXPECTED_FILM(state, id) {
			const film = state.films.find(film => film.id === id);
			if (film) {
				film.expected = !film.expected;

				const expectedFilm = state.expectedFilms.find(film => film.id === id);
				if (expectedFilm) {
					expectedFilm.expected = !expectedFilm.expected;
				} else {
					state.expectedFilms.push({ id: film.id, expected: film.expected });
				}

				expectedStorage.save(state.expectedFilms);
			}
		},

		CHANGE_VIEWED_FILM(state, id) {
			const film = state.films.find(film => film.id === id);
			if (film) {
				film.viewed = !film.viewed;

				const viewedFilm = state.viewedFilms.find(film => film.id === id);
				if (viewedFilm) {
					viewedFilm.viewed = !viewedFilm.viewed;
				} else {
					state.viewedFilms.push({ id: film.id, viewed: film.viewed });
				}

				viewedStorage.save(state.viewedFilms);
			}
		},

		CHANGE_TYPE(state, type) {
			state.options.type = type;
		}
  },
  actions: {
		async fetchData({ commit }) {
			const data = await db.load();
			const expectedData = expectedStorage.load();
			const viewedData = viewedStorage.load();

			const films = Object.values(data).map(film => {
				const expected = expectedData.find(expected => film.id === expected.id);
				const viewed = viewedData.find(viewed => film.id === viewed.id);
				return { ...film, ...expected, ...viewed };
			});
			commit('INIT_FILMS', { films,  expectedData, viewedData });
		},

		async addData({ commit }, data) {
			await db.add(data);
			commit('ADD_NEW_FILM', data);
		},

		changeExpectedFilm({ commit }, id) {
			commit('CHANGE_EXPECTED_FILM', id);
		},

		changeViewedFilm({ commit }, id) {
			commit('CHANGE_VIEWED_FILM', id);
		},

		changeFilmType({ commit }, type) {
			commit('CHANGE_TYPE', type);
		}
	},
	getters: {
		getFilms(state) {
			return [
				...state.films
				.sort((a, b) => a.title > b.title ? 1 : -1)
				.filter(film => state.options.type === 'all' ? film : film.tags.includes(state.options.type))
				.filter(film => !film.expected && !film.viewed)
			]
		},

		getExpectedFilms(state) {
			return state.films
				.filter(film => film.expected === true)
				.filter(film => state.options.type === 'all' ? film : film.tags.includes(state.options.type));
		},

		getViewedFilms(state) {
			return state.films
				.filter(film => film.viewed === true)
				.filter(film => state.options.type === 'all' ? film : film.tags.includes(state.options.type));
		},

		getFilmsTags(state) {
			return [...state.films.flatMap(film => film.tags).filter(uniqueArray).sort()];
		},

		getFilmsCurrentTag(state) {
			return state.options.type;
		}
	}
});
