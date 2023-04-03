module.exports = {
	titleCase: function (title) {
		let words = title.split(" ");

		let titleCasedWords = words.map((word) => {
			return word[0].toUpperCase() + word.substring(1);
		});

		return titleCasedWords.join(" ");
	},
};
