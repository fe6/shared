/** @format */

import * as oFn from '../o';

interface ObjEntity {
  name: string;
}

describe('o', () => {
  test('hasOwn', () => {
    const obj: ObjEntity = {
      name: 'lee',
    };

    expect(oFn.hasOwn(obj, 'name')).toBeTruthy();
    expect(oFn.hasOwn(1, '')).toBeFalsy();
    expect(oFn.hasOwn(1)).toBeFalsy();
    expect(oFn.hasOwn(obj, 'age')).toBeFalsy();
  });
});
