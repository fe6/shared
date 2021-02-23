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
export declare const hasOwn: (item: unknown, attr?: string | undefined) => boolean;
export declare const keys: {
    (o: object): string[];
    (o: {}): string[];
};
