import { reUrl } from './reg';

export const enum JS_TYPES {
  ARGUMENTS = 'Arguments',
  NUMBER = 'Number',
  STRING = 'String',
  BOOLEAN = 'Boolean',
  UNDEFINED = 'Undefined',
  NULL = 'Null',
  FUNCTION = 'Function',
  SYMBOL = 'Symbol',
  ARRAY = 'Array',
  OBJECT = 'Object',
  PROMISE = 'Promise',
  SET = 'Set',
  WEAKSET = 'WeakSet',
  MAP = 'Map',
  DATE = 'Date',
}

/**
 * 对象转字符串方法
 *
 *
 * @since 0.1.0
 * @category Lang
 * @param {*} val 要检查的值。
 * @returns {function} 返回方法
 * @example
 *
 * objectToString.call('value')
 * // => [object String]
 *
 * objectToString.call(123)
 * // => [object Number]
 */
export const objectToString = Object.prototype.toString;

/**
 * 获取类型通用方法
 *
 *
 * @since 0.1.0
 * @category Lang
 * @param {*} val 要检查的值。
 * @returns {string} 字符串， 如 [object Number]
 * @example
 *
 * toTypeString('value')
 * // => [object String]
 *
 * toTypeString(123)
 * // => [object Number]
 */
export const toTypeString = (value: unknown): string =>
  objectToString.call(value);

/**
 * 获取类型简便方法
 *
 *
 * @since 0.1.0
 * @category Lang
 * @param {*} val 要检查的值。
 * @returns {string} 字符串， 如 Number
 * @example
 *
 * like('value')
 * // => String
 *
 * like(123)
 * // => Number
 */
export const like = (val: unknown = undefined): string =>
  toTypeString(val).replace(/(\[object )(\w*)(\])/g, (a, p1, type) => type);

/**
 * 是否是 Arguments
 *
 *
 * @since 0.1.0
 * @category Lang
 * @param {*} val 要检查的值。
 * @returns {boolean} 如果是返回 true ，否则返回 false
 * @example
 *
 * isArguments('value')
 * // => false
 *
 * isArguments(123)
 * // => true
 */
export const isArguments = (val: unknown = undefined): boolean =>
  like(val) === JS_TYPES.ARGUMENTS;

/**
 * 是否是数字
 *
 *
 * @since 0.1.0
 * @category Lang
 * @param {*} val 要检查的值。
 * @returns {boolean} 如果是返回 true ，否则返回 false
 * @example
 *
 * isNumber('value')
 * // => false
 *
 * isNumber(123)
 * // => true
 */
export const isNumber = (val: unknown = undefined): boolean =>
  like(val) === JS_TYPES.NUMBER;

/**
 * 是否是字符串
 *
 *
 * @since 0.1.0
 * @category Lang
 * @param {*} val 要检查的值。
 * @returns {boolean} 如果是返回 true ，否则返回 false
 * @example
 *
 * isString('value')
 * // => true
 *
 * isString(123)
 * // => false
 */
export const isString = (val: unknown = undefined): boolean =>
  like(val) === JS_TYPES.STRING;

/**
 * 是否是 symbol
 *
 *
 * @since 0.1.0
 * @category Lang
 * @param {*} val 要检查的值。
 * @returns {boolean} 如果是返回 true ，否则返回 false
 * @example
 *
 * isSymbol(Symbol())
 * // => true
 *
 * isSymbol(123)
 * // => false
 */
export const isSymbol = (val: unknown = undefined): boolean =>
  like(val) === JS_TYPES.SYMBOL;

/**
 * 是否是布尔值
 *
 *
 * @since 0.1.0
 * @category Lang
 * @param {*} val 要检查的值。
 * @returns {boolean} 如果是返回 true ，否则返回 false
 * @example
 *
 * isBoolean(true)
 * // => true
 *
 * isBoolean(123)
 * // => false
 */
export const isBoolean = (val: unknown = undefined): boolean =>
  like(val) === JS_TYPES.BOOLEAN;

