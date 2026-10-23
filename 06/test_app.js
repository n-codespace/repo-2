const test = require('node:test');
const assert = require('node:assert/strict');
const { greet, add } = require('./app');

test('greet function returns proper welcome message', () => {
  const result = greet('Alex');
  assert.equal(result, 'Hello, Alex! Welcome to Jenkins CI Pipeline.');
});

test('add function correctly sums two numbers', () => {
  const result = add(5, 10);
  assert.equal(result, 15);
});
