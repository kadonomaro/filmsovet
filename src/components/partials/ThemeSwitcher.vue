<template>
	<div class="theme-switch">
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
export default {
	name: 'ThemeSwitcher',
	data() {
		return {
			checked: false
		}
	},
	methods: {
		changeHandler() {
			console.log(this.checked);
		}
	}
}
</script>

<style lang="scss">
	.theme-switch {
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
			background-color: #cecece;
			border: 1px solid #303030;
			border-radius: 100px;
			box-sizing: border-box;
			cursor: pointer;
			-webkit-tap-highlight-color: transparent;
			&::before {
				content: '';
				position: absolute;
				top: 50%;
				width: 24px;
				height: 24px;
				background-color: #303030;
				border-radius: 50%;
				transform: translate(0, -50%);
				transition: transform 0.1s ease-in;
			}
		}
	}
</style>
