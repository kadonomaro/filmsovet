<template>
	<div class="film-list">
		<div class="film-list__item" v-for="film in getFilms" :key="film.id">
			<FilmListItem :film="film"/>
		</div>

	</div>
</template>

<script>
import { mapGetters } from 'vuex';
import FilmListItem from './FilmListItem';

export default {
	name: 'FilmList',
	components: {
		FilmListItem
	},
	computed: {
		...mapGetters(['getFilms'])
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
			min-width: 250px;
			padding: 10px;
			box-sizing: border-box;
		}
	}
</style>
