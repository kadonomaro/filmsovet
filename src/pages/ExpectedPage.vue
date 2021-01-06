<template>
  <div class="page">
    <h1 class="page__title">Хочу посмотреть</h1>
		<ToolbarComponent />
		<AppPreloader v-if="!loaded"/>
		<FilmList :list="items" v-if="getExpectedFilms.length"/>
		<FilmEmpty v-if="loaded && !getExpectedFilms.length"/>
		<paginate
      v-if="getExpectedFilms.length > pageSize"
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
	name: 'ExpectedPage',
	mixins: [paginationMixin],
	components: {
		FilmList,
		FilmEmpty,
		AppPreloader,
		ToolbarComponent
	},
	mounted() {
		this.setupPagination(this.getExpectedFilms);
	},
	computed: {
		...mapGetters(['getExpectedFilms']),
		...mapState({
			loaded: state => state.loaded
		}),
	},
	watch: {
		getExpectedFilms(films) {
			this.setupPagination(films);
		}
	},
	metaInfo() {
		return {
			title: 'Хочу посмотреть эти фильмы - ФильмСовет',
			meta: [{
				vmid: 'description',
				name: 'description',
				content: 'Полнометражные фильмы и сериалы. Комедии, боевики, триллеры или драмы. Подборка фильмов на любой вкус на сайте ФильмСовет.',
			}]
		}
	}
}
</script>
