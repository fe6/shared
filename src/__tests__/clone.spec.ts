import * as cloneFn from '../clone';
import { others } from './utils';

describe('clone', () => {
  test('clone', () => {
    expect(cloneFn.clone([1, 2, [4, 5, 6]])).toStrictEqual([1, 2, [4, 5, 6]]);
    expect(cloneFn.clone({ a: 1, v: { c: 23 } })).toStrictEqual({
      a: 1,
      v: { c: 23 },
    });

    others.forEach((oItem) => {
      expect(cloneFn.clone(oItem)).toStrictEqual(oItem);
    });
  });
});
