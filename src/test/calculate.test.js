import calculate from '../logic/calculate';

describe('Test the operates', () => {
  test('should return the sum of numbers', () => {
    const obj = {
      total: 3,
      next: 3,
      operation: '+',
    };
    const btn = '=';
    expect(calculate(obj, btn)).toEqual({
      next: null,
      operation: null,
      total: '6',
    });
  });

  test('should return the substraction of numbers', () => {
    const obj = {
      total: 3,
      next: 3,
      operation: '-',
    };
    const btn = '=';
    expect(calculate(obj, btn)).toEqual({
      next: null,
      operation: null,
      total: '0',
    });
  });

  test('should return the multiplication of numbers', () => {
    const obj = {
      total: 3,
      next: 3,
      operation: 'x',
    };
    const btn = '=';
    expect(calculate(obj, btn)).toEqual({
      next: null,
      operation: null,
      total: '9',
    });
  });

  test('should return the division of numbers', () => {
    const obj = {
      total: 3,
      next: 3,
      operation: '÷',
    };
    const btn = '=';
    expect(calculate(obj, btn)).toEqual({
      next: null,
      operation: null,
      total: '1',
    });
  });

  test('should return the modulas of numbers', () => {
    const obj = {
      total: 3,
      next: 3,
      operation: '%',
    };
    const btn = '=';
    expect(calculate(obj, btn)).toEqual({
      next: null,
      operation: null,
      total: '0',
    });
  });
});
