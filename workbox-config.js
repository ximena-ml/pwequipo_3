module.exports = {
	globDirectory: '.',
	globPatterns: [
		'**/*.{jpg,json,html,png}'
	],
	swDest: 'sw.js',
	ignoreURLParametersMatching: [
		/^utm_/,
		/^fbclid$/
	]
};