import { isEmptyObject } from '../test1';

describe('compiler: parse', () => {
  test('simple text', () => {
    expect(isEmptyObject(1)).toBe(2);
  })

  test('simple text 2', () => {
    expect(isEmptyObject(-11)).toBe(0);
  })
});
