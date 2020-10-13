<template>
  <div class="film-empty">
    <div class="film-empty__text">Список пуст</div>
  </div>
</template>

<script>
export default {
  name: "FilmEmpty",
}
</script>

<style lang="scss">
	.film-empty {
		padding: 10px 0;
		&__text {
			padding: 20px;
			color: $color-medium-gray;
			font-size: 24px;
			text-align: center;
			border-radius: 5px;
			border: 2px dashed $color-dark-gray;
		}
	}
</style>
