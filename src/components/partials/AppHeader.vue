<template>
  <header class="header">
		<div class="header__nav">
			<AppNavigation />
		</div>
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
		padding: 20px 15px;
		background-color: #101010;
		&__nav {
			display: flex;
			justify-content: center;
		}
	}
</style>
