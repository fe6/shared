import * as storageFn from '../src/storage';
import { isString } from '../src/is';
import { others } from './utils';

describe('storage default', () => {
  const myStorage = storageFn.createStorage();

  test('getKey', () => {
    expect(myStorage.getKey('sss')).toBe('SSS');
    others.filter(item => !isString(item)).forEach((oItem) => {
      expect(myStorage.getKey(oItem)).toBe('');
    });
  });

  test('set', () => {
    expect(myStorage.set('sss', 's', storageFn.DEFAULT_CACHE_TIME)).toBe(undefined);
    expect(myStorage.set('abc', '111s')).toBe(undefined);
    expect(myStorage.set('dfg', '1223', 0.0000001)).toBe(undefined);
    expect(myStorage.set('', '1223')).toBe(undefined);
    expect(myStorage.set('obj', {a: 11, 'v':'233'})).toBe(undefined);
    expect(myStorage.set('arr', [{a: 11, 'v':'233'}, {a: 11, 'v':'233'}])).toBe(undefined);
    others.forEach((oItem, oIdx) => {
      expect(myStorage.set(`exp${oIdx}`, 'a', oItem)).toBe(undefined);
    });
  });

  test('get', () => {
    expect(myStorage.get('sss')).toBe('s');
    expect(myStorage.get('abc')).toBe('111s');
    expect(myStorage.get('dfg')).toBe('');
    expect(myStorage.get('obj')).toStrictEqual({"a": 11, "v": "233"});
    expect(myStorage.get('arr')).toStrictEqual([{"a": 11, "v": "233"}, {"a": 11, "v": "233"}]);
    others.filter(item => !isString(item)).forEach((oItem) => {
      expect(myStorage.get(oItem)).toBe('');
    });
  });

  test('clear', () => {
    expect(myStorage.clear()).toBe(undefined);
    expect(myStorage.get('abc')).toBe('');
    others.filter(item => !isString(item)).forEach((oItem) => {
      expect(myStorage.get(oItem)).toBe('');
    });
  });
});
