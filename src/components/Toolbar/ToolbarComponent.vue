<template>
	<div class="toolbar">
		<div class="toolbar__inner">
			<label class="toolbar__label">
				<span class="toolbar__title">Выберите жанр:</span>
				<select class="input toolbar__select" @change="changeTypeHandler">
					<option value="all">Все</option>
					<option
						v-for="tag in getFilmsTags"
						:key="tag"
						:value="tag"
						:selected="tag === getFilmsCurrentType"
					>{{ tag }}</option>
				</select>
			</label>
			<label class="toolbar__label">
				<span class="toolbar__title">Сортировать:</span>
				<select class="input toolbar__select" @change="changeSortHandler">
					<option value="title" :selected="getFilmsCurrentSort === 'title'">По названию</option>
					<option value="rating" :selected="getFilmsCurrentSort === 'rating'">По рейтингу</option>
				</select>
			</label>
			<button
				class="button button--icon-plus toolbar__button"
				title="Добавить фильм"
				@click="openModalHandler"
			></button>
		</div>

		<AppModal v-show="modal.visible" @close="closeModalHandler">
      <template v-slot:header>
				<span>Добавить новый фильм</span>
      </template>
      <template v-slot:body>
				<FilmNewForm
					@on-submit="submitHandler"
					@on-cancel="closeModalHandler"
				/>
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
		...mapGetters([
			'getFilmsTags',
			'getFilmsCurrentType',
			'getFilmsCurrentSort'
		])
	}
}
</script>

<style lang="scss">
	.toolbar {
		padding: 10px 0;
		&__inner {
			display: flex;
			flex-wrap: wrap;
			align-items: flex-end;
		}
		&__title {
			display: block;
			margin-bottom: 5px;
			font-size: 14px;
			line-height: 1;
		}
		&__label {
			margin-right: 10px;
		}
		&__select {
			min-width: 150px;
		}
	}


	@media (max-width: var(--mobile-small)) {
		.toolbar {
			&__inner {
				flex-wrap: wrap;
			}
			&__label {
				width: 100%;
				margin-right: 0;
				margin-bottom: 10px;
			}
			&__select {
				width: 100%;
				min-width: 120px;
			}
		}
	}
</style>
