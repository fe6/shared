export declare const enum JS_TYPES {
    ARGUMENTS = "Arguments",
    NUMBER = "Number",
    STRING = "String",
    BOOLEAN = "Boolean",
    UNDEFINED = "Undefined",
    NULL = "Null",
    FUNCTION = "Function",
    SYMBOL = "Symbol",
    ARRAY = "Array",
    OBJECT = "Object",
    PROMISE = "Promise",
    SET = "Set",
    WEAKSET = "WeakSet",
    MAP = "Map",
    DATE = "Date"
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
export declare const objectToString: () => string;
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
export declare const toTypeString: (value: unknown) => string;
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
export declare const like: (val?: unknown) => string;
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
export declare const isArguments: (val?: unknown) => boolean;
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
export declare const isNumber: (val?: unknown) => boolean;
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
export declare const isString: (val?: unknown) => boolean;
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
export declare const isSymbol: (val?: unknown) => boolean;
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
export declare const isBoolean: (val?: unknown) => boolean;
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
export declare const isFunction: (val?: unknown) => boolean;
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
export declare const isUndefined: (val?: unknown) => boolean;
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
export declare const isNull: (val?: unknown) => boolean;
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
export declare const isArray: (val?: unknown) => boolean;
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
export declare const isPlainObject: (val?: unknown) => boolean;
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
export declare const isPromise: (val?: unknown) => boolean;
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
export declare const isSet: (val?: unknown) => boolean;
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
export declare const isWeakSet: (val?: unknown) => boolean;
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
export declare const isMap: (val?: unknown) => boolean;
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
export declare const isDate: (val?: unknown) => boolean;
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
export declare const isPrototype: (val?: unknown) => boolean;
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
export declare const isNaN: (val?: unknown) => boolean;
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
export declare const isEmpty: (val?: unknown) => boolean;
