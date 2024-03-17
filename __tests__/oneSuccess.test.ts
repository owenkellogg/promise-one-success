// oneSuccess.test.ts
import oneSuccess from '../src';

describe('oneSuccess', () => {
  it('resolves with the first successful promise of type number', async () => {
    
    let successPromise: Promise<number> = Promise.resolve(42);
    let failPromise: Promise<number> = Promise.reject(new Error('Failed'));

    const result = await oneSuccess([failPromise, successPromise]);

    expect(result).toEqual(42);
  });

  it('resolves with the first successful promise of type string', async () => {
    const successPromise: Promise<string> = Promise.resolve("Hello");
    const failPromise: Promise<string> = Promise.reject(new Error('Failed'));

    const result = await oneSuccess([failPromise, successPromise]);

    expect(result).toEqual("Hello");
  });

  it('rejects with all errors if all promises fail', async () => {
    const failPromise1: Promise<string> = Promise.reject(new Error('Failed 1'));
    const failPromise2: Promise<string> = Promise.reject(new Error('Failed 2'));

    try {
      await oneSuccess([failPromise1, failPromise2]);
    } catch (errors) {
      expect(errors).toHaveLength(2);
    }
  });
});
