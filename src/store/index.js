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
		// expectedFilms: [],
		// viewedFilms: [],
		options: {
			type: 'all'
		}
  },
  mutations: {
		INIT_FILMS(state, films) {
			state.films = films;
		},

		ADD_NEW_FILM(state, film) {
			state.films.push(film);
		},

		ADD_EXPECTED_FILM(state, id) {
			state.films.find(film => film.id === id).expected = true;
		},

		ADD_VIEWED_FILM(state, id) {
			state.films.find(film => film.id === id).viewed = true;
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

		async addData({ commit }, data) {
			await db.add(data);
			commit('ADD_NEW_FILM', data);
		},

		addExpectedFilm({ commit }, id) {
			commit('ADD_EXPECTED_FILM', id);
		},

		addViewedFilm({ commit }, id) {
			commit('ADD_VIEWED_FILM', id);
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
			return state.films.filter(film => film.expected === true);
		},

		getViewedFilms(state) {
			return state.films.filter(film => film.viewed === true);
		},

		getFilmsTags(state) {
			return [...state.films.flatMap(film => film.tags).filter(uniqueArray).sort()];
		},

		getFilmsCurrentTag(state) {
			return state.options.type;
		}
	}
});
