import assert from 'node:assert/strict';
import test from 'node:test';
import * as api from '../dist/esm/index.js';
test('orders earlier date first', () => {
  assert.equal(api.compareIsoDates('2024-01-01', '2024-02-01'), -1);
});
test('orders later date second', () => {
  assert.equal(api.compareIsoDates('2025-01-01', '2024-12-31'), 1);
});
test('returns zero for equal dates', () => {
  assert.equal(api.compareIsoDates('2024-01-01', '2024-01-01'), 0);
});
test('compares year boundaries', () => {
  assert.equal(api.compareIsoDates('2023-12-31', '2024-01-01'), -1);
});
test('validates both arguments', () => {
  assert.throws(() => api.compareIsoDates('2024-01-01', 'bad'), RangeError);
});
test('rejects impossible dates', () => {
  assert.throws(() => api.compareIsoDates('2024-02-30', '2024-03-01'), RangeError);
});
