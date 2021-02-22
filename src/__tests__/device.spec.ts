/** @format */

import * as deviceFn from '../device';

describe('device', () => {
  test('isClient', () => {
    expect(deviceFn.isClient()).toBeTruthy();
  });
});
