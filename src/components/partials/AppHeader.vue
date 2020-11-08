<template>
  <header class="header">
		<div class="header__logo">
			<AppLogo />
		</div>
		<div class="header__nav">
			<AppNavigation />
		</div>
  </header>
</template>

<script>
import AppNavigation from './AppNavigation';
import AppLogo from './AppLogo';

export default {
	name: 'AppHeader',
	components: {
		AppLogo,
		AppNavigation
	}
}
</script>

<style lang="scss">
	.header {
		position: relative;
		display: flex;
		padding: 20px 15px;
		background-color: var(--color-darkest);
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


	@media (max-width: var(--tablet-small)) {
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
