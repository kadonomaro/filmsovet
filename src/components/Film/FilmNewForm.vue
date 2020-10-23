<template>
	<div class="film-new">
		<form class="film-new__form">
			<label class="film-new__label">
				<span class="film-new__title">Название</span>
				<input
					class="input film-new__input"
					:class="{ 'input--error': $v.film.title.$error }"
					type="text"
					v-model="film.title"
					@blur="$v.film.title.$touch()"
				>
				<span class="film-new__error" v-if="$v.film.title.$dirty && !$v.film.title.required">Поле обязательно для заполнения</span>
				<span class="film-new__error" v-else-if="!$v.film.title.notExists">Такой фильм уже существует</span>
			</label>

			<label class="film-new__label">
				<span class="film-new__title">Описание</span>
				<textarea
					class="input film-new__input film-new__textarea"
					:class="{ 'input--warning': $v.film.description.$error }"
					rows="5"
					v-model="film.description"
					@blur="$v.film.description.$touch()"
				></textarea>
				<span class="film-new__warning" v-if="$v.film.description.$error">Поле желательно для заполнения</span>
			</label>

			<label class="film-new__label">
				<span class="film-new__title">Ссылка</span>
				<input
					class="input film-new__input"
					:class="{ 'input--warning': $v.film.link.$error }"
					type="text"
					v-model="film.link"
					@blur="$v.film.link.$touch()"
				>
				<span class="film-new__warning" v-if="$v.film.link.$error">Поле желательно для заполнения</span>
			</label>

			<label class="film-new__label">
				<span class="film-new__title">Ссылка на изображение</span>
				<input
					class="input film-new__input"
					:class="{ 'input--warning': $v.film.image.$error }"
					type="text"
					v-model="film.image"
					@blur="$v.film.image.$touch()"
				>
				<span class="film-new__warning" v-if="$v.film.image.$error">Поле желательно для заполнения</span>
			</label>

			<label class="film-new__label">
				<span class="film-new__title">Рейтинг</span>
				<input
					class="input film-new__input"
					:class="{ 'input--warning': $v.film.rating.$error }"
					type="text"
					v-model="film.rating"
					@blur="$v.film.rating.$touch()"
				>
				<span class="film-new__warning" v-if="$v.film.rating.$error">Поле желательно для заполнения</span>
			</label>

			<label class="film-new__label">
				<span class="film-new__title">Жанр</span>
				<input
					class="input film-new__input"
					:class="{ 'input--warning': $v.film.tags.$error }"
					type="text"
					v-model="film.tags"
					@blur="$v.film.tags.$touch()"
				>
				<span class="film-new__warning" v-if="$v.film.tags.$error">Поле желательно для заполнения</span>
			</label>

			<div class="film-new__controls">
				<button
					class="button button--icon-check"
					style="margin-right: 5px"
					title="Добавить"
					:disabled="$v.film.title.$invalid"
					@click.prevent="submitHandler"
				></button>
				<button
					class="button button--danger button--icon-cancel"
					title="Отмена"
					@click.prevent="cancelHandler"
				></button>
			</div>
		</form>
	</div>
</template>

<script>
import { mapGetters } from 'vuex';
import { required } from 'vuelidate/lib/validators';
import { splitString } from '@/helpers';

export default {
	name: 'FilmNewForm',
	data() {
		return {
			film: {
				id: '',
				title: '',
				description: '',
				link: '',
				image: '',
				rating: '',
				tags: '',
				expected: false,
				viewed: false
			}
		}
	},
	validations: {
		film: {
			title: {
				required,
				notExists(value) {
					return !this.getFilmsNames.includes(value.toLowerCase().trim());
				}
			},
			description: { required },
			link: { required },
			image: { required },
			rating: { required },
			tags: { required }
		}
	},
	methods: {
		submitHandler() {
				this.film.tags = splitString(this.film.tags).filter(Boolean);
				this.film.rating = this.film.rating.replace(',', '.');
				this.film.id = (+new Date).toString(36);
				this.$emit('on-submit', this.film);
				this.reset();
		},

		cancelHandler() {
			this.$emit('on-cancel');
			this.reset();
		},

		reset() {
			this.$v.$reset();
			this.film = {
				id: '',
				title: '',
				description: '',
				link: '',
				image: '',
				rating: '',
				tags: '',
				expected: false,
				viewed: false
			}
		}
	},
	computed: {
		...mapGetters(['getFilmsNames'])
	}
}
</script>

<style lang="scss">
	.film-new {
		&__label {
			position: relative;
			display: block;
			margin-bottom: 15px;
			font-size: 14px;
		}
		&__input {
			width: 100%;
		}
		&__textarea {
			min-height: 100px;
		}
		&__controls {
			display: flex;
			justify-content: flex-end;
		}
		&__error,
		&__warning {
			position: absolute;
			z-index: 9;
			left: 0;
			bottom: 3px;
			width: 100%;
			padding: 3px 6px;
			color: #ffffff;
			line-height: 14px;
			border-bottom-left-radius: 5px;
			border-bottom-right-radius: 5px;
			transform: translateY(100%);
			box-sizing: border-box;
		}
		&__error {
			background-color: $color-danger;
		}
		&__warning {
			background-color: $color-warning;
		}
	}
</style>
