<template>
	<div class="logo">
		<img :src="logo" alt="ФильмСовет" class="logo__image" v-if="isHomePage">
		<router-link class="logo__link" :to="{ name: 'HomePage' }" v-else>
			<img :src="logo" alt="ФильмСовет" class="logo__image">
		</router-link>
	</div>
</template>

<script>
import logo from '@/assets/logo.svg';

export default {
	name: 'AppLogo',
	data() {
		return {
			logo
		}
	},
	computed: {
		isHomePage() {
			return this.$route.name === 'HomePage';
		}
	}
}
</script>

<style lang="scss">
	.logo {
		max-width: 120px;
		pointer-events: none;
		&__link {
			display: block;
			pointer-events: initial;
		}
	}
</style>
