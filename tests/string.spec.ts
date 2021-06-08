import * as stringFn from '../src/string';
import { others } from './utils';

describe('string', () => {
  test('getStrLength', () => {
    expect(stringFn.getStrLength('water')).toBe(5);
    expect(stringFn.getStrLength(1)).toBe(0);
    expect(stringFn.getStrLength('水滴')).toBe(4);
    expect(stringFn.getStrLength('水滴', 'www')).toBe(6);
    expect(stringFn.getStrLength()).toBe(0);
    others.filter((oItem) => oItem !== '100F' && oItem !== 'a').forEach((oItem) => {
      expect(stringFn.getStrLength(oItem)).toBe(0);
    });
  });
});
