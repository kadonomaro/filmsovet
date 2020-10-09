<template>
  <div id="app">
		<AppHeader />
    <transition name="fade" mode="out-in">
			<div class="container">
				<router-view/>
			</div>
    </transition>
  </div>
</template>

<script>
import AppHeader from './components/partials/AppHeader';

export default {
	components: {
		AppHeader
	},
	created() {
		this.$store.dispatch('fetchData');
	}
}
</script>

<style lang="scss">
#app {
	font-family: Jost, Helvetica, Arial, sans-serif;
	letter-spacing: 0.03em;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #ffffff;
}
</style>
