import { isPlainObject } from '../src/is';
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

  test('deepMerge', () => {
    expect(oFn.deepMerge({
      name: '1222',
      sss: {
        name: '3333'
      }
    }, {
      name: 'aaaa',
      sss: {
        name: 'bbb'
      }
    })).toStrictEqual({
      name: 'aaaa',
      sss: {
        name: 'bbb'
      }
    });
    expect(oFn.deepMerge({
      name: '1222',
      sss: [1, 'aaa']
    }, {
      name: 'aaaa',
      sss: ['ccc']
    })).toStrictEqual({
      name: 'aaaa',
      sss: ['ccc']
    });

    others.filter((item) => !isPlainObject(item)).forEach((oItem) => {
      expect(oFn.deepMerge(oItem, oItem)).toStrictEqual({});
    });
  });
});
