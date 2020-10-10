<template>
	<div class="toolbar">
		<div class="toolbar__inner">
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

		<AppModal v-show="modal.visible" @close="closeModalHandler">
      <template v-slot:header>
				<span>Добавить новый фильм</span>
      </template>
      <template v-slot:body>
				Текст
      </template>
			<template v-slot:footer>
				<button class="button button---icon-check" style="margin-right: 5px" title="Добавить"></button>
				<button
					class="button button--danger button---icon-cancel"
					title="Отмена"
					@click="closeModalHandler"
				></button>
      </template>
    </AppModal>

	</div>
</template>

<script>
import { mapGetters } from 'vuex';
import AppModal from '../partials/AppModal';

export default {
	name: 'ToolbarComponent',
	components: {
		AppModal
	},
	data() {
		return {
			modal: {
				visible: false
			}
		}
	},
	methods: {
		changeHandler(event) {
			this.$store.dispatch('changeFilmType', event.target.value);
		},
		clickHandler() {
			this.modal.visible = true;
		},
		closeModalHandler() {
			this.modal.visible = false;
		}
	},
	computed: {
		...mapGetters(['getFilmsTags'])
	}
}
</script>

<style lang="scss">
	.toolbar {
		padding: 10px 0;
		&__inner {
			display: flex;
		}
		&__select {
			margin-right: 10px;
		}
	}
</style>
