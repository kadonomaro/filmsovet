import Vue from 'vue';
import Vuex from 'vuex';
import { Database } from '../api/Database';
import { uniqueArray } from '../helpers';

Vue.use(Vuex);

const db = new Database;

export default new Vuex.Store({
  state: {
		films: [],
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

		changeFilmType({ commit }, type) {
			commit('CHANGE_TYPE', type);
		}
	},
	getters: {
		getFilms(state) {
			return {
				...state.films
				.sort((a, b) => a.title > b.title ? 1 : -1)
				.filter(film => state.options.type === 'all' ? film : film.tags.includes(state.options.type))
			}
		},

		getFilmsTags(state) {
			return state.films.flatMap(film => film.tags).filter(uniqueArray);
		},

		getCurrentFilmsTag(state) {
			return state.options.type;
		}
	}
});
