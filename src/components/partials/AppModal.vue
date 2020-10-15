<template>
	  <transition name="modal-fade">
    <div class="modal-overlay" @click.self="closeHandler">
      <div class="modal">
        <header class="modal__header" v-if="$slots.header">
          <slot name="header"></slot>
					<button class="modal__button-close" aria-label="close modal" @click="closeHandler">
						<svg class="modal__close-icon" fill="#a0a0a0" width="100%" height="100%" viewBox="0 0 18 18" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
								<path d="M10.415 9L15 13.584 13.587 15 9 10.415 4.413 15 3 13.584 7.585 9 3 4.416 4.413 3 9 7.585 13.587 3 15 4.416 10.415 9z"></path>
						</svg>
    			</button>
        </header>
        <div class="modal__body" v-if="$slots.body">
          <slot name="body"></slot>
        </div>
        <footer class="modal__footer" v-if="$slots.footer">
          <slot name="footer"></slot>
        </footer>
      </div>
    </div>
  </transition>
</template>

<script>

export default {
  name: 'AppModal',
  methods: {
    closeHandler() {
      this.$emit('close');
    }
  },
};
</script>

<style lang="scss">
  .modal-overlay {
		position: fixed;
		z-index: 9999;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    display: flex;
    justify-content: center;
		align-items: center;
		padding: 10px;
		background-color: rgba($color: #000000, $alpha: 0.7);
		overflow: auto;
  }
  .modal {
		position: relative;
		z-index: 999;
    min-width: 450px;
		max-width: 600px;
		color: #303030;
		background-color: #ffffff;
    &__header,
    &__footer {
      display: flex;
      padding: 10px 10px;
    }
    &__header {
			position: relative;
			padding-right: 40px;
      justify-content: space-between;
			font-size: 20px;
    }
    &__body {
      padding: 10px 10px;
      font-size: 16px;
    }
    &__footer {
			justify-content: flex-end;
			align-items: center;
			background-color: $color-light-gray;
    }
    &__button-close {
			position: absolute;
			top: 8px;
			right: 5px;
			width: 30px;
			height: 30px;
			padding: 0;
			background-color: transparent;
			border: none;
			cursor: pointer;
			&:hover .modal__close-icon,
			&:focus .modal__close-icon {
				fill: $color-accent;
			}
		}
		&__close-icon {
			transition: fill 0.1s ease-in;
		}
  }
  .modal-fade-enter,
  .modal-fade-leave-active {
    opacity: 0;
  }
  .modal-fade-enter-active,
  .modal-fade-leave-active {
    transition: opacity 0.3s ease
	}


	@media (max-width: $mobile-large) {
		.modal-overlay {
			align-items: flex-start;
		}
		.modal {
			min-width: 300px;
		}
	}
</style>
