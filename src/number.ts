/** @format */

import { isNaN, isNumber, isSymbol, isUndefined } from './is';

/**
 * 是否是负数
 *
 *
 * @since 0.1.0
 * @category Number
 * @param {*} val 要检查的值。
 * @returns {boolean} 如果是返回 true ，否则返回 false
 * @example
 *
 * isMinus(-100)
 * // => true
 *
 * isMinus(-100.11)
 * // => true
 *
 * isMinus(123)
 * // => false
 */
export const isMinus = (val: unknown = undefined): boolean => {
  if (isSymbol(val) || isNaN(Number(val))) {
    return false;
  }

  const str = String(val);

  return str[0] === '-';
};

/**
 * 是否是整数
 *
 *
 * @since 0.1.0
 * @category Number
 * @param {*} val 要检查的值。
 * @returns {boolean} 如果是返回 true ，否则返回 false
 * @example
 *
 * isInteger(-100)
 * // => true
 *
 * isInteger(100)
 * // => true
 *
 * isInteger(12.3)
 * // => false
 *
 * isInteger(-12.3)
 * // => false
 */
export const isInteger = (val: any = undefined): boolean =>
  isNumber(val) && Number.isFinite(val) && Math.floor(val) === val;

/**
 * 是否是正整数
 *
 *
 * @since 0.1.0
 * @category Number
 * @param {*} val 要检查的值。
 * @returns {boolean} 如果是返回 true ，否则返回 false
 * @example
 *
 * isPlusInteger(100)
 * // => true
 *
 * isPlusInteger(-12)
 * // => false
 */
export const isPlusInteger = (val: unknown = undefined): boolean =>
  isInteger(val) && !isMinus(val);

/**
 * 是否是小数
 *
 *
 * @since 0.1.0
 * @category Number
 * @param {*} val 要检查的值。
 * @returns {boolean} 如果是返回 true ，否则返回 false
 * @example
 *
 * isFloat(100)
 * // => true
 *
 * isFloat(-12)
 * // => false
 */
export const isFloat = (val: unknown = undefined): boolean =>
  !isUndefined(val) && !isNaN(val) && isNumber(val) && !isInteger(val);

/**
 * 是否是负整数
 *
 *
 * @since 0.1.0
 * @category Number
 * @param {*} val 要检查的值。
 * @returns {boolean} 如果是返回 true ，否则返回 false
 * @example
 *
 * isMinusInteger(-100)
 * // => true
 *
 * isMinusInteger(12)
 * // => false
 */
export const isMinusInteger = (val: unknown = undefined): boolean =>
  isInteger(val) && isMinus(val);

/**
 * 获取一段区间内的随机数
 *
 *
 * @since 0.1.0
 * @category Number
 * @param {number} minValue 最小区间
 * @param {number} minValue 最大区间
 * @param {boolean} isFloat 是否是小数
 * @returns {number} 返回在最大最小区间内包括最大最小区间的整数
 * @example
 *
 * randomNumber(-100, 1)
 * // 生成 -100 到 1 之间的整数
 * // => 1
 *
 * randomNumber(12, 22)
 * // 生成 12 到 22 之间的整数
 * // => 12
 *
 * randomNumber(1, 3)
 * // 生成 1 到 3 之间的整数
 * // => 2
 *
 * randomNumber(1.1, 3.2)
 * // 生成 1.1 到 3.2 之间的小数
 * // => 2.2
 *
 * randomNumber(1, 3.2)
 * // 生成 1 到 3.2 之间的小数
 * // => 2.2
 *
 * randomNumber(1.1, 3)
 * // 生成 1 到 3 之间的小数
 * // => 2.2
 *
 * randomNumber(1, 3, true)
 * // 生成 1 到 3 之间的小数
 * // => 2.2
 */
export const randomNumber = (
  minValue: unknown,
  maxValue: unknown,
  isFloating?: boolean,
) => {
  if (
    isNaN(minValue) ||
    !isNumber(minValue) ||
    isNaN(maxValue) ||
    !isNumber(maxValue)
  ) {
    return 0;
  }

  const minNum = minValue as number;
  const maxNum = maxValue as number;

  // 如果是小数
  if (isFloating || isFloat(minNum) || isFloat(maxNum)) {
    const rand = Math.random();
    const randLength = `${rand}`.length - 1;
    return Math.min(
      minNum + rand * (maxNum - minNum + parseFloat(`1e-${randLength}`)),
      maxNum,
    );
  }
  // 取值范围总数
  const choices = maxNum - minNum + 1;
  return Math.floor(Math.random() * choices + minNum);
};

/**
 * 是否是负整数
 *
 *
 * @since 0.1.0
 * @category Number
 * @param {*} val 要检查的值。
 * @returns {boolean} 如果是返回 true ，否则返回 false
 * @example
 *
 * inRange(3, 2, 4)
 * // => true
 *
 * inRange(4, 8)
 * // => true
 *
 * inRange(4, 2)
 * // => false
 *
 * inRange(2, 2)
 * // => false
 *
 * inRange(1.2, 2)
 * // => true
 *
 * inRange(5.2, 4)
 * // => false
 *
 * inRange(-3, -2, -6)
 * // => true
 */
