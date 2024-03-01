import { deploylocalPlugin } from './plugin';

describe('deploylocal', () => {
  it('should export plugin', () => {
    expect(deploylocalPlugin).toBeDefined();
  });
});
