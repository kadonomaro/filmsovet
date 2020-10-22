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
		background-color: #101010;
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


	@media (max-width: $tablet-small) {
		.header {
			padding: 10px;
			&__logo {
				position: relative;
				left: 0;
			}
			&__nav {
				justify-content: flex-end;
			}
		}
	}
</style>
