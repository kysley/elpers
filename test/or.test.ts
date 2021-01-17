import { or, OrOptions } from '../src/or';

describe('Test for conditional outcomes', () => {
  const condition1 = 'Something';
  const condition2 = 'Something Else';

  it('should resolve true for left condition', () => {
    const comparable = 'Something';
    const result = or(comparable, condition1, condition2);
    expect(result).toEqual(true);
  });

  it('should resolve true for second condition', () => {
    const comparable = 'Something Else';
    const result = or(comparable, condition1, condition2);
    expect(result).toEqual(true);
  });

  it('should resolve false for both conditions', () => {
    const comparable = 'Not Something Else';
    const result = or(comparable, condition1, condition2);
    expect(result).toEqual(false);
  });

  it('should resolve true on case sensitivity', () => {
    const comparable = 'Something Else';
    const opts = new OrOptions(true);
    const result = or(comparable, condition1, condition2, opts);
    expect(result).toEqual(true);
  });

  it('should resolve false on case sensitivity', () => {
    const comparable = 'Something else';
    const opts = new OrOptions(true);
    const result = or(comparable, condition1, condition2, opts);
    expect(result).toEqual(false);
  });

  it('should resolve false on case sensitivity', () => {
    const comparable = 'Something else';
    const opts = new OrOptions(true);
    const result = or(comparable, condition1, condition2, opts);
    expect(result).toEqual(false);
  });
});
