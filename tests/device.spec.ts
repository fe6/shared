import * as deviceFn from '../src/device';

describe('device', () => {
  test('isClient', () => {
    expect(deviceFn.isClient()).toBeTruthy();
  });
});
