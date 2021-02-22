/** @format */

import { isString } from './is';

// 按344位数切割手机号，用于手机脱敏等
export const rePhone344 = /(\d{3})\d{4}(\d{4})/g;
// 手机号正则
export const rePhone = /^1[3456789]\d{9}$/;
// 金额格式化正则，匹配: 12,222,222.11
export const reMoneyPrettify = /\d{1,3}(?=(\d{3})+(\.\d*)?$)/g;
// 驼峰转字母横线的正则
export const reHyphenate = /\B([A-Z])/g;
// 只能输入数字和英文
export const reOnlyEnOrNum = /^[0-9A-Za-z]+$/g;
// 只能中文
export const reOnlyCn = /^[\u4e00-\u9fa5]+$/g;
// 正数
export const rePlusNumber = /^\d+(\.\d+)?$/;
//
/**
 * 获取 字母横线( 或其他 )转驼峰的正则
 *
 *
 * @since 0.1.0
 * @category Reg
 * @param {string} [separator] 连接符，默认是 -
 * @returns {RegExp} 返回正则
 * @example
 *
 * reCamelize()
 * // => /-(\w)/g;
 *
 * reCamelize('+')
 * // => /+(\w)/g
 *
 */
export const reCamelize = (separator: unknown = '-') => {
  const newSeparator =
    !isString(separator) || separator === '+' || separator === '*'
      ? '-'
      : separator;
  return new RegExp(`${newSeparator}(\\w)`, 'g');
};
