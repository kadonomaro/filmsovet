<template>
  <div class="page">
    <h1 class="page__title">Советую посмотреть</h1>
		<ToolbarComponent />
		<FilmList :list="items" v-if="getFilms.length"/>
		<FilmEmpty v-else/>
		<paginate
      v-if="getFilms.length > pageSize"
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
import { mapGetters } from 'vuex';
import FilmList from '@/components/Film/FilmList';
import FilmEmpty from '@/components/Film/FilmEmpty';
import ToolbarComponent from '@/components/Toolbar/ToolbarComponent';
import paginationMixin from '@/mixins/pagination.mixin';

export default {
	name: 'HomePage',
	mixins: [paginationMixin],
	components: {
		FilmList,
		FilmEmpty,
		ToolbarComponent
	},
	mounted() {
		this.setupPagination(this.getFilms);
	},
	computed: {
		...mapGetters(['getFilms'])
	},
	watch: {
		getFilms(films) {
			this.setupPagination(films);
		}
	},
	metaInfo() {
		return {
			title: 'Советую посмотреть эти фильмы - ФильмСовет',
			meta: [{
				vmid: 'description',
				name: 'description',
				content: 'Полнометражные фильмы и сериалы. Комедии, боевики, триллеры или драмы. Подборка фильмов на любой вкус на сайте ФильмСовет.',
			}]
		}
	}
}
</script>
