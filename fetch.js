exports.fetch = (url) => {
	return fetch(url).then(res => res.json());
}

exports.fetchURL = (url) => {
	const u = new URL(url);
	return fetch(u).then(res => res.json());
}
