<template>
	<footer class="footer">
		<div class="footer__inner">
			<div>
				ФильмСовет&copy; {{ new Date().getFullYear() }}
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
	}
}
</script>

<style lang="scss">
	.footer {
		padding: 15px 20px;
		color: var(--color-text);
		background-color: var(--color-darkest);
		&__inner {
			display: flex;
			justify-content: space-between;
			align-items: center;
		}
		&__author {
			margin-left: 10px;
		}
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
</style>
