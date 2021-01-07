<template>
	<div class="preloader">
		<div class="preloader__icon">
			<svg width="120" height="120" fill="none" xmlns="http://www.w3.org/2000/svg">
				<g clip-path="url(#clip0)">
					<g class="preloader__icon-tail">
						<path d="M38.88 43.2C21.72 62.16 4.92 83.4 26.16 105" stroke="#454545" stroke-width="3" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
						<path d="M.5.5h119v119H.5z"/>
					</g>
					<path d="M60 87c14.9117 0 27-12.0883 27-27S74.9117 33 60 33 33 45.0883 33 60s12.0883 27 27 27z" fill="#909090" stroke="#454545" stroke-width="3" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
					<path class="preloader__icon-body" d="M60 15c-24.84 0-45 20.16-45 45s20.16 45 45 45 45-20.16 45-45-20.16-45-45-45zm18.84 23.76c4.32-2.52 9.84-.96 12.24 3.24 2.52 4.32.96 9.84-3.24 12.24-4.2 2.4-9.84.96-12.24-3.24-2.52-4.32-1.08-9.84 3.24-12.24zM41.16 81.24c-4.32 2.52-9.84.96-12.24-3.24-2.52-4.32-.96-9.84 3.24-12.24C36.48 63.24 42 64.8 44.4 69c2.52 4.32 1.08 9.84-3.24 12.24zM44.4 51c-2.52 4.32-8.04 5.76-12.24 3.24-4.2-2.52-5.88-7.92-3.36-12.24s8.04-5.76 12.24-3.24c4.44 2.4 5.88 7.92 3.36 12.24zM60 96c-4.92 0-9-4.08-9-9s4.08-9 9-9 9 4.08 9 9-4.08 9-9 9zm-6-36c0-3.36 2.64-6 6-6s6 2.64 6 6-2.64 6-6 6-6-2.64-6-6zm6-18c-4.92 0-9-4.08-9-9s4.08-9 9-9 9 4.08 9 9-4.08 9-9 9zm31.2 36c-2.52 4.32-8.04 5.76-12.24 3.24-4.2-2.52-5.76-8.04-3.24-12.24 2.52-4.32 8.04-5.76 12.24-3.24 4.2 2.4 5.76 7.92 3.24 12.24z" fill="#D2D2D2" stroke="#454545" stroke-width="3" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
				</g>
				<defs>
					<clipPath id="clip0">
						<path fill="#fff" d="M0 0h120v120H0z"/>
					</clipPath>
				</defs>
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
	padding: 10px 0;
	&__icon {
		text-align: center;
		border-radius: var(--border-radius);
		border: 2px dashed var(--color-base-background);
	}
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
