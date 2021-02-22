/**
 * 是否是浏览器端
 *
 *
 *
 * isClient()
 * // true
 *
 * @format
 * @since 0.1.0
 * @category Device
 * @returns {boolean} 返回结果
 * @example
 */

export const isClient = () =>
  !!(
    typeof window !== 'undefined' &&
    window.document &&
    window.document.createElement
  );
