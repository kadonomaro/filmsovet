<template>
	<nav class="navigation">
		<button
			class="navigation__toggle"
			:class="{ 'navigation__toggle--active': isOpen}"
			@click="toggleNavigation"
		>
			<span class="navigation__toggle-line" v-for="line in 3" :key="line"></span>
		</button>
		<ul class="navigation__list" :class="{ 'navigation__list--open': isOpen }">
			<li class="navigation__item" v-for="route in routes" :key="route.name">
				<router-link
					class="navigation__link"
					:class="{ 'navigation__link--active': route.name === $route.name }"
					:to="{ name: route.name }"
					@click.native="isOpen = false"
				>{{ route.meta.title }}</router-link>
			</li>
		</ul>
	</nav>
</template>

<script>
export default {
	name: 'AppNavigation',
	data() {
		return {
			isOpen: false
		}
	},
	methods: {
		toggleNavigation() {
			this.isOpen = !this.isOpen;
		}
	},
	computed: {
		routes() {
			return this.$router.options.routes;
		}
	},
	watch: {
		isOpen(value) {
			if (value) {
				document.body.classList.add('no-scroll');
			} else {
				document.body.classList.remove('no-scroll');
			}
		}
	}
}
</script>

<style lang="scss">
	.navigation {
		position: relative;
		&__toggle {
			position: absolute;
			z-index: 1000;
			right: 0;
			top: 50%;
			display: none;
			width: 35px;
			height: 24px;
			padding: 0;
			margin-left: auto;
			background-color: transparent;
			border: none;
			transform: translateY(-50%);
			outline: none;
		}
		&__toggle-line {
			position: absolute;
			display: block;
			width: 100%;
			height: 2px;
			background-color: #a0a0a0;
			transform-origin: center;
			transition: transform 0.3s ease-in, opacity 0.3s ease-in;
			&:first-child {
				top: 0;
			}
			&:nth-child(2) {
				top: 50%;
			}
			&:last-child {
				top: 100%;
			}
		}
		&__list {
			display: flex;
			margin: 0;
			padding: 0;
			list-style: none;
		}
		&__item {
			margin: 0 10px;
		}
		&__link {
			display: block;
			padding: 5px 0;
			color: #ffffff;
			font-size: 24px;
			text-decoration: none;
			letter-spacing: 0.03em;
			border-bottom: 3px solid transparent;
			transition: border-color 0.1s ease-in;
		}
		&__link--active {
			border-color: var(--color-accent);
		}
	}


	@media (max-width: var(--tablet-small)) {
		.navigation {
			width: 100%;
			&__toggle {
				display: block;
			}
			&__toggle--active &__toggle-line {
				&:first-child {
					transform: translateY(12px) rotate(45deg);
				}
				&:nth-child(2) {
					opacity: 0;
				}
				&:last-child {
					transform: translateY(-12px) rotate(-45deg);
				}
			}
			&__list {
				position: fixed;
				z-index: 999;
				top: 0;
				bottom: 0;
				left: 0;
				right: 0;
				display: block;
				padding: 10px 15px;
				background-color: #141414;
				transform: translateX(-100%);
				transition: transform .3s ease-in;
				will-change: transform;
			}
			&__list--open {
				transform: translateX(0);
			}
			&__item {
				margin: 0;
			}
			&__link {
				display: inline-block;
				font-size: 16px;
			}
		}
	}
</style>
