<template>
	<div class="film-item">
		<span class="film-item__rating" v-if="film.rating">{{ film.rating }}</span>

		<div class="film-item__image">
			<a :href="film.link" target="_blank" v-if="film.link">
				<img
					class="film-item__image-img"
					:src="image"
					:alt="film.title"
				>
			</a>
			<img
				class="film-item__image-img"
				:src="image"
				:alt="film.title"
				v-else
			>
		</div>

		<div class="film-item__text">
			<h2 class="film-item__title">{{ film.title }}</h2>
			<div class="film-item__desc" v-if="film.description">
				<p>{{ film.description }}</p>
			</div>
		</div>

		<div class="film-item__tags" v-if="film.tags">
			<div class="tags">
				<ul class="tags__list">
					<li class="tags__item" v-for="tag in film.tags" :key="tag">{{ tag }}</li>
				</ul>
			</div>
		</div>

		<div class="film-item__controls">
			<button
				class="button button--icon-bookmark film-item__button"
				:class="{ 'button--danger': film.expected }"
				:title="film.expected ? 'Убрать из ожидаемых' : 'Хочу посмотреть'"
				@click="changeExpectedFilm"
			></button>
			<button
				class="button button--icon-check film-item__button"
				:class="{ 'button--danger': film.viewed }"
				:title="film.viewed ? 'Убрать из просмотренных' : 'Уже посмотрел'"
				@click="changeViewedFilm"
			></button>
		</div>
	</div>
</template>

<script>
export default {
	name: 'FilmListItem',
	props: {
		film: {
			type: Object,
			required: true
		}
	},
	methods: {
		changeExpectedFilm() {
			this.$store.dispatch('changeExpectedFilm', this.film.id);
		},

		changeViewedFilm() {
			this.$store.dispatch('changeViewedFilm', this.film.id);
		}
	},
	computed: {
		image() {
			return this.film.image || 'https://via.placeholder.com/400x200?text=No+image'
		}
	}
}
</script>

<style lang="scss">
	$square: 50px;

	.film-item {
		position: relative;
		display: flex;
		flex-direction: column;
		height: 100%;
		background-color: $color-dark-gray;
		&:hover &__image-img {
			transform: scale(1.03);
		}
		&__image {
			height: 200px;
			overflow: hidden;
		}
		&__image-img {
			width: 100%;
			height: 100%;
			object-fit: cover;
			transition: transform 0.2s ease-in;
		}
		&__text {
			flex-grow: 1;
			padding: 10px;
			background-color: inherit;
			p {
				margin: 0 0 10px;
			}
		}
		&__title {
			margin: 0 0 10px;
			font-size: 20px;
			line-height: 1;
			text-align: center;
		}
		&__rating {
			position: absolute;
			z-index: 9;
			top: 0;
			right: 0;
			width: $square;
			height: $square;
			padding: 5px;
			font-size: 32px;
			font-weight: bold;
			line-height: $square;
			text-align: center;
			background-color: $color-accent;
			pointer-events: none;
		}
		&__controls {
			display: flex;
			padding: 10px;
			background-color: $color-darkest;
		}
		&__button {
			&:not(:last-child) {
				margin-right: 10px;
			}
		}
	}

	.tags {
		padding: 10px;
		&__list {
			display: flex;
			flex-wrap: wrap;
			margin: 0;
			padding: 0;
			list-style: none;
		}
		&__item {
			&:not(:last-child) {
				margin-right: 10px;
			}
		}
	}


</style>
