<template>
	<div class="toolbar">
		<div class="toolbar__inner">
			<select class="input toolbar__select" @change="changeTypeHandler">
				<option value="all">Выберите жанр</option>
				<option
					v-for="tag in getFilmsTags"
					:key="tag"
					:value="tag"
					:selected="tag === getFilmsCurrentTag"
				>{{ tag }}</option>
			</select>
			<select class="input toolbar__select" @change="changeSortHandler">
				<option value="title">По имени</option>
				<option value="rating">По рейтингу</option>
			</select>
			<button
				class="button button--icon-plus button--auto-height toolbar__button"
				title="Добавить фильм"
				@click="openModalHandler"
			></button>
		</div>

		<AppModal v-show="modal.visible" @close="closeModalHandler">
      <template v-slot:header>
				<span>Добавить новый фильм</span>
      </template>
      <template v-slot:body>
				<FilmNewForm :submitted="modal.submitted" @on-submit="submitHandler" @on-cancel="closeModalHandler" />
      </template>
    </AppModal>

	</div>
</template>

<script>
import { mapGetters } from 'vuex';
import AppModal from '../partials/AppModal';
import FilmNewForm from '../Film/FilmNewForm';

export default {
	name: 'ToolbarComponent',
	components: {
		AppModal,
		FilmNewForm
	},
	data() {
		return {
			modal: {
				visible: false
			}
		}
	},
	methods: {
		changeTypeHandler(event) {
			this.$store.dispatch('changeFilmType', event.target.value);
		},

		changeSortHandler(event) {
			this.$store.dispatch('changeFilmSort', event.target.value);
		},

		openModalHandler() {
			this.modal.visible = true;
		},

		closeModalHandler() {
			this.modal.visible = false;
		},

		submitHandler(payload) {
			this.$store.dispatch('addData', payload);
			this.modal.visible = false;
		}
	},
	computed: {
		...mapGetters(['getFilmsTags', 'getFilmsCurrentTag'])
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
