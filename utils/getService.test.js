const getService = require('../utils/getService');

describe('getService util', () => {
  describe('returns null', () => {
    it('if the key does not exist', () => {
      expect(getService({ params: { service: 'Tom' } }))
        .toBeNull();
    });
  });
  describe('results service object', () => {
    it('if the key exists', () => {
      expect(getService({ params: { service: 'DENTIST' } }))
        .toEqual({
          key: 'DENTIST',
          code: 'DEN',
          display: 'Dentist',
        });
    });
  });
});
