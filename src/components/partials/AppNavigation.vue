<template>
	<nav class="navigation">
		<button class="navigation__toggle" @click="toggleNavigation"></button>
		<ul class="navigation__list" :class="{'navigation__list--open': isOpen}">
			<li class="navigation__item">
				<router-link
					class="navigation__link"
					:to="{ name: 'HomePage' }"
				>Главная</router-link>
			</li>
			<li class="navigation__item">
				<router-link
					class="navigation__link"
					:to="{ name: 'ExpectedPage' }"
				>Хочу посмотреть</router-link>
			</li>
			<li class="navigation__item">
				<router-link
					class="navigation__link"
					:to="{ name: 'ViewedPage' }"
				>Уже посмотрел</router-link>
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
			width: 40px;
			height: 40px;
			margin-left: auto;
			background-color: transparent;
			background-image: url("data:image/svg+xml, %3Csvg fill='%23a0a0a0' width='30' height='30' viewBox='0 0 18 18' version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink'%3E%3Cpath d='M10.415 9L15 13.584 13.587 15 9 10.415 4.413 15 3 13.584 7.585 9 3 4.416 4.413 3 9 7.585 13.587 3 15 4.416 10.415 9z'%3E%3C/path%3E%3C/svg%3E");
			background-size: cover;
			background-repeat: no-repeat;
			border: none;
			transform: translateY(-50%);
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
		&__link.router-link-exact-active {
			border-color: $color-accent;
		}
	}


	@media (max-width: $tablet-small) {
		.navigation {
			width: 100%;
			&__toggle {
				display: block;
			}
			&__list {
				position: fixed;
				z-index: 999;
				top: 0;
				bottom: 0;
				left: 0;
				right: 0;
				display: block;
				padding: 15px 25px;
				background-color: #141414;
				transform: translateX(-100%);
				transition: transform .3s ease-in;
				will-change: transform;
			}
			&__list--open {
				transform: translateX(0);
			}
			&__link {
				display: inline-block;
				font-size: 16px;
			}
		}
	}
</style>
