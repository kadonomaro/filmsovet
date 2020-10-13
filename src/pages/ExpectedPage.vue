<template>
  <div class="page">
    <h1 class="page__title">Хочу посмотреть</h1>
		<ToolbarComponent />
		<FilmList :list="getExpectedFilms" v-if="getExpectedFilms.length"/>
		<FilmEmpty v-else/>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import FilmList from '@/components/Film/FilmList';
import FilmEmpty from '@/components/Film/FilmEmpty';
import ToolbarComponent from '@/components/Toolbar/ToolbarComponent';

export default {
	name: 'ExpectedPage',
	components: {
		FilmList,
		FilmEmpty,
		ToolbarComponent
	},
	computed: {
		...mapGetters(['getExpectedFilms'])
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
