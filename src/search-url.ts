/**
 * 获取 url 问号后面的某一个值
 * @static
 * @since 1.0.7
 * @returns {string} Returns ''
 * @example
 *
 * url http://underline.com?underline=lee
 * var shallow = _.searchUrl('aaa');
 * console.log(shallow); // lee
 *
 * url http://underline.com?underline=lee
 * var shallow = _.searchUrl('em');
 * console.log(shallow); // ''
 *
 * url http://underline.com
 * var shallow = _.searchUrl('em');
 * console.log(shallow); // ''
 */
export function searchUrl(name: String) {
  const reg = new RegExp(`(^|&)${name}=([^&]*)(&|$)`, 'i');
  const url = window.location.href.split('?');
  if (!url[1]) {
    return '';
  }
  const matchSearch = url[1].match(reg);

  return matchSearch ? matchSearch[2] : '';
}
