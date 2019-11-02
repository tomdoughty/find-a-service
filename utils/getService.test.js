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
    it('if the key exists in lowercase', () => {
      expect(getService({ params: { service: 'dentist' } }))
        .toEqual({
          key: 'GP',
          code: 'DEN',
          display: 'Dentist',
        });
    });
  });
});
