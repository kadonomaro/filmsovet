<template>
  <header class="header">
		<AppNavigation />
  </header>
</template>

<script>
import AppNavigation from './AppNavigation';

export default {
	name: 'AppHeader',
	components: {
		AppNavigation
	}
}
</script>

<style lang="scss">
	.header {
		padding: 15px;
		background-color: #101010;
	}
</style>
