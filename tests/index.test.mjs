import assert from 'node:assert/strict';
import test from 'node:test';
import * as api from '../dist/esm/index.js';
test('sums integers', () => {
  assert.equal(api.sumFinite([1, 2, 3]), 6);
});
test('sums fractions', () => {
  assert.equal(api.sumFinite([1.5, 2, -0.5]), 3);
});
test('returns zero for empty array', () => {
  assert.equal(api.sumFinite([]), 0);
});
test('supports negative values', () => {
  assert.equal(api.sumFinite([-2, -3]), -5);
});
test('does not mutate input', () => {
  const x = [1, 2];
  api.sumFinite(x);
  assert.deepEqual(x, [1, 2]);
});
test('rejects non-finite member', () => {
  assert.throws(() => api.sumFinite([1, Infinity]), TypeError);
});
