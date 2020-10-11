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

		CHANGE_EXPECTED_FILM(state, id) {
			const film = state.films.find(film => film.id === id);
			film.expected = !film.expected;
		},

		CHANGE_VIEWED_FILM(state, id) {
			const film = state.films.find(film => film.id === id);
			film.viewed = !film.viewed;
		},

		CHANGE_TYPE(state, type) {
			state.options.type = type;
		}
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
