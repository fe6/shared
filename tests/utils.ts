/* eslint-disable */
export const toArgs = (array: any) => (function () { return arguments; }.apply(undefined, array));

export const arrayProto = Array.prototype;

export const NaN = 0/0;

export const falsey = [, null, undefined, false, 0, NaN, ''];

// 特殊情况的判断
export const others = [,new Map(), new WeakSet(), new Set(), '100F', undefined, NaN, Object(NaN), new Promise((a) => { a(1); }), [1, 2, 3], new Error(), arrayProto.slice, { a: 1 }, /x/, 'a', Symbol ? Symbol('a') : undefined, Function];
