<template>
	<div class="theme-switch" title="Переключить тему">
		<label class="theme-switch__label">
			<input
				class="theme-switch__input visually-hidden"
				type="checkbox"
				v-model="checked"
				@change="changeHandler"
			>
			<span class="theme-switch__custom"></span>
		</label>
	</div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
	name: 'ThemeSwitcher',
	data() {
		return {
			checked: false
		}
	},
	mounted() {
		this.checked = this.getTheme === 'dark' ? false : true;
	},
	methods: {
		changeHandler() {
			this.$store.dispatch('changeTheme', this.checked ? 'light' : 'dark');
		}
	},
	computed: {
		...mapGetters(['getTheme'])
	}
}
</script>

<style lang="scss">
	.theme-switch {
		&__label {
			display: inline-block;
			vertical-align: middle;
		}
		&__input {
			&:checked ~ .theme-switch__custom {
				&::before {
					transform: translate(30px, -50%);
				}
			}
		}
		&__custom {
			position: relative;
			flex-shrink: 0;
			display: block;
			width: 60px;
			height: 30px;
			padding: 2px;
			background-color: var(--color-text);
			border: 2px solid var(--color-darkest);
			border-radius: 100px;
			box-sizing: border-box;
			cursor: pointer;
			-webkit-tap-highlight-color: transparent;
			&::before {
				content: '';
				position: absolute;
				top: 50%;
				width: 22px;
				height: 22px;
				background-color: var(--color-darkest);
				border-radius: 50%;
				transform: translate(0, -50%);
				transition: transform 0.1s ease-in;
			}
		}
	}
</style>
