import Vue from 'vue';
import Vuex from 'vuex';
import { Database } from '../api/Database';

Vue.use(Vuex);

const db = new Database;

export default new Vuex.Store({
  state: {
		films: [
			{
				id: 1,
				title: 'Пленницы',
				link: 'https://www.kinopoisk.ru/film/455194/',
				image: 'https://via.placeholder.com/300',
				rating: 7.7,
				description: 'Келлер Довер сталкивается с самым большим кошмаром каждого родителя: его шестилетняя дочь пропала вместе с подругой',
				tags: ['триллер', 'драма']
			},
			{
				id: 2,
				title: 'Шпионский мост',
				link: 'https://www.kinopoisk.ru/film/840884/',
				image: 'https://via.placeholder.com/300',
				rating: 7.5,
				description: 'Том Хэнкс защищает в суде советского шпиона, пока в Берлине строят ту самую стену. По сценарию братьев Коэн',
				tags: ['триллер', 'драма']
			},
			{
				id: 3,
				title: 'Стажёр',
				link: 'https://www.kinopoisk.ru/film/677893/',
				image: 'https://via.placeholder.com/300',
				rating: 7.6,
				description: '70-летний вдовец Бен Уитакер обнаруживает, что выход на пенсию — еще не конец. Пользуясь случаем, он становится старшим стажером в интернет-магазине модной одежды под руководством Джулс Остин.',
				tags: ['мелодрама', 'комедия']
			}
		]
  },
  mutations: {
  },
  actions: {
		async fetchData({ commit }) {
			await this.dispatch('fillData');
			const data = await db.load();
			console.log(data);
		},

		async fillData({ state }) {
			await db.fill(state.films);
		}
	},
	getters: {
		getFilms(state) {
			return state.films;
		}
	}
});
