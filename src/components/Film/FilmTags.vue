<template>
	<div class="tags">
		<ul class="tags__list">
			<li class="tags__item" v-for="tag in tags" :key="tag">
				<button class="tags__button" @click="tagClickHandler(tag)">{{ tag }}</button>
			</li>
		</ul>
	</div>
</template>

<script>
export default {
	name: 'FilmTags',
	props: {
		tags: {
			type: Array,
			required: true
		}
	},
	methods: {
		tagClickHandler(tag) {
			this.$store.dispatch('changeFilmGenre', tag);
		}
	}
}
</script>

<style lang="scss">
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
		&__button {
			padding: 0 4px;
			color: var(--color-text);
			font-family: inherit;
			font-size: inherit;
			background-color: transparent;
			border: none;
			border-radius: 5px;
			transition: color 0.1s ease-in, background-color 0.1s ease-in;
			cursor: pointer;
			outline: none;
			&:hover,
			&:focus {
				color: var(--color-base-background);
				background-color: var(--color-text);
			}
		}
	}
</style>
