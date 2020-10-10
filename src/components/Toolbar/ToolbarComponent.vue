<template>
	<div class="toolbar">
		<select class="input toolbar__select">
			<option value="Триллер">Триллер</option>
			<option value="Драма">Драма</option>
			<option value="Комедия">Комедия</option>
		</select>
	</div>
</template>

<script>
export default {
	name: 'ToolbarComponent'
}
</script>

<style lang="scss">
	.toolbar {
		padding: 10px 0;
	}
</style>