/**
 * 是否是函数
 *
 *
 * @since 0.1.0
 * @category Lang
 * @param {*} val 要检查的值。
 * @returns {boolean} 如果是返回 true ，否则返回 false
 * @example
 *
 * isSymbol(Function)
 * // => true
 *
 * isSymbol(123)
 * // => false
 */
export const isFunction = (val: unknown = undefined): boolean =>
  like(val) === JS_TYPES.FUNCTION;

/**
 * 是否是 undefined
 *
 *
 * @since 0.1.0
 * @category Lang
 * @param {*} val 要检查的值。
 * @returns {boolean} 如果是返回 true ，否则返回 false
 * @example
 *
 * isUndefined(undefined)
 * // => true
 *
 * isUndefined(123)
 * // => false
 */
export const isUndefined = (val: unknown = undefined): boolean =>
  like(val) === JS_TYPES.UNDEFINED;

/**
 * 是否是 null
 *
 *
 * @since 0.1.0
 * @category Lang
 * @param {*} val 要检查的值。
 * @returns {boolean} 如果是返回 true ，否则返回 false
 * @example
 *
 * isNull(null)
 * // => true
 *
 * isNull(void 0)
 * // => false
 */
export const isNull = (val: unknown = undefined): boolean =>
  like(val) === JS_TYPES.NULL;

/**
 * 是否是数组
 *
 *
 * @since 0.1.0
 * @category Lang
 * @param {*} val 要检查的值。
 * @returns {boolean} 如果是返回 true ，否则返回 false
 * @example
 *
 * isArray([1])
 * // => true
 *
 * isArray(123)
 * // => false
 */
export const isArray = (val: unknown = undefined): boolean =>
  like(val) === JS_TYPES.ARRAY;

/**
 * 是否是普通对象
 *
 *
 * @since 0.1.0
 * @category Lang
 * @param {*} val 要检查的值。
 * @returns {boolean} 如果是返回 true ，否则返回 false
 * @example
 *
 * isPlainObject({})
 * // => true
 *
 * isPlainObject(123)
 * // => false
 */
export const isPlainObject = (val: unknown = undefined): boolean =>
  like(val) === JS_TYPES.OBJECT;

/**
 * 是否是 promise
 *
 *
 * @since 0.1.0
 * @category Lang
 * @param {*} val 要检查的值。
 * @returns {boolean} 如果是返回 true ，否则返回 false
 * @example
 *
 * isPromise(new Promise(function(a) {a()});)
 * // => true
 *
 * isPromise(123)
 * // => false
 */
export const isPromise = (val: unknown = undefined): boolean =>
  like(val) === JS_TYPES.PROMISE;

/**
 * 是否是 Set 对象
 *
 *
 * @since 0.1.0
 * @category Lang
 * @param {*} val 要检查的值。
 * @returns {boolean} 如果是返回 true ，否则返回 false
 * @example
 *
 * isSet(new Set())
 * // => true
 *
 * isSet(123)
 * // => false
 */
export const isSet = (val: unknown = undefined): boolean =>
  like(val) === JS_TYPES.SET;

/**
 * 是否是 WeakSet 对象
 *
 *
 * @since 0.1.0
 * @category Lang
 * @param {*} val 要检查的值。
 * @returns {boolean} 如果是返回 true ，否则返回 false
 * @example
 *
 * isWeakSet(new WeakSet())
 * // => true
 *
 * isWeakSet(123)
 * // => false
 */
export const isWeakSet = (val: unknown = undefined): boolean =>
  like(val) === JS_TYPES.WEAKSET;

/**
 * 是否是 Map 对象
 *
 *
 * @since 0.1.0
 * @category Lang
 * @param {*} val 要检查的值。
 * @returns {boolean} 如果是返回 true ，否则返回 false
 * @example
 *
 * isMap(new Map())
 * // => true
 *
 * isMap(123)
 * // => false
 */
