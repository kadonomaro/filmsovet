<template>
	<div class="logo">
		<img :src="logo" alt="ФильмСовет" class="logo__image" v-if="isHomePage">
		<router-link class="logo__link" :to="{ name: 'HomePage' }" v-else>
			<img :src="logo" alt="ФильмСовет" class="logo__image">
		</router-link>
	</div>
</template>

<script>
import { mapState } from 'vuex';
import logo from '@/assets/logo.svg';
import logoDark from '@/assets/logo--dark.svg';

export default {
	name: 'AppLogo',
	data() {
		return {
			logo: null
		}
	},
	mounted() {
		this.theme === 'dark' ? this.logo = logo : this.logo = logoDark;
	},
	computed: {
		...mapState({
			theme: state => state.options.theme
		}),
		isHomePage() {
			return this.$route.name === 'HomePage';
		}
	},
	watch: {
		theme(value) {
			value === 'dark' ? this.logo = logo : this.logo = logoDark;
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
