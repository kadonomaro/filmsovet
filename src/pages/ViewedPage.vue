<template>
  <div class="page">
    <h1 class="page__title">Уже посмотрел</h1>
		<ToolbarComponent />
		<FilmList :list="getViewedFilms" v-if="getViewedFilms.length"/>
		<FilmEmpty v-else/>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import FilmList from '@/components/Film/FilmList';
import FilmEmpty from '@/components/Film/FilmEmpty';
import ToolbarComponent from '@/components/Toolbar/ToolbarComponent';

export default {
	name: 'ViewedPage',
	components: {
		FilmList,
		FilmEmpty,
		ToolbarComponent
	},
	computed: {
		...mapGetters(['getViewedFilms'])
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
