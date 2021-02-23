export declare const enum SIZE_UNIT {
    KB = "KB",
    MB = "MB",
    GB = "GB",
    TB = "TB"
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
export declare const fileSize: (num?: number | undefined) => {
    size: number;
    unit: string;
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
export declare const phone: (codePhone?: string | number) => string;
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
export declare const money: (coin?: string | number, reverse?: boolean | undefined) => string;
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
export declare const camelize: (word?: unknown, separator?: string) => string;
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
export declare const hyphenate: (word?: unknown, separator?: string) => string;
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
export declare const firstCapitalize: (word?: unknown) => string;
