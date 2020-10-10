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
		INIT_FILMS(state, films) {
			state.films = films;
		},

		INIT_EXPECTED_FILMS(state, films) {
			state.expectedFilms = films;
		},

		INIT_VIEWED_FILMS(state, films) {
			state.viewedFilms = films;
		},

		ADD_NEW_FILM(state, film) {
			state.films.push(film);
		},

		ADD_EXPECTED_FILM(state, film) {
			state.expectedFilms.push(film);
			expectedStorage.save(state.expectedFilms);
		},

		ADD_VIEWED_FILM(state, film) {
			state.viewedFilms.push(film);
			viewedStorage.save(state.viewedFilms);
		},

		CHANGE_TYPE(state, type) {
			state.options.type = type;
		},
  },
  actions: {
		async fetchData({ commit }) {
			const data = await db.load();
			commit('INIT_FILMS', Object.values(data));
		},

		fetchExpectedFilms({ commit }) {
			const data = expectedStorage.load();
			commit('INIT_EXPECTED_FILMS', data);
		},

		fetchViewedFilms({ commit }) {
			const data = viewedStorage.load();
			commit('INIT_VIEWED_FILMS', data);
		},

		async addData({ commit }, data) {
			await db.add(data);
			commit('ADD_NEW_FILM', data);
		},

		addExpectedFilm({ commit, state }, film) {
			if (!state.expectedFilms.some(item => item.id === film.id)) {
				commit('ADD_EXPECTED_FILM', film);
			}
		},

		addViewedFilm({ commit, state }, film) {
			if (!state.viewedFilms.some(item => item.id === film.id)) {
				commit('ADD_VIEWED_FILM', film);
			}
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
			]
		},

		getExpectedFilms(state) {
			return state.expectedFilms;
		},

		getViewedFilms(state) {
			return state.viewedFilms;
		},

		getFilmsTags(state) {
			return [...state.films.flatMap(film => film.tags).filter(uniqueArray).sort()];
		},

		getFilmsCurrentTag(state) {
			return state.options.type;
		}
	}
});
