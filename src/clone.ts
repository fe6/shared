import { isArray, isEmpty, isPlainObject } from './is';
import { keys } from './o';

/**
 * 克隆
 *
 *
 * @format
 * @since 0.1.0
 * @category Clone
 * @param {*} val 要复制的值。
 * @returns {any} 返回结果
 * @example
 *
 * clone([1,2,3,4])
 * // [1,2,3,4]
 *
 * clone({a: 1, b: 2})
 * // {a: 1, b: 2}
 *
 * clone(111)
 * // 111
 */
export const clone = (val: any): any => {
  if (isArray(val) && !isEmpty(val)) {
    return val.map(clone);
  }
  if (isPlainObject(val) && !isEmpty(val)) {
    const res: any = {};
    keys(val).forEach((valKey) => {
      res[valKey] = clone(val[valKey]);
    });
    return res;
  }
  return val;
};
