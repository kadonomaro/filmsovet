import Vue from 'vue';
import Vuex from 'vuex';
import { Database } from '../api/Database';
import { uniqueArray } from '../helpers';

Vue.use(Vuex);

const db = new Database;

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
		CHANGE_TYPE(state, type) {
			state.options.type = type;
		},

		INIT_FILMS(state, films) {
			state.films = films;
		},

		ADD_NEW_FILM(state, film) {
			state.films.push(film);
		},

		ADD_EXPECTED_FILM(state, film) {
			state.expectedFilms.push(film);
		},

		ADD_VIEWED_FILM(state, film) {
			state.viewedFilms.push(film);
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

		addExpectedFilm({ commit }, film) {
			commit('ADD_EXPECTED_FILM', film);
		},

		addViewedFilm({ commit }, film) {
			commit('ADD_VIEWED_FILM', film);
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
			return state.films.flatMap(film => film.tags).filter(uniqueArray);
		},

		getFilmsCurrentTag(state) {
			return state.options.type;
		}
	}
});
