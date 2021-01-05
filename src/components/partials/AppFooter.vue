<template>
	<footer class="footer" :class="{ 'footer--shadow': theme === 'light' }">
		<div class="footer__inner">
			<div class="footer__col">
				<span class="footer__copy">ФильмСовет&copy; {{ new Date().getFullYear() }}</span>
				<ThemeSwitcher />
			</div>
			<div class="footer__author">
				<a class="author" href="https://airsoftware.ru.com/" target="_blank">
					<img class="author__image" :src="logo" alt="Airsoftware" title="Airsoftware">
					<span class="author__text">Airsoftware</span>
				</a>
			</div>
		</div>
	</footer>
</template>

<script>
import { mapState } from 'vuex';
import logo from '@/assets/airsoftware.png';
import ThemeSwitcher from '@/components/partials/ThemeSwitcher';

export default {
	name: 'AppFooter',
	components: {
		ThemeSwitcher
	},
	data() {
		return {
			logo
		}
	},
	computed: {
		...mapState({
			theme: state => state.options.theme
		}),
	}
}
</script>

<style lang="scss">
	.footer {
		padding: 15px 20px;
		color: var(--color-text);
		background-color: var(--color-base-background);
		&__inner {
			display: flex;
			justify-content: space-between;
			align-items: center;
		}
		&__col {
			display: flex;
			align-items: center;
		}
		&__copy {
			margin-right: 10px;
		}
		&__author {
			margin-left: 10px;
		}
	}
	.footer--shadow {
		box-shadow: 0 -3px 7px rgba($color: #303030, $alpha: 0.2);
	}


	.author {
		display: flex;
		align-items: center;
		color: var(--color-text);
		text-decoration: none;
		&:hover &__image {
			background-color: #cecece;
		}
		&__image {
			width: 30px;
			height: 30px;
			margin-right: 5px;
			padding: 3px;
			background-color: #ffffff;
			border-radius: 50%;
			transition: background-color 0.1s ease-in;
			box-sizing: border-box;
		}
	}

	@media (max-width: 767px) {
		.footer {
			padding: 10px;
			&__col {
				display: block;
			}
		}
	}
</style>
