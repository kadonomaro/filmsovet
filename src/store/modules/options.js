import { LocalStorage } from '@/api/LocalStorage';

const themeStorage = new LocalStorage('theme');

export default {
  state: {
		genre: 'all',
		type: 'all',
		sort: 'title',
		theme: 'dark'
  },
  mutations: {
		CHANGE_GENRE(state, genre) {
			state.genre = genre;
		},

		CHANGE_TYPE(state, type) {
			state.type = type
		},

		CHANGE_SORT(state, sort) {
			state.sort = sort;
		},

		CHANGE_THEME(state, theme) {
			state.theme = theme.length ? theme : 'dark';
			themeStorage.save(theme);
			document.documentElement.setAttribute('theme', theme);
		}
  },
  actions: {
		fetchTheme({ commit }) {
			const theme = themeStorage.load();
			commit('CHANGE_THEME', theme);
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
	}
};
