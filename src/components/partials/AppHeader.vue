<template>
  <header class="header" :class="{ 'header--shadow': theme === 'light' }">
		<div class="header__logo">
			<AppLogo />
		</div>
		<div class="header__nav">
			<AppNavigation />
		</div>
  </header>
</template>

<script>
import { mapState } from 'vuex';
import AppNavigation from './AppNavigation';
import AppLogo from './AppLogo';

export default {
	name: 'AppHeader',
	components: {
		AppLogo,
		AppNavigation
	},
	computed: {
		...mapState({
			theme: state => state.options.theme
		}),
	}
}
</script>

<style lang="scss">
	.header {
		position: relative;
		display: flex;
		padding: 20px 15px;
		background-color: var(--color-base-background);
		&__logo {
			position: absolute;
			left: 15px;
		}
		&__nav {
			display: flex;
			flex-grow: 1;
			justify-content: center;
		}
	}
	.header--shadow {
		box-shadow: 0 3px 7px rgba($color: #303030, $alpha: 0.2);
	}


	@media (max-width: 1023px) {
		.header {
			position: fixed;
			z-index: 1000;
			width: 100%;
			padding: 10px;
			box-sizing: border-box;
			&__logo {
				position: relative;
				left: 0;
				max-width: 100px;
			}
			&__nav {
				justify-content: flex-end;
			}
		}
	}
</style>
