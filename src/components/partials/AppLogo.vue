<template>
	<div class="logo">
		<img :src="logo" alt="" class="logo__image">
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
	}
}
</script>

<style lang="scss">
	.logo {
		max-width: 120px;
		pointer-events: none;
	}
</style>
