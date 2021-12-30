import fn from '../src';

describe('api.basic', () => {
  test('input target is number', () => {
    const arr = [1, 2, 3];

    expect(fn(0, arr)).toEqual([1, [2, 3]]);
    expect(fn(1, arr)).toEqual([2, [1, 3]]);
    expect(fn(2, arr)).toEqual([3, [1, 2]]);
  });

  test('input target is function', () => {
    const arr = [1, 2, 3];
    const fn1 = (list: any[]) => 0;
    const fn2 = (list: any[]) => 1;
    const fn3 = (list: any[]) => 2;

    expect(fn(fn1, arr)).toEqual([1, [2, 3]]);
    expect(fn(fn2, arr)).toEqual([2, [1, 3]]);
    expect(fn(fn3, arr)).toEqual([3, [1, 2]]);
  });
});
