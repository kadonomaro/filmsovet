<template>
	<div class="toolbar">
		<div class="toolbar__inner">
			<select class="input toolbar__select" @change="changeHandler">
				<option value="all">Выберите жанр</option>
				<option
					v-for="tag in getFilmsTags"
					:key="tag"
					:value="tag"
					:selected="tag === getFilmsCurrentTag"
				>{{ tag }}</option>
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
			<!-- <template v-slot:footer>
				<button
					class="button button--icon-check"
					style="margin-right: 5px"
					title="Добавить"
					@click="acceptHandler"
				></button>
				<button
					class="button button--danger button--icon-cancel"
					title="Отмена"
					@click="closeModalHandler"
				></button>
      </template> -->
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
		changeHandler(event) {
			this.$store.dispatch('changeFilmType', event.target.value);
		},

		openModalHandler() {
			this.modal.visible = true;
		},


		closeModalHandler() {
			this.modal.visible = false;
		},

		submitHandler(payload) {
			// this.$store.dispatch('addData', payload);
			console.log(payload);
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
