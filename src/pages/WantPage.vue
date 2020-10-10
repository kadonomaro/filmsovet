<template>
  <div class="page">
    <h1 class="page__title">Хочу посмотреть</h1>
  </div>
</template>

<script>

export default {
	name: 'WantPage',
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
