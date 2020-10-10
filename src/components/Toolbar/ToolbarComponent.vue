<template>
	<div class="toolbar">
		<select class="input toolbar__select" @change="changeHandler">
			<option value="all">Выберите жанр</option>
			<option
				v-for="tag in getFilmsTags"
				:key="tag"
				:value="tag"
			>{{ tag }}</option>
		</select>
		<button
			class="button button---icon-plus button--auto-height toolbar__button"
			title="Добавить фильм"
			@click="clickHandler"
		></button>
	</div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
	name: 'ToolbarComponent',
	methods: {
		changeHandler(event) {
			this.$store.dispatch('changeFilmType', event.target.value);
		},
		clickHandler() {
			console.log('click');
		}
	},
	computed: {
		...mapGetters(['getFilmsTags'])
	}
}
</script>

<style lang="scss">
	.toolbar {
		display: flex;
		padding: 10px 0;
		&__select {
			margin-right: 10px;
		}
	}
</style>
