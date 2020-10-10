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
	}
}
</script>
