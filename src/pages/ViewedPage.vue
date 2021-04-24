<template>
  <div class="page">
    <h1 class="page__title">Уже посмотрел</h1>
		<ToolbarComponent />
		<AppPreloader v-if="!loaded"/>
		<FilmList :list="items" v-if="getViewedFilms.length"/>
		<FilmEmpty v-if="loaded && !getViewedFilms.length"/>
		<paginate
      v-if="getViewedFilms.length > pageSize"
      v-model="page"
      :page-count="pageCount"
      :page-range="pageRange"
      :click-handler="pageChangeHandler"
      :prev-text="'<'"
      :next-text="'>'"
      :container-class="'paginate'">
    </paginate>
  </div>
</template>

<script>
import {mapGetters, mapState} from 'vuex';
import FilmList from '@/components/Film/FilmList';
import FilmEmpty from '@/components/Film/FilmEmpty';
import AppPreloader from "@/components/partials/AppPreloader";
import ToolbarComponent from '@/components/Toolbar/ToolbarComponent';
import paginationMixin from '@/mixins/pagination.mixin';

export default {
	name: 'ViewedPage',
	mixins: [paginationMixin],
	components: {
		FilmList,
		FilmEmpty,
		AppPreloader,
		ToolbarComponent
	},
	mounted() {
		this.setupPagination(this.getViewedFilms);
	},
	computed: {
		...mapGetters(['getViewedFilms']),
		...mapState({
			loaded: state => state.loaded
		}),
		getFilmsLength() {
			return this.getViewedFilms.length;
		}
	},
	watch: {
		getFilmsLength() {
			this.setupPagination(this.getViewedFilms);
		}
	},
	metaInfo() {
		return {
			title: 'Эти фильмы я уже посмотрел - ФильмСовет',
			meta: [{
				vmid: 'description',
				name: 'description',
				content: 'Полнометражные фильмы и сериалы. Комедии, боевики, триллеры или драмы. Подборка фильмов на любой вкус на сайте ФильмСовет.',
			}]
		}
	}
}
</script>
