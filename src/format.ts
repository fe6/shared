import { isUndefined } from './is';

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
 * @category Lang
 * @param {number} num 要转换的大小
 * @returns {function} 返回带单位的大小
 * @example
 *
 * fileSizeFormat(1111)
 * // => {"size": 1.08, "unit": "KB"}
 *
 * fileSizeFormat(0)
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
