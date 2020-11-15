<template>
	<div class="toolbar">
		<div class="toolbar__inner">
			<label class="toolbar__label">
				<span class="toolbar__title">Выберите жанр:</span>
				<select class="input toolbar__select" @change="changeGenreHandler">
					<option value="all">Все</option>
					<option
						v-for="tag in getFilmsTags"
						:key="tag"
						:value="tag"
						:selected="tag === genre"
					>{{ tag }}</option>
				</select>
			</label>
			<label class="toolbar__label">
				<span class="toolbar__title">Выберите тип:</span>
				<select class="input toolbar__select">
					<option value="all">Все</option>
					<option
						v-for="type in types"
						:key="type"
						:value="type"
					>{{ type }}</option>
				</select>
			</label>
			<label class="toolbar__label">
				<span class="toolbar__title">Сортировать:</span>
				<select class="input toolbar__select" @change="changeSortHandler">
					<option value="title" :selected="sort === 'title'">По названию</option>
					<option value="rating" :selected="sort === 'rating'">По рейтингу</option>
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
import { mapState, mapGetters } from 'vuex';
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
		changeGenreHandler(event) {
			this.$store.dispatch('changeFilmGenre', event.target.value);
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
		...mapState({
			sort: state => state.options.sort,
			types: state => state.options.types,
			genre: state => state.options.genre
		}),
		...mapGetters(['getFilmsTags'])
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


	@media (max-width: 450px) {
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
