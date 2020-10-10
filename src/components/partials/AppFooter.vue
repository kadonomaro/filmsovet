<template>
	<footer class="footer">
		<div class="footer__inner">
			<div>Фильмсовет&copy; {{ new Date().getFullYear() }}</div>
			<div class="footer__author">
				<a class="author" href="https://airsoftware.ru.com/" target="_blank">
					<img class="author__image" :src="require('@/assets/airsoftware.png')" alt="Airsoftware" title="Airsoftware">
					<span class="author__text">Airsoftware</span>
				</a>
			</div>
		</div>
	</footer>
</template>

<script>
export default {
	name: 'AppFooter'
}
</script>

<style lang="scss">
	.footer {
		padding: 15px 20px;
		color: #ffffff;
		background-color: $color-dark-gray;
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
		color: #ffffff;
		text-decoration: none;
		&:hover &__image {
			background-color: #cecece;
		}
		&__image {
			width: 30px;
			height: 30px;
			margin-right: 5px;
			margin-left: 15px;
			padding: 3px;
			background-color: #ffffff;
			border-radius: 50%;
			transition: background-color 0.1s ease-in;
			box-sizing: border-box;
		}
	}
</style>
