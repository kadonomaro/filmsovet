<template>
  <div class="page">
    <h1 class="page__title">Советую посмотреть</h1>
		<ToolbarComponent />
		<FilmComponent />
  </div>
</template>

<script>
import FilmComponent from '@/components/Film/FilmComponent';
import ToolbarComponent from '@/components/Toolbar/ToolbarComponent';

export default {
	name: 'HomePage',
	components: {
		FilmComponent,
		ToolbarComponent
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
