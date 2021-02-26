import * as oFn from '../src/o';
import { others } from './utils';

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

    others.forEach((oItem) => {
      expect(oFn.hasOwn(oItem)).toBeFalsy();
    });
  });
});
