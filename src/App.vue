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
	}
}
</script>

<style lang="scss">
#app {
  font-family: Jost, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #ffffff;
}
</style>
