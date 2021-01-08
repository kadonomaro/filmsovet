export function uniqueArray(value, index, self) {
	return self.indexOf(value) === index;
}

export function splitString(string) {
	return string.split(/[ ,.]+/);
}

export function isMobile() {
	return (
		window.matchMedia('(max-width: 600px)').matches &&
		(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent))
	);
}
