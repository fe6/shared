import * as uuidFn from '../src/uuid';

describe('uuid', () => {
  test('uuid', () => {
    const id1 = uuidFn.uuid();
    const id2 = uuidFn.uuid();
    expect(id1).not.toBe(id2);
  });
});
