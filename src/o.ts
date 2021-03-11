import { isArray, isPlainObject } from './is';

const { hasOwnProperty } = Object.prototype;

/**
 * 方法会返回一个布尔值，指示对象自身属性中是否具有指定的属性（也就是，是否有指定的键）。
 *
 *
 * @since 0.1.0
 * @category Object
 * @param {*} item 目标对象
 * @param {string} attr 要检测的属性
 * @returns {boolean} 用来判断某个对象是否含有指定的属性的布尔值
 * @example
 *
 * hasOwn({ name: 'lee' }, 'name')
 * // => true
 *
 * hasOwn({ name: 'lee' }, 'age')
 * // => false
 */
export const hasOwn = (item: unknown, attr?: string) => {
  if (!isPlainObject(item) || !attr) {
    return false;
  }

  return hasOwnProperty.call(item, attr);
};

export const { keys } = Object;

/**
 * 深度合并
 *
 *
 * @since 0.7.0
 * @category Object
 * @param {*} src 元对象
 * @param {*} target 目标对象
 * @returns {T} 返回新对象
 * @example
 *
 * deepMerge({ name: 'lee' }, { name: 'foo' })
 * // => { name: 'foo' }
 */
export function deepMerge<T = any>(src: any = {}, target: any = {}): T {
  if (!isPlainObject(src) || !isPlainObject(target)) {
    return {} as T;
  }
  const newObj = { ...target };
  keys(src).forEach((attr) => {
    if (isPlainObject(src[attr])) {
      newObj[attr] = deepMerge(src[attr], target[attr]);
    } else if (isArray(target[attr])) {
      newObj[attr] = target[attr].slice();
    } else {
      newObj[attr] = target[attr];
    }
  });
  return newObj;
}
