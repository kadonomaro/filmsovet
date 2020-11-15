import Vue from 'vue';
import Vuex from 'vuex';
import { Database } from '../api/Database';
import { LocalStorage } from '../api/LocalStorage';
import { uniqueArray } from '../helpers';

Vue.use(Vuex);

const db = new Database;
const expectedStorage = new LocalStorage('expected');
const viewedStorage = new LocalStorage('viewed');
const themeStorage = new LocalStorage('theme');

export default new Vuex.Store({
  state: {
		films: [],
		expectedFilms: [],
		viewedFilms: [],
		options: {
			genre: 'all',
			type: 'all',
			sort: 'title',
			theme: 'dark'
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

		CHANGE_GENRE(state, genre) {
			state.options.genre = genre;
		},

		CHANGE_TYPE(state, type) {
			state.options.type = type
		},

		CHANGE_SORT(state, sort) {
			state.options.sort = sort;
		},

		CHANGE_THEME(state, theme) {
			state.options.theme = theme;
			themeStorage.save(theme);
			document.documentElement.setAttribute('theme', theme);
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
		},

		fetchTheme({ commit }) {
			const theme = themeStorage.load() || 'dark';
			commit('CHANGE_THEME', theme);
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

		changeFilmGenre({ commit }, genre) {
			commit('CHANGE_GENRE', genre);
		},

		changeFilmType({ commit }, type) {
			commit('CHANGE_TYPE', type);
		},

		changeFilmSort({ commit }, sort) {
			commit('CHANGE_SORT', sort);
		},

		changeTheme({ commit }, theme) {
			commit('CHANGE_THEME', theme);
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
			return [...state.films.flatMap(film => film.tags).filter(uniqueArray).sort()];
		},

		getFilmsTypes(state) {
			return [...state.films.map(film => film.type).filter(uniqueArray).sort()];
		},

		getFilmsNames(state) {
			return state.films.map(film => film.title.toLowerCase());
		}
	}
});


const getFilms = (state, type) => {
	return [...state.films]
		.sort((a, b) => a[state.options.sort] > b[state.options.sort] ? 1 : -1)
		.filter(film => type === 'all' ? !film.expected && !film.viewed : film[type])
		.filter(film => state.options.genre === 'all' ? film : film.tags.includes(state.options.genre))
		.filter(film => state.options.type === 'all' ? film : film.type === state.options.type);
}
