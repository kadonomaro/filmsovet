<template>
  <div class="page">
    <h1 class="page__title">Советую посмотреть</h1>
		<FilmComponent />
  </div>
</template>

<script>
import FilmComponent from '@/components/Film/FilmComponent';

export default {
	name: 'HomePage',
	components: {
		FilmComponent
	}
}
</script>
