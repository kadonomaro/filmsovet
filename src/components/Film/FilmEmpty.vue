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
			color: var(--color-text);
			font-size: 24px;
			text-align: center;
			border-radius: var(--border-radius);
			border: 2px dashed var(--color-base-background);
		}
	}
</style>
