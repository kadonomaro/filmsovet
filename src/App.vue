<template>
  <div id="app">
		<AppHeader />
			<div class="content">
				<div class="container">
					<router-view/>
				</div>
			</div>
		<AppFooter />
  </div>
</template>

<script>
import AppHeader from './components/partials/AppHeader';
import AppFooter from './components/partials/AppFooter';

export default {
	components: {
		AppHeader,
		AppFooter
	},
	created() {
		this.$store.dispatch('fetchData');
		this.$store.dispatch('fetchTheme');
	}
}
</script>

<style lang="scss">
#app {
	display: flex;
	flex-direction: column;
	min-height: 100vh;
}

.content {
	flex-grow: 1;
}


@media (max-width: 1023px) {
	.content {
		padding-top: 65px;
	}
}
</style>
