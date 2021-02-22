/** @format */

import * as regFn from '../reg';

describe('reg', () => {
  test('reCamelize', () => {
    expect(regFn.reCamelize(1111)).toStrictEqual(/-(\w)/g);
    expect(regFn.reCamelize()).toStrictEqual(/-(\w)/g);
    expect(regFn.reCamelize('p')).toStrictEqual(/p(\w)/g);
  });
});
