import fn from '../src';

describe('api.basic', () => {
  test('normail single value case', () => {
    const arr = [1, 2, 3];

    expect(fn(0, arr)).toEqual({ one: 1, extra: [2, 3] });
    expect(fn(1, arr)).toEqual({ one: 2, extra: [1, 3] });
    expect(fn(2, arr)).toEqual({ one: 3, extra: [1, 2] });
  });
});
