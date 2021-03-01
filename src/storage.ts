import { isSymbol, isNumber, isString, isNaN } from './is';

export const DEFAULT_CACHE_TIME = 60 * 60 * 24 * 7;

export interface CreateStorageParams {
  storage?: Storage;
  prefixKey?: string;
}

/**
 * 创建 Storage
 *
 *
 * @since 0.4.0
 * @category Storage
 * @param {string} [prefixKey] 前缀
 * @param {string} [storage] 指定 storage 类型
 * @returns {WebStorage} 返回 WebStorage 对象
 * @example
 *
 * createStorage('prefixKey')
 *
 * reCamelize('prefixKey', sessionStorage)
 * // => /+(\w)/g
 *
 */
export const createStorage = ({
  prefixKey,
  storage,
}: CreateStorageParams = {}) => {
  /**
   *Cache class
   *Construction parameters can be passed into sessionStorage, localStorage,
   * @class Cache
   * @example
   */
  const WebStorage = class WebStorage {
    storage: Storage;

    prefixKey?: string;

    /**
     *
     * @param {*} storage
     */
    constructor() {
      this.storage = storage || localStorage;
      this.prefixKey = prefixKey || '';
    }

    /**
     * 获取 Storage 存储的 key
     *
     *
     * @since 0.4.0
     * @category Storage
     * @param {string} [key] key
     * @returns {string} 返回 存储的 key
     * @example
     *
     * getKey('prefixKey')
     *
     */
    getKey(key: string): string {
      return isString(key) ? `${this.prefixKey}${key}`.toUpperCase() : '';
    }

    /**
     * 设置 Storage
     *
     *
     * @since 0.4.0
     * @category Storage
     * @param {string} key key
     * @param {string} value value
     * @param {number} [expire] 过期时间，单位 秒 s
     * @returns {void} void
     * @example
     *
     * set('prefixKey'， 123)
     * set('prefixKey'， 123， 1000)
     *
     */
    set(key: string, value: any, exp?: unknown) {
      if (isString(key) && key !== '') {
        const expNumber = isSymbol(exp) ? 0 : Number(exp);
        const expire =
          isNumber(exp) && !isNaN(expNumber) && expNumber > 0
            ? new Date().getTime() + Number(exp) * 1000
            : null;
        const stringData = JSON.stringify({
          value,
          expire,
        });
        const stringifyValue = stringData;
        this.storage.setItem(this.getKey(key), stringifyValue);
      }
    }

    /**
     * 获取 Storage
     * 过期了自动删除
     *
     * @since 0.4.0
     * @category Storage
     * @param {string} key key
     * @param {string} def 不存在 key 的默认返回
     * @returns {void} void
     * @example
     *
     * get('prefixKey'， 123)
     * get('prefixKey'， 123)
     *
     */
    get(key: string, def: any = ''): unknown {
      const item = this.storage.getItem(this.getKey(key));
      if (item) {
        const decItem = item;
        const data = JSON.parse(decItem);
        const { value, expire } = data;
        if (expire === null || expire >= new Date().getTime()) {
          return value;
        }
        this.remove(this.getKey(key));
        return '';
      }
      return def;
    }

    /**
     * 删除 key 的 Storage
     *
     * @since 0.4.0
     * @category Storage
     * @param {string} key key
     * @param {string} def 不存在 key 的默认返回
     * @returns {void} void
     * @example
     *
     * remove('prefixKey')
     *
     */
    remove(key: string) {
      this.storage.removeItem(this.getKey(key));
    }

    /**
     * Delete all caches of this instance
     */

    /**
     * 删除 所有 的 Storage
     *
     * @since 0.4.0
     * @category Storage
     * @returns {void} void
     * @example
     *
     * clear()
     *
     */
    clear(): void {
      this.storage.clear();
    }
  };

  return new WebStorage();
};
