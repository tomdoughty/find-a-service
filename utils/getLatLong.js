const PostcodesIO = require('postcodesio-client');

const postcodes = new PostcodesIO();

module.exports = async (postcode) => {
  try {
    return await postcodes.lookup(postcode);
  } catch (error) {
    return error;
  }
};
