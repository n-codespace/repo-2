const test = require('node:test');
const assert = require('node:assert/strict');
const { add, subtract, multiply, divide } = require('./calculator');

test('add calculates addition properly', () => {
  assert.equal(add(10, 5), 15);
  assert.equal(add(-1, 1), 0);
});

test('subtract calculates subtraction properly', () => {
  assert.equal(subtract(10, 5), 5);
});

test('multiply calculates multiplication properly', () => {
  assert.equal(multiply(10, 5), 50);
});

test('divide handles division and zero error properly', () => {
  assert.equal(divide(10, 5), 2);
  assert.throws(() => divide(10, 0), /Cannot divide by zero!/);
});
