<template>
  <div id="app">
		<AppHeader />
    <transition name="fade" mode="out-in">
			<div class="content">
				<div class="container">
					<router-view/>
				</div>
			</div>
    </transition>
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
		this.$store.dispatch('fetchExpectedFilms');
		this.$store.dispatch('fetchViewedFilms');
	}
}
</script>

<style lang="scss">
#app {
	display: flex;
	flex-direction: column;
	min-height: 100vh;
	font-family: Jost, Helvetica, Arial, sans-serif;
	letter-spacing: 0.03em;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #ffffff;
}

.content {
	flex-grow: 1;
}
</style>
