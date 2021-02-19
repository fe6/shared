import { isPlainObject } from './is';

const { hasOwnProperty } = Object.prototype;

export const hasOwn = (item: unknown, attr?: string) => {
  if (!isPlainObject(item) || !attr) {
    return false;
  }

  return hasOwnProperty.call(item, attr);
};

export const { keys } = Object;
