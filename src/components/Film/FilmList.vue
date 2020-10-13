<template>
	<div class="film-list">
		<div class="film-list__item" v-for="film in list" :key="film.id">
			<FilmListItem :film="film"/>
		</div>
	</div>
</template>

<script>
import FilmListItem from './FilmListItem';

export default {
	name: 'FilmList',
	components: {
		FilmListItem
	},
	props: {
		list: {
			type: Array,
			required: true
		}
	}
}
</script>

<style lang="scss">
	.film-list {
		display: flex;
		flex-wrap: wrap;
		margin: 0 -10px;
		&__item {
			flex-basis: 25%;
			max-width: 25%;
			min-width: 300px;
			padding: 10px;
			box-sizing: border-box;
		}
	}


	@media (max-width: $desktop-small) {
		.film-list {
			&__item {
				flex-basis: 33.3333%;
				max-width: 33.3333%;
			}
		}
	}

	@media (max-width: $tablet-small) {
		.film-list {
			&__item {
				flex-basis: 50%;
				max-width: 50%;
			}
		}
	}

	@media (max-width: $mobile-large) {
		.film-list {
			display: block;
			&__item {
				max-width: 100%;
			}
		}
	}
</style>
