export declare const rePhone344: RegExp;
export declare const rePhone: RegExp;
export declare const reMoneyPrettify: RegExp;
export declare const reHyphenate: RegExp;
export declare const reOnlyEnOrNum: RegExp;
export declare const reOnlyCn: RegExp;
export declare const rePlusNumber: RegExp;
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
export declare const reCamelize: (separator?: unknown) => RegExp;
