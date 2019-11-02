const getService = require('../utils/getService');

describe('getService util', () => {
  describe('return null', () => {
    it('if the key does not exist', () => {
      expect(getService({ params: { service: 'Tom' } })).toBeNull();
    });
  });
});
