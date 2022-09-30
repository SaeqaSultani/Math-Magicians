import operate from '../logic/operate';

describe('Test the operates', () => {
  test('should substraction  the numbers', () => {
    const a = 4;
    const b = 2;
    const operation = '-';

    expect(operate(a, b, operation)).toEqual('2');
  });

  test('should sum the numbers', () => {
    const a = 1;
    const b = 2;
    const operation = '+';

    expect(operate(a, b, operation)).toEqual('3');
  });

  test('should division  the numbers', () => {
    const a = 6;
    const b = 2;
    const operation = '÷';

    expect(operate(a, b, operation)).toEqual('3');
  });

  test('should modulas the numbers', () => {
    const a = 2;
    const b = 1;
    const operation = '%';

    expect(operate(a, b, operation)).toEqual('0');
  });

  test('should multiplication  the numbers', () => {
    const a = 2;
    const b = 1;
    const operation = 'x';

    expect(operate(a, b, operation)).toEqual('2');
  });
});
