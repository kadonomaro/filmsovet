import Vue from 'vue';
import Vuex from 'vuex';
import optionsModule from './modules/options';
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
		loaded: false
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

		SET_LOADED_STATUS(state, status) {
			state.loaded = status;
		}
  },
  actions: {
		async fetchData({ commit }) {
			const data = await db.load();
			const expectedData = expectedStorage.load().filter(item => item.expected);
			const viewedData = viewedStorage.load().filter(item => item.viewed);

			const films = Object.values(data).map(film => {
				const expected = expectedData.find(expected => film.id === expected.id);
				const viewed = viewedData.find(viewed => film.id === viewed.id);
				return { ...film, ...expected, ...viewed };
			});
			commit('INIT_FILMS', { films,  expectedData, viewedData });
			commit('SET_LOADED_STATUS', true);
		},

		async addFilm({ commit }, data) {
			await db.add(data);
			commit('ADD_NEW_FILM', data);
		},

		changeExpectedFilm({ commit }, id) {
			commit('CHANGE_EXPECTED_FILM', id);
		},

		changeViewedFilm({ commit }, id) {
			commit('CHANGE_VIEWED_FILM', id);
		}
	},
	getters: {
		getFilms(state) {
			return getFilms(state, 'all');
		},

		getExpectedFilms(state) {
			return getFilms(state, 'expected');
		},

		getViewedFilms(state) {
			return getFilms(state, 'viewed');
		},

		getFilmsTags(state) {
			return [...state.films].flatMap(film => film.tags).filter(uniqueArray).sort();
		},

		getFilmsTypes(state) {
			return [...state.films].map(film => film.type).filter(uniqueArray).filter(Boolean).sort();
		},

		getFilmsNames(state) {
			return state.films.map(film => film.title.toLowerCase());
		}
	},
	modules: {
		options: optionsModule
	}
});


const getFilms = (state, type) => {
	return [...state.films]
		.sort((a, b) => a[state.options.sort] > b[state.options.sort] ? 1 : -1)
		.filter(film => type === 'all' ? !film.expected && !film.viewed : film[type])
		.filter(film => state.options.genre === 'all' ? film : film.tags.includes(state.options.genre))
		.filter(film => state.options.type === 'all' ? film : film.type === state.options.type);
}
