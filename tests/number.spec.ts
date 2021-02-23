import * as numberFn from '../src/number';
import { falsey, others } from './utils';

describe('number', () => {
  test('isMinus', () => {
    expect(numberFn.isMinus(-1)).toBeTruthy();
    expect(numberFn.isMinus(-1.1)).toBeTruthy();

    expect(numberFn.isMinus()).toBeFalsy();
    expect(numberFn.isMinus(1)).toBeFalsy();
    expect(numberFn.isMinus(1.1)).toBeFalsy();

    others.forEach((oItem) => {
      expect(numberFn.isMinus(oItem)).toBeFalsy();
    });
  });

  test('isInteger', () => {
    expect(numberFn.isInteger(1)).toBeTruthy();
    expect(numberFn.isInteger(-1)).toBeTruthy();

    expect(numberFn.isInteger()).toBeFalsy();
    expect(numberFn.isInteger(1.1)).toBeFalsy();
    expect(numberFn.isInteger(-1.1)).toBeFalsy();

    others.forEach((oItem) => {
      expect(numberFn.isInteger(oItem)).toBeFalsy();
    });
  });

  test('isPlusInteger', () => {
    expect(numberFn.isPlusInteger(1)).toBeTruthy();

    expect(numberFn.isPlusInteger()).toBeFalsy();
    expect(numberFn.isPlusInteger(-1)).toBeFalsy();
    expect(numberFn.isPlusInteger(1.1)).toBeFalsy();
    expect(numberFn.isPlusInteger(-1.1)).toBeFalsy();

    others.forEach((oItem) => {
      expect(numberFn.isPlusInteger(oItem)).toBeFalsy();
    });
  });

  test('isMinusInteger', () => {
    expect(numberFn.isMinusInteger(-1)).toBeTruthy();

    expect(numberFn.isMinusInteger(1)).toBeFalsy();
    expect(numberFn.isMinusInteger()).toBeFalsy();
    expect(numberFn.isMinusInteger(1.1)).toBeFalsy();
    expect(numberFn.isMinusInteger(-1.1)).toBeFalsy();

    others.forEach((oItem) => {
      expect(numberFn.isMinusInteger(oItem)).toBeFalsy();
    });
  });

  test('isFloat', () => {
    expect(numberFn.isFloat(1.1)).toBeTruthy();
    expect(numberFn.isFloat(-1.1)).toBeTruthy();

    expect(numberFn.isFloat(1)).toBeFalsy();
    expect(numberFn.isFloat(-1)).toBeFalsy();
    expect(numberFn.isFloat()).toBeFalsy();

    others.forEach((oItem) => {
      expect(numberFn.isFloat(oItem)).toBeFalsy();
    });
  });

  test('inRange', () => {
    expect(numberFn.inRange(3, 5)).toBeTruthy();
    expect(numberFn.inRange(1, 1, 5)).toBeTruthy();

    falsey.forEach((fItem) => {
      expect(numberFn.inRange(0, fItem)).toBeFalsy();
    });

    expect(numberFn.inRange(2, 5, 1)).toBeTruthy();
    expect(numberFn.inRange(-3, -2, -6)).toBeTruthy();
    expect(numberFn.inRange(0.5, 5)).toBeTruthy();
    expect(numberFn.inRange(1.2, 1, 5)).toBeTruthy();

    expect(numberFn.inRange(5, 5)).toBeFalsy();
    expect(numberFn.inRange(6, 5)).toBeFalsy();
    expect(numberFn.inRange(5, 1, 5)).toBeFalsy();
    expect(numberFn.inRange(5.2, 5)).toBeFalsy();
    expect(numberFn.inRange(0.5, 1, 5)).toBeFalsy();
    expect(numberFn.inRange(0.5, 1, new Set())).toBeFalsy();

    others.forEach((oItem) => {
      expect(numberFn.inRange(oItem)).toBeFalsy();
    });
  });

  test('randomNumber', () => {
    expect(numberFn.randomNumber(1.1, 1.3)).toBeGreaterThanOrEqual(1.1);
    expect(numberFn.randomNumber(1, 1, true)).toBeGreaterThanOrEqual(1);
    expect(numberFn.randomNumber(-1, 1)).toBeGreaterThanOrEqual(-1);
    expect(numberFn.randomNumber(1, 1)).toBeGreaterThanOrEqual(1);
    expect(numberFn.randomNumber(2, 2)).toBeGreaterThanOrEqual(2);
    expect(numberFn.randomNumber(1.1, 89)).toBeGreaterThanOrEqual(1.1);
    expect(numberFn.randomNumber(-1.1, 88)).toBeGreaterThanOrEqual(-1.1);

    others.forEach((oItem) => {
      expect(numberFn.randomNumber(oItem, 9)).toBe(0);
    });
  });

  test('count', () => {
    expect(
      numberFn.count((augend: number, addend: number) => augend + addend, 1)(),
    ).toBe(1);
    expect(
      numberFn.count((augend: number, addend: number) => augend + addend)(),
    ).toBe(0);
    expect(
      numberFn.count((augend: number, addend: number) => augend + addend, 0)(1),
    ).toBe(2);
    expect(
      numberFn.count((augend: number, addend: number) => augend + addend, 0)(
        1,
        2,
      ),
    ).toBe(3);

    others.forEach((oItem) => {
      expect(
        numberFn.count((augend: number, addend: number) => augend + addend, 0)(
          2,
          oItem,
        ),
      ).toBe(4);
      expect(
        numberFn.count((augend: number, addend: number) => augend + addend, 0)(
          oItem,
          2,
        ),
      ).toBe(4);
      expect(
        numberFn.count((augend: number, addend: number) => augend + addend, 0)(
          oItem,
          oItem,
        ),
      ).toBe(0);
    });
  });

  test('add', () => {
    expect(numberFn.add()).toBe(0);
    expect(numberFn.add(1)).toBe(2);
    expect(numberFn.add(1, 2)).toBe(3);
    expect(numberFn.add(1, -2)).toBe(-1);
    expect(numberFn.add(-4, 2)).toBe(-2);
    expect(numberFn.add(-4, -2)).toBe(-6);
    expect(numberFn.add(0, 2)).toBe(2);
    expect(numberFn.add(2, 0)).toBe(2);
    expect(numberFn.add(0, 0)).toBe(0);

    others.forEach((oItem) => {
      expect(numberFn.add(2, oItem)).toBe(4);
      expect(numberFn.add(oItem, 2)).toBe(4);
      expect(numberFn.add(oItem, oItem)).toBe(0);
    });
  });

  test('subtract', () => {
    expect(numberFn.subtract()).toBe(0);
    expect(numberFn.subtract(1)).toBe(0);
    expect(numberFn.subtract(4, 1)).toBe(3);
    expect(numberFn.subtract(4, -1)).toBe(5);
    expect(numberFn.subtract(1, 2)).toBe(-1);
    expect(numberFn.subtract(0, 2)).toBe(-2);
    expect(numberFn.subtract(2, 0)).toBe(2);
    expect(numberFn.subtract(0, 0)).toBe(0);

    others.forEach((oItem) => {
      expect(numberFn.subtract(2, oItem)).toBe(0);
      expect(numberFn.subtract(oItem, 2)).toBe(0);
      expect(numberFn.subtract(oItem, oItem)).toBe(0);
    });
  });

  test('multiply', () => {
    expect(numberFn.multiply()).toBe(1);
    expect(numberFn.multiply(2)).toBe(4);
    expect(numberFn.multiply(2)).toBe(4);
    expect(numberFn.multiply(4, 2)).toBe(8);
    expect(numberFn.multiply(-2, -1)).toBe(2);
    expect(numberFn.multiply(1, -2)).toBe(-2);
    expect(numberFn.multiply(0, 2)).toBe(0);
    expect(numberFn.multiply(2, 0)).toBe(0);
    expect(numberFn.multiply(0, 0)).toBe(0);

    others.forEach((oItem) => {
      expect(numberFn.multiply(2, oItem)).toBe(4);
      expect(numberFn.multiply(oItem, 2)).toBe(4);
      expect(numberFn.multiply(oItem, oItem)).toBe(1);
    });
  });

  test('divide', () => {
    expect(numberFn.divide()).toBe(1);
    expect(numberFn.divide(2)).toBe(1);
    expect(numberFn.divide(2)).toBe(1);
    expect(numberFn.divide(4, 2)).toBe(2);
    expect(numberFn.divide(-2, -1)).toBe(2);
    expect(numberFn.divide(1, -2)).toBe(-0.5);
    expect(numberFn.divide(0, 2)).toBe(0);
    expect(numberFn.divide(2, 0)).toBe(Infinity);
    expect(numberFn.divide(0, 0)).toBe(NaN);

    others.forEach((oItem) => {
      expect(numberFn.divide(2, oItem)).toBe(1);
      expect(numberFn.divide(oItem, 2)).toBe(1);
      expect(numberFn.divide(oItem, oItem)).toBe(1);
    });
  });
});
