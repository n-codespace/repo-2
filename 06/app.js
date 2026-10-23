/**
 * Simple CI Application (JavaScript)
 * Contains easy, understandable functions for Jenkins Scripted Pipeline testing.
 */

function greet(name) {
  return `Hello, ${name}! Welcome to Jenkins CI Pipeline.`;
}

function add(a, b) {
  return a + b;
}

if (require.main === module) {
  console.log('=== Running Simple CI App ===');
  console.log(greet('Student'));
  console.log(`Sum of 5 + 10 = ${add(5, 10)}`);
  console.log('=== App executed successfully! ===');
}

module.exports = { greet, add };
