export function uniqueArray(value, index, self) {
	return self.indexOf(value) === index;
}

export function splitString(string) {
	return string.split(/[ ,.]+/);
}
