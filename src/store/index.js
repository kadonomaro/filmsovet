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
			},
			{
				id: 4,
				title: 'Игра на выживание (сериал)',
				link: 'https://www.kinopoisk.ru/series/1395366/',
				image: 'https://via.placeholder.com/300',
				rating: 7.7,
				description: 'Чем может обернуться обычное телевизионное реалити-шоу для его участников? 16 человек отправляются в дикую сибирскую тайгу, чтобы побороться за один миллион евро. Правила просты: никакой еды, личных вещей, электричества, связи и цивилизации на сотни километров вокруг. Победит тот, кто дойдет до конца. Но ТВ-проект превращается в смертельно опасную игру, где главным призом становится жизнь.',
				tags: ['триллер', 'приключения']
			},
			{
				id: 5,
				title: 'Водоворот (сериал)',
				link: 'https://www.kinopoisk.ru/series/1227993/',
				image: 'https://via.placeholder.com/300',
				rating: 7.4,
				description: 'В городском коллекторе группа следователей обнаруживает убитых подростков, которых никто никогда не разыскивал. Раскручивая шаг за шагом это дело, полицейские сталкиваются лицом к лицу с безусловным злом — водоворотом большого города, который засасывает и уничтожает слабых — тех, кого никто не любит и не ждет дома. Зло безнаказанно уничтожает людей, и каждый из героев столкнется с ним лично, заглянет внутрь себя, чтобы встретиться с собственными демонами и страхами.',
				tags: ['триллер', 'драма', 'детектив', 'криминал']
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
			return { ...state.films.sort((a, b) => a.title > b.title ? 1 : -1) }
		}
	}
});