export const inRange = (
  val: unknown = undefined,
  start: unknown = 0,
  end?: unknown,
): boolean => {
  if (!isNumber(val) || isSymbol(start) || !isNumber(start)) {
    return false;
  }
  let startNum = start as number;
  const valNum = val as number;
  let endNum = startNum;

  if (isUndefined(end)) {
    startNum = 0;
  }

  if (!isUndefined(end) && !isNumber(end)) {
    return false;
  }

  if (!isUndefined(end) && isNumber(end)) {
    endNum = end as number;
  }

  return (
    valNum >= Math.min(startNum, endNum) && valNum < Math.max(startNum, endNum)
  );
};

/**
 * 计算的基础
 *
 *
 * @since 0.1.0
 * @category Number
 * @param {function} operator 执行操作的方法。
 * @param {number} [defaultValue] 参数默认值
 * @returns {Function} 返回新的数学运算函数。
 * @example
 *
 * count(augend, addend) => augend + addend, 0)(1, 2)
 * // => 3
 *
 * count(augend, addend) => augend + addend, 0)(1)
 * // => 2
 *
 * count(augend, addend) => augend + addend, 7)()
 * // => 7
 */
export const count = (
  operator: Function,
  defaultValue: number = 0,
): Function => (oneVal: unknown, twoVal: unknown) => {
  if (isUndefined(oneVal) && isUndefined(twoVal)) {
    return defaultValue;
  }

  let oneNewVal = oneVal;
  let twoNewVal = twoVal;

  if (isSymbol(oneNewVal) && isSymbol(twoNewVal)) {
    return defaultValue;
  }

  if (isSymbol(oneNewVal) && !isSymbol(twoNewVal)) {
    oneNewVal = twoNewVal;
  }

  if (!isSymbol(oneNewVal) && isSymbol(twoNewVal)) {
    twoNewVal = oneNewVal;
  }

  let oneNum = Number(oneNewVal);
  let twoNum = isUndefined(twoNewVal) ? oneNum : Number(twoNewVal);

  if (isNaN(oneNum) && isNaN(twoNum)) {
    return defaultValue;
  }

  if (isNaN(oneNum) && !isNaN(twoNum)) {
    oneNum = twoNum;
  }

  if (!isNaN(oneNum) && isNaN(twoNum)) {
    twoNum = oneNum;
  }

  return operator(oneNum, twoNum);
};

/**
 * 将两个数字相加
 *
 * @since 0.1.0
 * @category Math
 * @param {unknown} oneValue 运算中的第一个数字
 * @param {unknown} twoValue 运算中的第二个数字
 * @returns {number} 返回总和
 * @example
 *
 * add()
 * // => 0
 *
 * add(1, 2)
 * // => 3
 *
 * add(1)
 * // => 2
 */
export const add = count((oneValue: unknown, twoValue: unknown) => {
  const oneNum = oneValue as number;
  const twoNum = twoValue as number;
  return oneNum + twoNum;
}, 0);

/**
 * 将两个数字相减
 *
 * @since 0.1.0
 * @category Math
 * @param {unknown} oneValue 运算中的第一个数字
 * @param {unknown} twoValue 运算中的第二个数字
 * @returns {number} 返回总和
 * @example
 *
 * subtract()
 * // => 0
 *
 * subtract(6, 4)
 * // => 2
 *
 * subtract(1, 2)
 * // => -1
 *
 * subtract(1)
 * // => 0
 */
export const subtract = count((oneValue: unknown, twoValue: unknown) => {
  const oneNum = oneValue as number;
  const twoNum = twoValue as number;
  return oneNum - twoNum;
}, 0);

/**
 * 将两个数字相乘
 *
 * @since 0.1.0
 * @category Math
 * @param {unknown} oneValue 运算中的第一个数字
 * @param {unknown} twoValue 运算中的第二个数字
 * @returns {number} 返回总和
 * @example
 *
 * multiply()
 * // => 1
 *
 * multiply(1, 2)
 * // => 2
 *
 * multiply(3)
 * // => 9
 */
export const multiply = count((oneValue: unknown, twoValue: unknown) => {
  const oneNum = oneValue as number;
  const twoNum = twoValue as number;
  return oneNum * twoNum;
}, 1);

/**
 * 将两个数字相除
 *
 * @since 0.1.0
 * @category Math
 * @param {unknown} oneValue 运算中的第一个数字
 * @param {unknown} twoValue 运算中的第二个数字
 * @returns {number} 返回总和
 * @example
 *
 * divide()
 * // => 1
 *
 * divide(1, 2)
 * // => 0.5
 *
 * divide(3)
 * // => 1
 */
export const divide = count((oneValue: unknown, twoValue: unknown) => {
  const oneNum = oneValue as number;
  const twoNum = twoValue as number;
  return oneNum / twoNum;
}, 1);
