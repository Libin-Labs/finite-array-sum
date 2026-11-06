export function sumFinite(values: readonly number[]): number {
  if (!Array.isArray(values) || values.some((value) => !Number.isFinite(value)))
    throw new TypeError('Expected finite number array');
  const result = values.reduce((sum, value) => sum + value, 0);
  if (!Number.isFinite(result)) throw new RangeError('Sum overflowed');
  return result;
}
