const PostcodesIO = require('postcodesio-client');
const postcodes = new PostcodesIO();

module.exports = postcode => new Promise((resolve, reject) => {
	postcodes.lookup(postcode)
		.then(res => resolve(res))
		.catch(error => reject(error));
});