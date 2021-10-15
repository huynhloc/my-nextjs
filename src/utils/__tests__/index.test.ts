import { add } from '../index';

describe('Index Util', () => {
  describe('add function', () => {
    it('should return correcttly', () => {
      expect(add(1, 1)).toBe(2);
    });
  });
});
