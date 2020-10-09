<template>
	<nav class="navigation">
		<ul class="navigation__list">
			<li class="navigation__item">
				<router-link
					class="navigation__link"
					:to="{ name: 'HomePage' }"
				>Главная</router-link>
			</li>
			<li class="navigation__item">
				<router-link
					class="navigation__link"
					:to="{ name: 'WantPage' }"
				>Хочу посмотреть</router-link>
			</li>
			<li class="navigation__item">
				<router-link
					class="navigation__link"
					:to="{ name: 'AlreadyPage' }"
				>Уже посмотрел</router-link>
			</li>
		</ul>
	</nav>
</template>

<script>
export default {
	name: 'AppNavigation'
}
</script>

<style lang="scss">
	.navigation {
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
</style>
