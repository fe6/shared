import { isNumber, isString, isUndefined, isPlainObject } from './is';
import { keys } from './o';
import {
  rePhone344,
  rePhone,
  reMoneyPrettify,
  reHyphenate,
  reCamelize,
} from './reg';

export const enum SIZE_UNIT {
  KB = 'KB',
  MB = 'MB',
  GB = 'GB',
  TB = 'TB',
}

/**
 * 文件字节大小的转换
 *
 *
 * @since 0.1.0
 * @category Format
 * @param {number} num 要转换的大小
 * @returns {function} 返回带单位的大小
 * @example
 *
 * fileSize(1111)
 * // => {"size": 1.08, "unit": "KB"}
 *
 * fileSize(0)
 * // => {size: 0, unit: 'bytes'}
 */
export const fileSize = (num?: number) => {
  if (isUndefined(num)) {
    return {
      size: 0,
      unit: '',
    };
  }

  let unit = 'bytes';
  let size = num || 0;
  let p = 0;
  if (size > 0 && size < 1024) {
    p = 0;

    return {
      size,
      unit,
    };
  }
  if (size >= 1024 && size < 1024 ** 2) {
    p = 1;
    unit = SIZE_UNIT.KB;
  }
  if (size >= 1024 ** 2 && size < 1024 ** 3) {
    p = 2;
    unit = SIZE_UNIT.MB;
  }
  if (size >= 1024 ** 3 && size < 1024 ** 4) {
    p = 3;
    unit = SIZE_UNIT.GB;
  }
  if (size >= 1024 ** 4 && size < 1024 ** 5) {
    p = 3;
    unit = SIZE_UNIT.TB;
  }
  size /= 1024 ** p;
  return {
    size: Number(size.toFixed(2)),
    unit,
  };
};

/**
 * 手机号脱敏
 *
 *
 * @since 0.1.0
 * @category Format
 * @param {string|number} phone 手机号
 * @returns {string} 返回脱敏之后的手机号
 * @example
 *
 * phone(13810902078)
 * // => '138***2078'
 *
 * phone('13810902078')
 * // => '138***2078'
 *
 * phone('aaa')
 * // => ''
 */
export const phone = (codePhone: string | number = ''): string => {
  if (!isString(codePhone) && !isNumber(codePhone)) {
    return '';
  }

  const tel = String(codePhone);

  if (!rePhone.test(tel)) {
    return '';
  }

  return tel.replace(rePhone344, '$1****$2');
};

/**
 * 金额格式化
 * 必须得符合金钱的验证
 *
 * @since 0.1.0
 * @category Format
 * @param {string|number} money 金额
 * @param {boolean} [reverse] 是否反转， 如果存在并且为 true ',' 取消 ，的添加，否则是添加 ','
 * @returns {string} 返回格式化之后的金额
 * @example
 *
 * money(12222.22)
 * // => '12,222.22'
 *
 * money('12222.22')
 * // => '12,222.22'
 *
 * money('aaa')
 * // => ''
 *
 * money('12,222.22', true)
 * // => '12222.22'
 *
 * money('12,222.22')
 * // => '12222.22'
 */
export const money = (
  coin: string | number = '',
  reverse?: boolean,
): string => {
  if (!isString(coin) && !isNumber(coin)) {
    return '';
  }

  const cash = String(coin);
  const cashList = cash.split('.');
  const hasFloat = cashList.length > 1;
  const cashNeed = cashList[0];
  let needed = '';
  const reReverse = /,/g;
  const hasComma = reReverse.test(cashNeed);

  if (!hasComma && !reMoneyPrettify.test(cashNeed)) {
    return '';
  }

  const isReverse = reverse || hasComma;

  needed = isReverse
    ? cashNeed.replace(reReverse, '')
    : `${cashNeed}`.replace(reMoneyPrettify, '$&,');

  return hasFloat ? `${needed}.${cashList[1]}` : needed;
};

