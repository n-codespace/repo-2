const test = require('node:test');
const assert = require('node:assert/strict');
const { applyDiscount, calculateTax } = require('./app');

test('applyDiscount applies WELCOME10 coupon correctly', () => {
  const { finalAmount, discountVal } = applyDiscount(1000.0, 'WELCOME10');
  assert.equal(finalAmount, 900.0);
  assert.equal(discountVal, 100.0);
});

test('applyDiscount applies FESTIVE20 coupon correctly', () => {
  const { finalAmount, discountVal } = applyDiscount(2000.0, 'FESTIVE20');
  assert.equal(finalAmount, 1600.0);
  assert.equal(discountVal, 400.0);
});

test('applyDiscount handles invalid coupon gracefully', () => {
  const { finalAmount, discountVal } = applyDiscount(500.0, 'INVALID');
  assert.equal(finalAmount, 500.0);
  assert.equal(discountVal, 0.0);
});

test('applyDiscount throws error for negative amounts', () => {
  assert.throws(() => applyDiscount(-100, 'WELCOME10'), /Total amount cannot be negative/);
});

test('calculateTax computes 5 percent tax', () => {
  assert.equal(calculateTax(1000.0, 0.05), 50.0);
});
