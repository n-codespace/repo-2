/**
 * Student Attendance Management System (JavaScript / Node.js)
 * Records student attendance, computes attendance percentage, and flags deficit (<75%).
 */

const fs = require('fs');
const path = require('path');

const DATA_FILE = path.join(__dirname, 'attendance_records.json');

function loadData() {
  if (fs.existsSync(DATA_FILE)) {
    try {
      return JSON.parse(fs.readFileSync(DATA_FILE, 'utf8'));
    } catch (e) {
      // Return fresh state if invalid
    }
  }
  return { students: {}, records: {} };
}

function saveData(data) {
  fs.writeFileSync(DATA_FILE, JSON.stringify(data, null, 2), 'utf8');
}

function addStudent(data, rollNo, name) {
  if (data.students[rollNo]) {
    console.log(`[-] Student with Roll No ${rollNo} already exists!`);
    return false;
  }
  data.students[rollNo] = { name };
  saveData(data);
  console.log(`[+] Student '${name}' (Roll: ${rollNo}) added successfully.`);
  return true;
}

function markAttendance(data, rollNo, status, attendanceDate = null) {
  if (!data.students[rollNo]) {
    console.log(`[-] Student with Roll No ${rollNo} not found.`);
    return false;
  }
  const dateKey = attendanceDate || new Date().toISOString().split('T')[0];
  if (!data.records[dateKey]) {
    data.records[dateKey] = {};
  }
  const statusStr = status.toUpperCase() === 'P' ? 'Present' : 'Absent';
  data.records[dateKey][rollNo] = statusStr;
  saveData(data);
  console.log(`[+] Marked Roll ${rollNo} (${data.students[rollNo].name}) as ${statusStr} for ${dateKey}.`);
  return true;
}

function viewSummary(data) {
  console.log('\n' + '='.repeat(60));
  console.log('           STUDENT ATTENDANCE SUMMARY REPORT (JS)       ');
  console.log('='.repeat(60));
  console.log(`${'Roll No'.padEnd(10)} ${'Name'.padEnd(20)} ${'Present/Total'.padEnd(15)} Percentage`);
  console.log('-'.repeat(60));

  const totalDates = Object.keys(data.records).length;
  if (totalDates === 0) {
    console.log('No attendance records found.');
    return;
  }

  for (const [rollNo, info] of Object.entries(data.students)) {
    let presentCount = 0;
    for (const recs of Object.values(data.records)) {
      if (recs[rollNo] === 'Present') {
        presentCount++;
      }
    }
    const pct = totalDates > 0 ? (presentCount / totalDates) * 100 : 0;
    const warning = pct < 75 ? ' [DEFICIT < 75%]' : '';
    console.log(
      `${rollNo.padEnd(10)} ${info.name.padEnd(20)} ${(presentCount + '/' + totalDates).padEnd(15)} ${pct.toFixed(1)}%${warning}`
    );
  }
  console.log('='.repeat(60) + '\n');
}

function seedSampleData(data) {
  if (Object.keys(data.students).length === 0) {
    addStudent(data, '101', 'Aarav Sharma');
    addStudent(data, '102', 'Diya Patel');
    addStudent(data, '103', 'Rohan Mehta');
    markAttendance(data, '101', 'P', '2026-10-20');
    markAttendance(data, '102', 'P', '2026-10-20');
    markAttendance(data, '103', 'A', '2026-10-20');
    markAttendance(data, '101', 'P', '2026-10-21');
    markAttendance(data, '102', 'A', '2026-10-21');
    markAttendance(data, '103', 'A', '2026-10-21');
  }
}

if (require.main === module) {
  const db = loadData();
  seedSampleData(db);
  viewSummary(db);
}

module.exports = { loadData, saveData, addStudent, markAttendance, viewSummary };
