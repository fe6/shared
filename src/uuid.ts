/**
 * 4位随机数
 * @static
 * @since 0.1.0
 * @returns {string} 随机数
 * @example
 *
 * var shallow = _.guidS4(objects);
 * console.log(shallow); // 359b
 */
const guidS4 = (): string =>
  Math.ceil((1 + Math.random()) * 0x10000)
    .toString(16)
    .substring(1);

/**
 * 生成32位码
 * @static
 * @since 0.1.0
 * @returns {string} 随机数
 * @example
 *
 * var shallow = _.guid();
 * console.log(shallow); // 359b53bab8ff1b0b1f7f9a32ac20c2aa
 */
export const uuid = () =>
  `${guidS4()}${guidS4()}${guidS4()}${guidS4()}${guidS4()}${guidS4()}${guidS4()}${guidS4()}`;
