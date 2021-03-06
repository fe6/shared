/**
 * 是否是浏览器端
 *
 *
 * @format
 * @since 0.1.0
 * @category Device
 * @returns {boolean} 返回结果
 * @example
 *
 * isClient()
 * // true
 */
export const isClient = () =>
  !!(
    typeof window !== 'undefined' &&
    window.document &&
    window.document.createElement
  );
