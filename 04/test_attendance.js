const test = require('node:test');
const assert = require('node:assert/strict');
const { addStudent, markAttendance } = require('./attendance');

test('addStudent adds a new student successfully', () => {
  const data = { students: {}, records: {} };
  const res = addStudent(data, '201', 'John Doe');
  assert.equal(res, true);
  assert.ok(data.students['201']);
  assert.equal(data.students['201'].name, 'John Doe');
});

test('addStudent rejects duplicate roll numbers', () => {
  const data = { students: {}, records: {} };
  addStudent(data, '201', 'John Doe');
  const duplicateRes = addStudent(data, '201', 'Duplicate John');
  assert.equal(duplicateRes, false);
});

test('markAttendance records Present and Absent properly', () => {
  const data = { students: {}, records: {} };
  addStudent(data, '202', 'Jane Smith');
  const res1 = markAttendance(data, '202', 'P', '2026-10-23');
  assert.equal(res1, true);
  assert.equal(data.records['2026-10-23']['202'], 'Present');

  const res2 = markAttendance(data, '202', 'A', '2026-10-24');
  assert.equal(res2, true);
  assert.equal(data.records['2026-10-24']['202'], 'Absent');
});
