<template>
	<div class="preloader">
		<div class="preloader__icon">
			<svg width="200" height="200" fill="none" xmlns="http://www.w3.org/2000/svg">
				<g class="preloader__icon-tail">
					<path d="M64.8 72c-28.6 31.6-56.6 67-21.2 103" stroke="#454545" stroke-width="7" stroke-miterlimit="10"
								stroke-linecap="round" stroke-linejoin="round"/>
					<path stroke="none" d="M.5.5h199v199H.5z"/>
				</g>
				<path
					d="M100 145c24.853 0 45-20.147 45-45 0-24.8528-20.147-45-45-45-24.8528 0-45 20.1472-45 45 0 24.853 20.1472 45 45 45z"
					fill="#909090" stroke="#454545" stroke-width="7" stroke-miterlimit="10" stroke-linecap="round"
					stroke-linejoin="round"/>
				<path
					class="preloader__icon-body"
					d="M100 25c-41.4 0-75 33.6-75 75s33.6 75 75 75 75-33.6 75-75-33.6-75-75-75zm31.4 39.6c7.2-4.2 16.4-1.6 20.4 5.4 4.2 7.2 1.6 16.4-5.4 20.4S130 92 126 85c-4.2-7.2-1.8-16.4 5.4-20.4zm-62.8 70.8c-7.2 4.2-16.4 1.6-20.4-5.4-4.2-7.2-1.6-16.4 5.4-20.4C60.8 105.4 70 108 74 115c4.2 7.2 1.8 16.4-5.4 20.4zM74 85c-4.2 7.2-13.4 9.6-20.4 5.4-7-4.2-9.8-13.2-5.6-20.4 4.2-7.2 13.4-9.6 20.4-5.4 7.4 4 9.8 13.2 5.6 20.4zm26 75c-8.2 0-15-6.8-15-15s6.8-15 15-15 15 6.8 15 15-6.8 15-15 15zm-10-60c0-5.6 4.4-10 10-10s10 4.4 10 10-4.4 10-10 10-10-4.4-10-10zm10-30c-8.2 0-15-6.8-15-15s6.8-15 15-15 15 6.8 15 15-6.8 15-15 15zm52 60c-4.2 7.2-13.4 9.6-20.4 5.4-7-4.2-9.6-13.4-5.4-20.4 4.2-7.2 13.4-9.6 20.4-5.4 7 4 9.6 13.2 5.4 20.4z"
					fill="#D2D2D2" stroke="#454545" stroke-width="7" stroke-miterlimit="10" stroke-linecap="round"
					stroke-linejoin="round"/>
			</svg>
		</div>
	</div>
</template>

<script>
export default {
	name: "AppPreloader"
}
</script>

<style lang="scss">
.preloader {
	display: flex;
	justify-content: center;
	&__icon-body {
		transform-origin: center;
		animation: spinner 2s ease-in-out infinite;
	}
	&__icon-tail {
		transform-origin: center;
		animation: spinner 2s ease-in-out infinite 1s;
	}
}


@keyframes spinner {
	0% {
		transform: rotate(0);
	}
	100% {
		transform: rotate(360deg);
	}
}
</style>
