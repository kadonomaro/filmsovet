<template>
	<div class="preloader">
		<img :src="icon" alt="">
	</div>
</template>

<script>
import icon from '@/assets/icons/film-icon.svg'

export default {
	name: "AppPreloader",
	data() {
		return {
			icon
		}
	}
}
</script>

<style lang="scss">
	.preloader {
		img {
			width: 120px;
			margin: 0 auto;
		}
	}
</style>
