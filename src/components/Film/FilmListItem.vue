<template>
	<div class="film-item">
		<span class="film-item__rating">{{ film.rating }}</span>
		<div class="film-item__image">
			<a :href="film.link" target="_blank">
				<img class="film-item__image-img" :src="film.image" :alt="film.title">
			</a>
		</div>
		<div class="film-item__text">
			<h2 class="film-item__title">{{ film.title }}</h2>
			<div class="film-item__desc">
				<p>{{ film.description }}</p>
			</div>
		</div>
		<div class="film-item__tags">
			<div class="tags">
				<ul class="tags__list">
					<li class="tags__item" v-for="tag in film.tags" :key="tag">{{ tag }}</li>
				</ul>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	name: 'FilmListItem',
	props: {
		film: {
			type: Object,
			required: true
		}
	}
}
</script>

<style lang="scss">
	$square: 50px;

	.film-item {
		position: relative;
		display: flex;
		flex-direction: column;
		height: 100%;
		background-color: $color-dark-gray;
		&__image {
			height: 250px;
		}
		&__image-img {
			width: 100%;
			height: 100%;
			object-fit: cover;
		}
		&__text {
			flex-grow: 1;
			padding: 10px;
			p {
				margin: 0 0 10px;
			}
		}
		&__title {
			margin: 0 0 5px;
			font-size: 20px;
			text-align: center;
		}
		&__rating {
			position: absolute;
			top: 0;
			right: 0;
			width: $square;
			height: $square;
			padding: 5px;
			font-size: 36px;
			font-weight: bold;
			line-height: $square;
			text-align: center;
			background-color: $color-accent;
			pointer-events: none;
		}
	}

	.tags {
		padding: 10px;
		&__list {
			display: flex;
			flex-wrap: wrap;
			margin: 0;
			padding: 0;
			list-style: none;
		}
		&__item {
			&:not(:last-child) {
				margin-right: 10px;
			}
		}
	}


</style>