/**
 * 小写连接符转换成驼峰
 *
 *
 * @since 0.1.0
 * @category Format
 * @param {string} word 处理的单词字符串
 * @param {string} [separator] 连接符，默认是 -
 * @returns {string} 返回格式化之后的单词
 * @example
 *
 * camelize('water-isVery-good')
 * // => 'waterIsVeryGood'
 *
 * camelize('water+isVery+good', '+')
 * // => 'waterIsVeryGood'
 *
 * camelize('水滴')
 * // => ''
 *
 * camelize('12222.22')
 * // => ''
 *
 * camelize('aaa')
 * // => ''
 */
export const camelize = (
  word: unknown = '',
  separator: string = '-',
): string => {
  if (!isString(word)) {
    return '';
  }
  const newWord = word as string;
  if (
    separator === '+' ||
    separator === '*' ||
    !reCamelize(separator).test(newWord)
  ) {
    return '';
  }
  return newWord.replace(reCamelize(separator), (_, item) =>
    item.toUpperCase(),
  );
};

/**
 * 驼峰转换成小写连接符
 *
 *
 * @since 0.1.0
 * @category Format
 * @param {string} word 处理的单词字符串
 * @param {string} [separator] 连接符，默认是 -
 * @returns {string} 返回格式化之后的单词
 * @example
 *
 * hyphenate('111F')
 * // => '100-f'
 *
 * hyphenate('WaterIsVeryGood', '+')
 * // => 'water+is+very+good'
 *
 * hyphenate('水滴')
 * // => ''
 *
 * hyphenate('12222.22')
 * // => ''
 *
 * hyphenate('aaa')
 * // => ''
 */
export const hyphenate = (word: unknown = '', separator: string = '-') => {
  if (!isString(word)) {
    return '';
  }
  const newWord = word as string;
  if (!reHyphenate.test(newWord)) {
    return '';
  }
  return newWord.replace(reHyphenate, `${separator}$1`).toLowerCase();
};

/**
 * 首字母大写
 *
 *
 * @since 0.1.0
 * @category Format
 * @param {string} word 处理的单词字符串
 * @returns {string} 返回格式化之后的单词
 * @example
 *
 * firstCapitalize(12222.22)
 * // => ''
 *
 * firstCapitalize('12222.22')
 * // => ''
 *
 * firstCapitalize('aaa')
 * // => 'Aaa'
 *
 * firstCapitalize('水滴aaa')
 * // => '水滴aaa'
 *
 * firstCapitalize('aaa水滴')
 * // => 'Aaa水滴'
 */
export const firstCapitalize = (word: unknown = ''): string => {
  if (!isString(word)) {
    return '';
  }
  const newWord = word as string;
  const firstWord = newWord.charAt(0);

  if (!/^[A-Za-z]/.test(firstWord)) {
    return '';
  }

  return firstWord.toUpperCase() + newWord.slice(1);
};

/**
 * 对象转化为get请求的链接参数
 *
 *
 * @since 0.3.0
 * @category Object
 * @param {*} item 目标对象
 * @param {string} [baseUrl] 基本链接
 * @returns {string} 格式化好的字符串
 * @example
 *
 * objectToQuery({ name: 'www.baidu.com' }, 'www.water.com')
 * // => www.baidu.com?name=lee
 *
 * objectToQuery({a: '3', b: '4'})
 * // => a=3&b=4
 */
export const objectToQuery = (item: unknown, baseUrl?: string): string => {
  let parameters = '';

  if (isPlainObject(item)) {
    const plainObj = item as any;
    parameters = keys(plainObj).reduce((acc: string, attr: string) => {
      return `${attr}=${encodeURIComponent(plainObj[attr])}&${acc}`;
    }, '');
  }
  parameters = parameters.replace(/&$/, '');

  if (isString(baseUrl)) {
    const baseUrlStr = baseUrl as string;
    return /\?$/.test(baseUrlStr)
      ? baseUrlStr + parameters
      : baseUrlStr.replace(/\/?$/, '?') + parameters;
  }
  return parameters;
};
