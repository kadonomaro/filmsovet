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
</style>
