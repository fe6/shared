import * as formatFn from '../format';
import { others } from './utils';

describe('format', () => {
  test('fileSize', () => {
    expect(formatFn.fileSize()).toStrictEqual({ size: 0, unit: '' });
    expect(formatFn.fileSize(0)).toStrictEqual({ size: 0, unit: 'bytes' });
    expect(formatFn.fileSize(1)).toStrictEqual({ size: 1, unit: 'bytes' });
    expect(formatFn.fileSize(1024)).toStrictEqual({ size: 1, unit: 'KB' });
    expect(formatFn.fileSize(1024 ** 2)).toStrictEqual({ size: 1, unit: 'MB' });
    expect(formatFn.fileSize(1024 ** 3)).toStrictEqual({ size: 1, unit: 'GB' });
    expect(formatFn.fileSize(1024 ** 4)).toStrictEqual({
      size: 1024,
      unit: 'TB',
    });
    expect(formatFn.fileSize(1111)).toStrictEqual({ size: 1.08, unit: 'KB' });
  });

  test('phone', () => {
    expect(formatFn.phone()).toBe('');
    expect(formatFn.phone('a111')).toBe('');
    expect(formatFn.phone(902078)).toBe('');
    expect(formatFn.phone('13810902078')).toBe('138****2078');
    expect(formatFn.phone(13810902078)).toBe('138****2078');

    others.forEach((oItem) => {
      expect(formatFn.phone(oItem)).toBe('');
    });
  });

  test('money', () => {
    expect(formatFn.money()).toBe('');
    expect(formatFn.money('a111')).toBe('');
    expect(formatFn.money(902078)).toBe('902,078');
    expect(formatFn.money(902078.1231)).toBe('902,078.1231');
    expect(formatFn.money('13810902078')).toBe('13,810,902,078');
    expect(formatFn.money(13810902078)).toBe('13,810,902,078');
    expect(formatFn.money('13,810,902,078')).toBe('13810902078');

    others.forEach((oItem) => {
      expect(formatFn.money(oItem)).toBe('');
    });
  });

  test('camelize', () => {
    expect(formatFn.camelize('water-isVery-good')).toBe('waterIsVeryGood');
    expect(formatFn.camelize('water--isVery--good', '--')).toBe(
      'waterIsVeryGood',
    );
    expect(formatFn.camelize()).toBe('');
    expect(formatFn.camelize('')).toBe('');
    expect(formatFn.camelize('a111')).toBe('');
    expect(formatFn.camelize('water+isVery+good', '+')).toBe('');
    expect(formatFn.camelize('water*isVery*good', '*')).toBe('');
    expect(formatFn.camelize('水滴')).toBe('');
    expect(formatFn.camelize('13810902078')).toBe('');

    others.forEach((oItem) => {
      expect(formatFn.camelize(oItem)).toBe('');
    });
  });

  test('hyphenate', () => {
    expect(formatFn.hyphenate('WaterIsVeryGood')).toBe('water-is-very-good');
    expect(formatFn.hyphenate('WaterIsVeryGood', '--')).toBe(
      'water--is--very--good',
    );
    expect(formatFn.hyphenate()).toBe('');
    expect(formatFn.hyphenate('a111')).toBe('');
    expect(formatFn.hyphenate('111F')).toBe('111-f');
    expect(formatFn.hyphenate('水滴')).toBe('');
    expect(formatFn.hyphenate('13810902078')).toBe('');

    others
      .filter((oi) => oi !== '100F')
      .forEach((oItem) => {
        expect(formatFn.hyphenate(oItem)).toBe('');
      });
  });

  test('firstCapitalize', () => {
    expect(formatFn.firstCapitalize('WaterIsVeryGood')).toBe('WaterIsVeryGood');
    expect(formatFn.firstCapitalize('water-is-very-good')).toBe(
      'Water-is-very-good',
    );
    expect(formatFn.firstCapitalize()).toBe('');
    expect(formatFn.firstCapitalize('a111')).toBe('A111');
    expect(formatFn.firstCapitalize('111F')).toBe('');
    expect(formatFn.firstCapitalize('水滴')).toBe('');
    expect(formatFn.firstCapitalize('13810902078')).toBe('');

    others
      .filter((oi) => oi !== 'a')
      .forEach((oItem, ass) => {
        expect(formatFn.firstCapitalize(oItem)).toBe('');
      });
  });
});
