export default {
  bind(el, binding) {
    document.addEventListener('keydown', function (evt) {
      if (evt.key === 'Escape') {
				binding.value();
        if (typeof binding.value !== 'function') {
          throw new Error('Argument must be a function');
        }
      }
    });
  }
};
