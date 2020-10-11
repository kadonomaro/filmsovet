<template>
	<div class="film-new">
		<form class="film-new__form">
			<label class="film-new__label">
				<span class="film-new__title">Название</span>
				<input class="input film-new__input" type="text" v-model="film.title">
			</label>
			<label class="film-new__label">
				<span class="film-new__title">Описание</span>
				<textarea class="input film-new__input film-new__textarea" rows="5" v-model="film.description"></textarea>
			</label>
			<label class="film-new__label">
				<span class="film-new__title">Ссылка</span>
				<input class="input film-new__input" type="text" v-model="film.link">
			</label>
			<label class="film-new__label">
				<span class="film-new__title">Ссылка на изображение</span>
				<input class="input film-new__input" type="text" v-model="film.image">
			</label>
			<label class="film-new__label">
				<span class="film-new__title">Рейтинг</span>
				<input class="input film-new__input" type="text" v-model="film.rating">
			</label>
			<label class="film-new__label">
				<span class="film-new__title">Жанр</span>
				<input class="input film-new__input" type="text" v-model="film.tags">
			</label>
		</form>
	</div>
</template>

<script>
import { splitString } from '@/helpers';

export default {
	name: 'FilmNewForm',
	props: {
		submitted: {
			type: Boolean
		}
	},
	data() {
		return {
			film: {
				id: '',
				title: '',
				description: '',
				link: '',
				image: '',
				rating: '',
				tags: ''
			}
		}
	},
	methods: {
		clear() {
			this.film = {
				title: '',
				description: '',
				link: '',
				image: '',
				rating: '',
				tags: ''
			}
		}
	},
	watch: {
		submitted(value) {
			if (value) {
				this.film.tags = splitString(this.film.tags).filter(Boolean);
				this.film.rating = this.film.rating.replace(',', '.');
				this.film.id = (+new Date).toString(36);
				this.$emit('on-submit', this.film);
				this.clear();
			}
		}
	}
}
</script>

<style lang="scss">
	.film-new {
		&__label {
			display: block;
			margin-bottom: 5px;
			font-size: 14px;
		}
		&__input {
			width: 100%;
		}
		&__textarea {
			min-height: 100px;
		}
	}
</style>