export const isMap = (val: unknown = undefined): boolean =>
  like(val) === JS_TYPES.MAP;

/**
 * 是否是 Date 对象
 *
 *
 * @since 0.1.0
 * @category Lang
 * @param {*} val 要检查的值。
 * @returns {boolean} 如果是返回 true ，否则返回 false
 * @example
 *
 * isDate(new Date())
 * // => true
 *
 * isDate(123)
 * // => false
 */
export const isDate = (val: unknown = undefined): boolean =>
  like(val) === JS_TYPES.DATE;

/**
 * 检查 'val' 是否可能是原型对象。
 *
 *
 * @since 0.1.0
 * @category Lang
 * @param {*} val 要检查的值。
 * @returns {boolean} 如果是返回 true ，否则返回 false
 * @example
 *
 * isPrototype({a: 'as'})
 * // => true
 *
 * isPrototype(12)
 * // => false
 */
export const isPrototype = (val: unknown = undefined) => {
  const functionVal = val as Function;
  const Ctor = functionVal && functionVal.constructor;
  const objectProto = Object.prototype;
  const proto = (isFunction(Ctor) && Ctor.prototype) || objectProto;

  return val === proto;
};

/**
 * 是否是 NaN
 *
 *
 * @since 0.1.0
 * @category Lang
 * @param {*} val 要检查的值。
 * @returns {boolean} 如果是返回 true ，否则返回 false
 * @example
 *
 * isNaN('f100')
 * // => true
 *
 * isNaN(123)
 * // => false
 */
export const isNaN = (val: unknown = undefined): boolean => {
  if (isSymbol(val)) {
    return true;
  }

  const num = Number(val);
  /* eslint-disable no-self-compare */
  return num !== num;
};

/**
 * 是否是空对象，集合，映射或者set
 * 判断的依据是除非是有枚举属性的对象，length 大于 0 的 arguments object , array , string 。
 *
 *
 * @since 0.1.0
 * @category Lang
 * @param {*} val 要检查的值。
 * @returns {boolean} 如果是返回 true ，否则返回 false
 * @example
 *
 * isEmpty(null);
 * // => true
 *
 * isEmpty(true);
 * // => true
 *
 * isEmpty(1);
 * // => true
 *
 * isEmpty([1, 2, 3]);
 * // => false
 *
 * isEmpty({ 'a': 1 });
 * // => false
 */
export const isEmpty = (val: unknown = undefined): boolean => {
  if (isArray(val)) {
    const arrayVal = val as unknown[];
    return !arrayVal.length;
  }

  if (isString(val)) {
    const arrayVal = val as string;
    return !arrayVal.length;
  }

  if (isMap(val) || isSet(val)) {
    const arrayVal = val as Set<string> | Map<string, unknown>;
    return !arrayVal.size;
  }

  const anyVal = val as any;
  const objectVal = val as object;

  if (isPrototype(val)) {
    return !Object.keys(objectVal).length;
  }

  if (isPlainObject(anyVal) || isArguments(anyVal)) {
    const valKeys = Object.keys(anyVal);
    if (valKeys.length > 0) {
      return false;
    }
  }

  return true;
};

/**
 * 是否是地址
 *
 *
 *
 * @since 0.5.0
 * @category Lang
 * @param {*} val 要检查的值。
 * @returns {boolean} 如果是返回 true ，否则返回 false
 * @example
 *
 * isUrl('http://www.water.com');
 * // => true
 *
 * isUrl('https://www.water.com');
 * // => true
 *
 * isUrl('https://www.water.com?good=true');
 * // => true
 *
 * isUrl(null);
 * // => false
 *
 * isUrl(false);
 * // => false
 *
 * isUrl(1);
 * // => false
 *
 * isUrl([1, 2, 3]);
 * // => false
 *
 * isUrl({ 'a': 1 });
 * // => false
 */
export function isUrl(path: unknown): boolean {
  if (!isString(path)) {
    return false;
  }
  const pathString = path as string;
  return reUrl.test(pathString);
}
