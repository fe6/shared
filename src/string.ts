import { isString } from './is';

/**
 * 获取中英文字符串，中文占两个长度
 *
 * @since 0.9.0
 * @category Math
 * @param {unknown} oneValue 运算中的第一个数字
 * @param {unknown} twoValue 运算中的第二个数字
 * @returns {number} 返回总和
 * @example
 *
 * getStrLength()
 * // => 0
 *
 * getStrLength('水滴', '22')
 * // => 4
 *
 * getStrLength('water')
 * // => 5
 */
export const getStrLength = (str?: unknown, replaceValue: string = 'ww') => {
  if (!isString(str)) {
    return 0;
  }
  /* eslint-disable no-control-regex */
  return String(str).replace(/[^\x00-\xff]/g, replaceValue).length;
};
