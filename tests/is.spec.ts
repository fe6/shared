import * as isFn from '../src/is';
import { arrayProto, toArgs } from './utils';

describe('is', () => {
  test('objectToString', () => {
    expect(isFn.objectToString.call('value')).toBe('[object String]');
    expect(isFn.objectToString.call(123)).toBe('[object Number]');
  });

  test('like', () => {
    expect(isFn.like('value')).toBe('String');
    expect(isFn.like(123)).toBe('Number');
    expect(isFn.like()).toBe('Undefined');
  });

  test('isNumber', () => {
    expect(isFn.isNumber(123)).toBeTruthy();
    expect(isFn.isNumber(NaN)).toBeTruthy();
    expect(isFn.isNumber(Object(NaN))).toBeTruthy();
    expect(isFn.isNumber(Object(1))).toBeTruthy();

    expect(isFn.isNumber(new Date())).toBeFalsy();
    expect(isFn.isNumber(new Map())).toBeFalsy();
    expect(isFn.isNumber(new WeakSet())).toBeFalsy();
    expect(isFn.isNumber(new Set())).toBeFalsy();
    expect(
      isFn.isNumber(
        new Promise((a) => {
          a(1);
        }),
      ),
    ).toBeFalsy();
    expect(isFn.isNumber([1, 2, 3])).toBeFalsy();
    expect(isFn.isNumber(null)).toBeFalsy();
    expect(isFn.isNumber(undefined)).toBeFalsy();
    expect(isFn.isNumber(Function)).toBeFalsy();
    expect(isFn.isNumber(new Error())).toBeFalsy();
    expect(isFn.isNumber(arrayProto.slice)).toBeFalsy();
    expect(isFn.isNumber({ a: 1 })).toBeFalsy();
    expect(isFn.isNumber(/x/)).toBeFalsy();
    expect(isFn.isNumber(Symbol ? Symbol('a') : undefined)).toBeFalsy();
    expect(isFn.isNumber('value')).toBeFalsy();
    expect(isFn.isNumber(true)).toBeFalsy();
    expect(isFn.isNumber(new Date())).toBeFalsy();
  });

  test('isString', () => {
    expect(isFn.isString('value')).toBeTruthy();

    expect(isFn.isString(new Date())).toBeFalsy();
    expect(isFn.isString(new Map())).toBeFalsy();
    expect(isFn.isString(new WeakSet())).toBeFalsy();
    expect(isFn.isString(new Set())).toBeFalsy();
    expect(
      isFn.isString(
        new Promise((a) => {
          a(1);
        }),
      ),
    ).toBeFalsy();
    expect(isFn.isString([1, 2, 3])).toBeFalsy();
    expect(isFn.isString(undefined)).toBeFalsy();
    expect(isFn.isString(null)).toBeFalsy();
    expect(isFn.isString(Function)).toBeFalsy();
    expect(isFn.isString(NaN)).toBeFalsy();
    expect(isFn.isString(Object(NaN))).toBeFalsy();
    expect(isFn.isString(Object(1))).toBeFalsy();
    expect(isFn.isString(new Error())).toBeFalsy();
    expect(isFn.isString(arrayProto.slice)).toBeFalsy();
    expect(isFn.isString({ a: 1 })).toBeFalsy();
    expect(isFn.isString(/x/)).toBeFalsy();
    expect(isFn.isString(123)).toBeFalsy();
    expect(isFn.isString(Symbol ? Symbol('a') : undefined)).toBeFalsy();
    expect(isFn.isString(true)).toBeFalsy();
    expect(isFn.isString(new Date())).toBeFalsy();
  });

  test('isSymbol', () => {
    expect(isFn.isSymbol(Symbol ? Symbol('a') : undefined)).toBeTruthy();

    expect(isFn.isSymbol(new Date())).toBeFalsy();
    expect(isFn.isSymbol(new Map())).toBeFalsy();
    expect(isFn.isSymbol(new WeakSet())).toBeFalsy();
    expect(isFn.isSymbol(new Set())).toBeFalsy();
    expect(
      isFn.isSymbol(
        new Promise((a) => {
          a(1);
        }),
      ),
    ).toBeFalsy();
    expect(isFn.isSymbol('value')).toBeFalsy();
    expect(isFn.isSymbol(undefined)).toBeFalsy();
    expect(isFn.isSymbol(null)).toBeFalsy();
    expect(isFn.isSymbol(Function)).toBeFalsy();
    expect(isFn.isSymbol([1, 2, 3])).toBeFalsy();
    expect(isFn.isSymbol(NaN)).toBeFalsy();
    expect(isFn.isSymbol(Object(NaN))).toBeFalsy();
    expect(isFn.isSymbol(Object(1))).toBeFalsy();
    expect(isFn.isSymbol(new Error())).toBeFalsy();
    expect(isFn.isSymbol(arrayProto.slice)).toBeFalsy();
    expect(isFn.isSymbol({ a: 1 })).toBeFalsy();
    expect(isFn.isSymbol(/x/)).toBeFalsy();
    expect(isFn.isSymbol(123)).toBeFalsy();
    expect(isFn.isSymbol(true)).toBeFalsy();
    expect(isFn.isSymbol(new Date())).toBeFalsy();
  });

  test('isBoolean', () => {
    expect(isFn.isBoolean(true)).toBeTruthy();

    expect(isFn.isBoolean(new Date())).toBeFalsy();
    expect(isFn.isBoolean(new Map())).toBeFalsy();
    expect(isFn.isBoolean(new WeakSet())).toBeFalsy();
    expect(isFn.isBoolean(new Set())).toBeFalsy();
    expect(
      isFn.isBoolean(
        new Promise((a) => {
          a(1);
        }),
      ),
    ).toBeFalsy();
    expect(isFn.isBoolean('value')).toBeFalsy();
    expect(isFn.isBoolean(undefined)).toBeFalsy();
    expect(isFn.isBoolean(null)).toBeFalsy();
    expect(isFn.isBoolean([1, 2, 3])).toBeFalsy();
    expect(isFn.isBoolean(Function)).toBeFalsy();
    expect(isFn.isBoolean(NaN)).toBeFalsy();
    expect(isFn.isBoolean(Object(NaN))).toBeFalsy();
    expect(isFn.isBoolean(Object(1))).toBeFalsy();
    expect(isFn.isBoolean(new Error())).toBeFalsy();
    expect(isFn.isBoolean(arrayProto.slice)).toBeFalsy();
    expect(isFn.isBoolean({ a: 1 })).toBeFalsy();
    expect(isFn.isBoolean(/x/)).toBeFalsy();
    expect(isFn.isBoolean(123)).toBeFalsy();
    expect(isFn.isBoolean(Symbol ? Symbol('a') : undefined)).toBeFalsy();
    expect(isFn.isBoolean(new Date())).toBeFalsy();
  });

  test('isFunction', () => {
    expect(isFn.isFunction(Function)).toBeTruthy();
    expect(isFn.isFunction(arrayProto.slice)).toBeTruthy();

    expect(isFn.isFunction(new Date())).toBeFalsy();
    expect(isFn.isFunction(new Map())).toBeFalsy();
    expect(isFn.isFunction(new WeakSet())).toBeFalsy();
    expect(isFn.isFunction(new Set())).toBeFalsy();
    expect(
      isFn.isFunction(
        new Promise((a) => {
          a(1);
        }),
      ),
    ).toBeFalsy();
    expect(isFn.isFunction(true)).toBeFalsy();
    expect(isFn.isFunction(undefined)).toBeFalsy();
    expect(isFn.isFunction(null)).toBeFalsy();
    expect(isFn.isFunction('value')).toBeFalsy();
    expect(isFn.isFunction([1, 2, 3])).toBeFalsy();
    expect(isFn.isFunction(NaN)).toBeFalsy();
    expect(isFn.isFunction(Object(NaN))).toBeFalsy();
    expect(isFn.isFunction(Object(1))).toBeFalsy();
    expect(isFn.isFunction(new Error())).toBeFalsy();
    expect(isFn.isFunction({ a: 1 })).toBeFalsy();
    expect(isFn.isFunction(/x/)).toBeFalsy();
    expect(isFn.isFunction(123)).toBeFalsy();
    expect(isFn.isFunction(Symbol ? Symbol('a') : undefined)).toBeFalsy();
    expect(isFn.isFunction(new Date())).toBeFalsy();
  });

  test('isUndefined', () => {
    expect(isFn.isUndefined(undefined)).toBeTruthy();

    expect(isFn.isUndefined(new Date())).toBeFalsy();
    expect(isFn.isUndefined(new Map())).toBeFalsy();
    expect(isFn.isUndefined(new WeakSet())).toBeFalsy();
    expect(isFn.isUndefined(new Set())).toBeFalsy();
    expect(
      isFn.isUndefined(
        new Promise((a) => {
          a(1);
        }),
      ),
    ).toBeFalsy();
    expect(isFn.isUndefined(true)).toBeFalsy();
    expect(isFn.isUndefined(null)).toBeFalsy();
    expect(isFn.isUndefined(Function)).toBeFalsy();
    expect(isFn.isUndefined('value')).toBeFalsy();
    expect(isFn.isUndefined([1, 2, 3])).toBeFalsy();
    expect(isFn.isUndefined(NaN)).toBeFalsy();
    expect(isFn.isUndefined(Object(NaN))).toBeFalsy();
    expect(isFn.isUndefined(Object(1))).toBeFalsy();
    expect(isFn.isUndefined(new Error())).toBeFalsy();
    expect(isFn.isUndefined(arrayProto.slice)).toBeFalsy();
    expect(isFn.isUndefined({ a: 1 })).toBeFalsy();
    expect(isFn.isUndefined(/x/)).toBeFalsy();
    expect(isFn.isUndefined(123)).toBeFalsy();
    expect(isFn.isUndefined(Symbol ? Symbol('a') : undefined)).toBeFalsy();
    expect(isFn.isUndefined(new Date())).toBeFalsy();
  });

  test('isNull', () => {
    expect(isFn.isNull(null)).toBeTruthy();

    expect(isFn.isNull(undefined)).toBeFalsy();
    expect(isFn.isNull(new Date())).toBeFalsy();
    expect(isFn.isNull(new Map())).toBeFalsy();
    expect(isFn.isNull(new WeakSet())).toBeFalsy();
    expect(isFn.isNull(new Set())).toBeFalsy();
    expect(
      isFn.isNull(
        new Promise((a) => {
          a(1);
        }),
      ),
    ).toBeFalsy();
    expect(isFn.isNull(true)).toBeFalsy();
    expect(isFn.isNull(Function)).toBeFalsy();
    expect(isFn.isNull('value')).toBeFalsy();
    expect(isFn.isNull([1, 2, 3])).toBeFalsy();
    expect(isFn.isNull(NaN)).toBeFalsy();
    expect(isFn.isNull(Object(NaN))).toBeFalsy();
    expect(isFn.isNull(Object(1))).toBeFalsy();
    expect(isFn.isNull(new Error())).toBeFalsy();
    expect(isFn.isNull(arrayProto.slice)).toBeFalsy();
    expect(isFn.isNull({ a: 1 })).toBeFalsy();
    expect(isFn.isNull(/x/)).toBeFalsy();
    expect(isFn.isNull(123)).toBeFalsy();
    expect(isFn.isNull(Symbol ? Symbol('a') : undefined)).toBeFalsy();
    expect(isFn.isNull(new Date())).toBeFalsy();
  });

  test('isArray', () => {
    expect(isFn.isArray([1, 2, 3])).toBeTruthy();

    expect(isFn.isArray(undefined)).toBeFalsy();
    expect(isFn.isArray(new Date())).toBeFalsy();
    expect(isFn.isArray(new Map())).toBeFalsy();
    expect(isFn.isArray(new WeakSet())).toBeFalsy();
    expect(isFn.isArray(new Set())).toBeFalsy();
    expect(
      isFn.isArray(
        new Promise((a) => {
          a(1);
        }),
      ),
    ).toBeFalsy();
    expect(isFn.isArray(null)).toBeFalsy();
    expect(isFn.isArray(true)).toBeFalsy();
    expect(isFn.isArray('value')).toBeFalsy();
    expect(isFn.isArray(Function)).toBeFalsy();
    expect(isFn.isArray(NaN)).toBeFalsy();
    expect(isFn.isArray(Object(NaN))).toBeFalsy();
    expect(isFn.isArray(Object(1))).toBeFalsy();
    expect(isFn.isArray(new Error())).toBeFalsy();
    expect(isFn.isArray(arrayProto.slice)).toBeFalsy();
    expect(isFn.isArray({ a: 1 })).toBeFalsy();
    expect(isFn.isArray(/x/)).toBeFalsy();
    expect(isFn.isArray(123)).toBeFalsy();
    expect(isFn.isArray(Symbol ? Symbol('a') : undefined)).toBeFalsy();
    expect(isFn.isArray(new Date())).toBeFalsy();
  });

  test('isPlainObject', () => {
    expect(isFn.isPlainObject({ a: 1 })).toBeTruthy();

    expect(isFn.isPlainObject(undefined)).toBeFalsy();
    expect(isFn.isPlainObject(new Date())).toBeFalsy();
    expect(isFn.isPlainObject(new Map())).toBeFalsy();
    expect(isFn.isPlainObject(new WeakSet())).toBeFalsy();
    expect(isFn.isPlainObject(new Set())).toBeFalsy();
    expect(isFn.isPlainObject([1, 2, 3])).toBeFalsy();
    expect(
      isFn.isPlainObject(
        new Promise((a) => {
          a(1);
        }),
      ),
    ).toBeFalsy();
    expect(isFn.isPlainObject(null)).toBeFalsy();
    expect(isFn.isPlainObject(true)).toBeFalsy();
    expect(isFn.isPlainObject('value')).toBeFalsy();
    expect(isFn.isPlainObject(Function)).toBeFalsy();
    expect(isFn.isPlainObject(NaN)).toBeFalsy();
    expect(isFn.isPlainObject(Object(NaN))).toBeFalsy();
    expect(isFn.isPlainObject(Object(1))).toBeFalsy();
    expect(isFn.isPlainObject(new Error())).toBeFalsy();
    expect(isFn.isPlainObject(arrayProto.slice)).toBeFalsy();
    expect(isFn.isPlainObject(/x/)).toBeFalsy();
    expect(isFn.isPlainObject(123)).toBeFalsy();
    expect(isFn.isPlainObject(Symbol ? Symbol('a') : undefined)).toBeFalsy();
    expect(isFn.isPlainObject(new Date())).toBeFalsy();
  });

  test('isPromise', () => {
    expect(
      isFn.isPromise(
        new Promise((a) => {
          a(1);
        }),
      ),
    ).toBeTruthy();

    expect(isFn.isPromise(undefined)).toBeFalsy();
    expect(isFn.isPromise(new Date())).toBeFalsy();
    expect(isFn.isPromise(new Map())).toBeFalsy();
    expect(isFn.isPromise(new WeakSet())).toBeFalsy();
    expect(isFn.isPromise(new Set())).toBeFalsy();
    expect(isFn.isPromise({ a: 1 })).toBeFalsy();
    expect(isFn.isPromise([1, 2, 3])).toBeFalsy();
    expect(isFn.isPromise(null)).toBeFalsy();
    expect(isFn.isPromise(true)).toBeFalsy();
    expect(isFn.isPromise('value')).toBeFalsy();
    expect(isFn.isPromise(Function)).toBeFalsy();
    expect(isFn.isPromise(NaN)).toBeFalsy();
    expect(isFn.isPromise(Object(NaN))).toBeFalsy();
    expect(isFn.isPromise(Object(1))).toBeFalsy();
    expect(isFn.isPromise(new Error())).toBeFalsy();
    expect(isFn.isPromise(arrayProto.slice)).toBeFalsy();
    expect(isFn.isPromise(/x/)).toBeFalsy();
    expect(isFn.isPromise(123)).toBeFalsy();
    expect(isFn.isPromise(Symbol ? Symbol('a') : undefined)).toBeFalsy();
    expect(isFn.isPromise(new Date())).toBeFalsy();
  });

  test('isSet', () => {
    expect(isFn.isSet(new Set())).toBeTruthy();

    expect(isFn.isSet(undefined)).toBeFalsy();
    expect(isFn.isSet(new Date())).toBeFalsy();
    expect(isFn.isSet(new Map())).toBeFalsy();
    expect(isFn.isSet(new WeakSet())).toBeFalsy();
    expect(
      isFn.isSet(
        new Promise((a) => {
          a(1);
        }),
      ),
    ).toBeFalsy();
    expect(isFn.isSet({ a: 1 })).toBeFalsy();
    expect(isFn.isSet([1, 2, 3])).toBeFalsy();
    expect(isFn.isSet(null)).toBeFalsy();
    expect(isFn.isSet(true)).toBeFalsy();
    expect(isFn.isSet('value')).toBeFalsy();
    expect(isFn.isSet(Function)).toBeFalsy();
    expect(isFn.isSet(NaN)).toBeFalsy();
    expect(isFn.isSet(Object(NaN))).toBeFalsy();
    expect(isFn.isSet(Object(1))).toBeFalsy();
    expect(isFn.isSet(new Error())).toBeFalsy();
    expect(isFn.isSet(arrayProto.slice)).toBeFalsy();
    expect(isFn.isSet(/x/)).toBeFalsy();
    expect(isFn.isSet(123)).toBeFalsy();
    expect(isFn.isSet(Symbol ? Symbol('a') : undefined)).toBeFalsy();
    expect(isFn.isSet(new Date())).toBeFalsy();
  });

  test('isWeakSet', () => {
    expect(isFn.isWeakSet(new WeakSet())).toBeTruthy();

    expect(isFn.isWeakSet(undefined)).toBeFalsy();
    expect(isFn.isWeakSet(new Date())).toBeFalsy();
    expect(isFn.isWeakSet(new Map())).toBeFalsy();
    expect(isFn.isWeakSet(new Set())).toBeFalsy();
    expect(
      isFn.isWeakSet(
        new Promise((a) => {
          a(1);
        }),
      ),
    ).toBeFalsy();
    expect(isFn.isWeakSet({ a: 1 })).toBeFalsy();
    expect(isFn.isWeakSet([1, 2, 3])).toBeFalsy();
    expect(isFn.isWeakSet(null)).toBeFalsy();
    expect(isFn.isWeakSet(true)).toBeFalsy();
    expect(isFn.isWeakSet('value')).toBeFalsy();
    expect(isFn.isWeakSet(Function)).toBeFalsy();
    expect(isFn.isWeakSet(NaN)).toBeFalsy();
    expect(isFn.isWeakSet(Object(NaN))).toBeFalsy();
    expect(isFn.isWeakSet(Object(1))).toBeFalsy();
    expect(isFn.isWeakSet(new Error())).toBeFalsy();
    expect(isFn.isWeakSet(arrayProto.slice)).toBeFalsy();
    expect(isFn.isWeakSet(/x/)).toBeFalsy();
    expect(isFn.isWeakSet(123)).toBeFalsy();
    expect(isFn.isWeakSet(Symbol ? Symbol('a') : undefined)).toBeFalsy();
    expect(isFn.isWeakSet(new Date())).toBeFalsy();
  });

  test('isMap', () => {
    expect(isFn.isMap(new Map())).toBeTruthy();

    expect(isFn.isMap(undefined)).toBeFalsy();
    expect(isFn.isMap(new Date())).toBeFalsy();
    expect(isFn.isMap(new WeakSet())).toBeFalsy();
    expect(isFn.isMap(new Set())).toBeFalsy();
    expect(
      isFn.isMap(
        new Promise((a) => {
          a(1);
        }),
      ),
    ).toBeFalsy();
    expect(isFn.isMap({ a: 1 })).toBeFalsy();
    expect(isFn.isMap([1, 2, 3])).toBeFalsy();
    expect(isFn.isMap(null)).toBeFalsy();
    expect(isFn.isMap(true)).toBeFalsy();
    expect(isFn.isMap('value')).toBeFalsy();
    expect(isFn.isMap(Function)).toBeFalsy();
    expect(isFn.isMap(NaN)).toBeFalsy();
    expect(isFn.isMap(Object(NaN))).toBeFalsy();
    expect(isFn.isMap(Object(1))).toBeFalsy();
    expect(isFn.isMap(new Error())).toBeFalsy();
    expect(isFn.isMap(arrayProto.slice)).toBeFalsy();
    expect(isFn.isMap(/x/)).toBeFalsy();
    expect(isFn.isMap(123)).toBeFalsy();
    expect(isFn.isMap(Symbol ? Symbol('a') : undefined)).toBeFalsy();
    expect(isFn.isMap(new Date())).toBeFalsy();
  });

  test('isDate', () => {
    expect(isFn.isDate(new Date())).toBeTruthy();
    expect(isFn.isDate(new Date())).toBeTruthy();

    expect(isFn.isDate(undefined)).toBeFalsy();
    expect(isFn.isDate(new Map())).toBeFalsy();
    expect(isFn.isDate(new WeakSet())).toBeFalsy();
    expect(isFn.isDate(new Set())).toBeFalsy();
    expect(
      isFn.isDate(
        new Promise((a) => {
          a(1);
        }),
      ),
    ).toBeFalsy();
    expect(isFn.isDate({ a: 1 })).toBeFalsy();
    expect(isFn.isDate([1, 2, 3])).toBeFalsy();
    expect(isFn.isDate(null)).toBeFalsy();
    expect(isFn.isDate(true)).toBeFalsy();
    expect(isFn.isDate('value')).toBeFalsy();
    expect(isFn.isDate(Function)).toBeFalsy();
    expect(isFn.isDate(NaN)).toBeFalsy();
    expect(isFn.isDate(Object(NaN))).toBeFalsy();
    expect(isFn.isDate(Object(1))).toBeFalsy();
    expect(isFn.isDate(new Error())).toBeFalsy();
    expect(isFn.isDate(arrayProto.slice)).toBeFalsy();
    expect(isFn.isDate(/x/)).toBeFalsy();
    expect(isFn.isDate(123)).toBeFalsy();
    expect(isFn.isDate(Symbol ? Symbol('a') : undefined)).toBeFalsy();
  });

  test('isPrototype', () => {
    function Foo() {}
    Foo.prototype = { constructor: Foo };
    expect(isFn.isPrototype(Foo.prototype)).toBeTruthy();

    expect(isFn.isPrototype(undefined)).toBeFalsy();
    expect(isFn.isPrototype(true)).toBeFalsy();
    expect(isFn.isPrototype({ a: 'as' })).toBeFalsy();
    expect(isFn.isPrototype(new Date())).toBeFalsy();
    expect(isFn.isPrototype(new Map())).toBeFalsy();
    expect(isFn.isPrototype(new WeakSet())).toBeFalsy();
    expect(isFn.isPrototype(new Set())).toBeFalsy();
    expect(
      isFn.isPrototype(
        new Promise((a) => {
          a(1);
        }),
      ),
    ).toBeFalsy();
    expect(isFn.isPrototype([1, 2, 3])).toBeFalsy();
    expect(isFn.isPrototype(null)).toBeFalsy();
    expect(isFn.isPrototype(true)).toBeFalsy();
    expect(isFn.isPrototype('value')).toBeFalsy();
    expect(isFn.isPrototype(Function)).toBeFalsy();
    expect(isFn.isPrototype(NaN)).toBeFalsy();
    expect(isFn.isPrototype(Object(NaN))).toBeFalsy();
    expect(isFn.isPrototype(Object(1))).toBeFalsy();
    expect(isFn.isPrototype(new Error())).toBeFalsy();
    expect(isFn.isPrototype(arrayProto.slice)).toBeFalsy();
    expect(isFn.isPrototype(/x/)).toBeFalsy();
    expect(isFn.isPrototype(123)).toBeFalsy();
    expect(isFn.isPrototype(Symbol ? Symbol('a') : undefined)).toBeFalsy();
    expect(isFn.isPrototype(new Date())).toBeFalsy();
  });

  test('isNaN', () => {
    expect(isFn.isNaN(new Map())).toBeTruthy();
    expect(isFn.isNaN(new WeakSet())).toBeTruthy();
    expect(isFn.isNaN(new Set())).toBeTruthy();
    expect(isFn.isNaN('100F')).toBeTruthy();
    expect(isFn.isNaN(undefined)).toBeTruthy();
    expect(isFn.isNaN(NaN)).toBeTruthy();
    expect(isFn.isNaN(Object(NaN))).toBeTruthy();
    expect(
      isFn.isNaN(
        new Promise((a) => {
          a(1);
        }),
      ),
    ).toBeTruthy();
    expect(isFn.isNaN([1, 2, 3])).toBeTruthy();
    expect(isFn.isNaN(new Error())).toBeTruthy();
    expect(isFn.isNaN(arrayProto.slice)).toBeTruthy();
    expect(isFn.isNaN({ a: 1 })).toBeTruthy();
    expect(isFn.isNaN(/x/)).toBeTruthy();
    expect(isFn.isNaN('a')).toBeTruthy();
    expect(isFn.isNaN(Symbol ? Symbol('a') : undefined)).toBeTruthy();
    expect(isFn.isNaN(Function)).toBeTruthy();

    expect(isFn.isNaN(null)).toBeFalsy();
    expect(isFn.isNaN(new Date())).toBeFalsy();
    expect(isFn.isNaN(123)).toBeFalsy();
    expect(isFn.isNaN(true)).toBeFalsy();
    expect(isFn.isNaN(new Date())).toBeFalsy();
    expect(isFn.isNaN(Object(1))).toBeFalsy();
  });

  test('isEmpty', () => {
    expect(isFn.isEmpty(new Map())).toBeTruthy();
    expect(isFn.isEmpty(new WeakSet())).toBeTruthy();
    expect(isFn.isEmpty(new Set())).toBeTruthy();
    expect(isFn.isEmpty(undefined)).toBeTruthy();
    expect(isFn.isEmpty(NaN)).toBeTruthy();
    expect(isFn.isEmpty(Object(NaN))).toBeTruthy();
    expect(
      isFn.isEmpty(
        new Promise((a) => {
          a(1);
        }),
      ),
    ).toBeTruthy();
    expect(isFn.isEmpty(new Error())).toBeTruthy();
    expect(isFn.isEmpty(arrayProto.slice)).toBeTruthy();
    expect(isFn.isEmpty(/x/)).toBeTruthy();
    expect(isFn.isEmpty(Symbol ? Symbol('a') : undefined)).toBeTruthy();
    expect(isFn.isEmpty(Function)).toBeTruthy();
    expect(isFn.isEmpty(null)).toBeTruthy();
    expect(isFn.isEmpty(new Date())).toBeTruthy();
    expect(isFn.isEmpty(123)).toBeTruthy();
    expect(isFn.isEmpty(true)).toBeTruthy();
    expect(isFn.isEmpty(new Date())).toBeTruthy();
    expect(isFn.isEmpty(Object(1))).toBeTruthy();
    expect(isFn.isEmpty({})).toBeTruthy();

    expect(isFn.isEmpty('a')).toBeFalsy();
    expect(isFn.isEmpty({ a: 1 })).toBeFalsy();
    expect(isFn.isEmpty([1, 2, 3])).toBeFalsy();
    expect(isFn.isEmpty('100F')).toBeFalsy();
    expect(isFn.isEmpty({ length: '0' })).toBeFalsy();
    expect(isFn.isEmpty(toArgs([1, 2, 3]))).toBeFalsy();

    function Foo() {}
    Foo.prototype = { constructor: Foo };
    expect(isFn.isEmpty(Foo.prototype)).toBeFalsy();
  });

  test('isUrl', () => {
    expect(isFn.isUrl('http://www.water.com')).toBeTruthy();
    expect(isFn.isUrl('https://www.water.com')).toBeTruthy();
    expect(isFn.isUrl('https://www.water.com?good=true')).toBeTruthy();

    expect(isFn.isUrl(new Date())).toBeFalsy();
    expect(isFn.isUrl(undefined)).toBeFalsy();
    expect(isFn.isUrl(new Map())).toBeFalsy();
    expect(isFn.isUrl(new WeakSet())).toBeFalsy();
    expect(isFn.isUrl(new Set())).toBeFalsy();
    expect(
      isFn.isUrl(
        new Promise((a) => {
          a(1);
        }),
      ),
    ).toBeFalsy();
    expect(isFn.isUrl({ a: 1 })).toBeFalsy();
    expect(isFn.isUrl([1, 2, 3])).toBeFalsy();
    expect(isFn.isUrl(null)).toBeFalsy();
    expect(isFn.isUrl(true)).toBeFalsy();
    expect(isFn.isUrl('value')).toBeFalsy();
    expect(isFn.isUrl(Function)).toBeFalsy();
    expect(isFn.isUrl(NaN)).toBeFalsy();
    expect(isFn.isUrl(Object(NaN))).toBeFalsy();
    expect(isFn.isUrl(Object(1))).toBeFalsy();
    expect(isFn.isUrl(new Error())).toBeFalsy();
    expect(isFn.isUrl(arrayProto.slice)).toBeFalsy();
    expect(isFn.isUrl(/x/)).toBeFalsy();
    expect(isFn.isUrl(123)).toBeFalsy();
    expect(isFn.isUrl(Symbol ? Symbol('a') : undefined)).toBeFalsy();
  });
});
