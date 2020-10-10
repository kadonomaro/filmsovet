<template>
  <div class="page">
    <h1 class="page__title">Уже посмотрел</h1>
  </div>
</template>

<script>

export default {
	name: 'AlreadyPage',
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
