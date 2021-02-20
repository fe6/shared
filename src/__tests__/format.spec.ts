import * as formatFn from '../format';

describe('format', () => {
  test('fileSize', () => {
    expect(formatFn.fileSize()).toStrictEqual({ size: 0, unit: '' });
    expect(formatFn.fileSize(0)).toStrictEqual({ size: 0, unit: 'bytes' });
    expect(formatFn.fileSize(1)).toStrictEqual({ size: 1, unit: 'bytes' });
    expect(formatFn.fileSize(1024)).toStrictEqual({ size: 1, unit: 'KB' });
    expect(formatFn.fileSize(1024 ** 2)).toStrictEqual({ size: 1, unit: 'MB' });
    expect(formatFn.fileSize(1024 ** 3)).toStrictEqual({ size: 1, unit: 'GB' });
    expect(formatFn.fileSize(1024 ** 4)).toStrictEqual({ size: 1024, unit: 'TB' });
    expect(formatFn.fileSize(1111)).toStrictEqual({ size: 1.08, unit: 'KB' });
  });
});
